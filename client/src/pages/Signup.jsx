/* eslint-disable no-case-declarations */
import { useState , useContext} from 'react';
import { FiUploadCloud } from "react-icons/fi";
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {Context, BASE_URL} from '../main';

function Signup() {
    const {isAuthenticated, setIsAuthenticated} = useContext(Context);
    const {user, setUser } = useContext(Context);

    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
        contact_number: '',
        address: {
            street: '',
            city: '',
            state: '',
            country: '',
            postalCode: '',
        },
        image: null
    });

    const [errors, setErrors] = useState({});
    const [uploadedImage, setUploadedImage] = useState(null);

    //handling change in form
    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'image') {
            setFormData({
                ...formData,
                image: files && files[0]
            })
        }
        else if (name.startsWith("address.")) {
            const addressField = name.split(".")[1]; // Extract the field name from "address.fieldName"
            setFormData(prevState => ({
                ...prevState,
                address: {
                    ...prevState.address,
                    [addressField]: value
                },
            }));
        } else {
            // If the changed field is not within the address object
            setFormData({
                ...formData,
                [name]: value,
            });
        }
        // Validate form field
        const validationErrors = { ...errors };
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        switch (name) {
            case 'email':
                validationErrors.email = !value.trim()
                    ? 'Email is required'
                    : !emailRegex.test(value.trim())
                        ? 'Invalid email format'
                        : '';
                break;
            case 'name':
                validationErrors.name = !value.trim() ? 'Name is required' : '';
                break;
            case 'password':
                const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
                validationErrors.password = !value.trim()
                    ? 'Password is required'
                    : !passwordRegex.test(value.trim())
                        ? 'Password must be at least 8 characters long and contain at least one uppercase letter, one digit, and one special character'
                        : '';
                // Check if confirm password matches
                validationErrors.confirmPassword =
                    value.trim() !== formData.confirmPassword.trim()
                        ? 'Passwords do not match'
                        : '';
                break;
            case 'confirmPassword':
                validationErrors.confirmPassword =
                    value.trim() !== formData.password.trim()
                        ? 'Passwords do not match'
                        : '';
                break;
            case 'contact_number':
                const contactNumberRegex = /^\d{10}$/;
                validationErrors.contactNumber = !value.trim()
                    ? 'Contact number is required'
                    : !contactNumberRegex.test(value.trim())
                        ? 'Contact number must be 10 digits long'
                        : '';
                break;
            case 'postalCode':
                const postalCodeRegex = /^\d{6}$/;
                validationErrors.postalCode = !value.trim()
                    ? 'Postal code is required'
                    : !postalCodeRegex.test(value.trim())
                        ? 'Postal code must be 6 digits long'
                        : '';
                break;
            default:
                break;
        }
        // Set errors
        setErrors(validationErrors);
    };

    const handleImageUpload = async () => {
        const formData = new FormData();
        formData.append('image', formData.image);  // Append image to FormData

        try {
            const response = await axios.post('/', formData);
            // Handle successful image upload, e.g., store image path in state
            console.log('Image uploaded:', response.data.imagePath);
            setUploadedImage(response.data.imagePath);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };
    // Function to check if there are any validation errors
    const hasErrors = Object.keys(errors).some((key) => errors[key]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // If no errors, submit the form
        // await handleImageUpload();
        if (!hasErrors) {
            // Submit the form
            try {
                axios.defaults.withCredentials = true;
                const response =  await axios.post('http://localhost:3000/api/v1/register', formData,{
                    // credentials: true,
                    credentials: 'include'
                  })
                // console.log('Form submitted:', response);
                console.log(response.data.userInfo.userId);
                  setUser(response.data.userInfo.userId);
                // If form submission is successful, upload the image
                const formDataWithImage = new FormData();
                formDataWithImage.append('avatar', formData.image);

                const imageUploadResponse = await axios.post('http://localhost:3000/api/v1/userAvatar', formDataWithImage, {
                    // withCredentials: true
                    credentials: 'include',
                    // credentials: true
                });
                console.log('Image uploaded:', imageUploadResponse.data);
                toast.success('Signup Successful');
                setIsAuthenticated(true);
                // Reset form fields
                setFormData({
                    email: '',
                    name: '',
                    password: '',
                    confirmPassword: '',
                    contact_number: '',
                    address: {
                        street: '',
                        city: '',
                        state: '',
                        country: '',
                        postalCode: '',
                    },
                    image: null
                });
                setErrors({})
                setUploadedImage(null);
            } catch (error) {
                console.log('Error submitting form:', error.response.data)
                toast.error('Error: ' + error.response.data.message);
            }

        }
    };

    return (
        <div className="container mx-auto mt-8 w-[500px]">
            <ToastContainer />
            <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
            <form onSubmit={handleSubmit} className="mx-auto flex gap-8 justify-between">
                <div>
                    {/* Image */}
                    <h1 className='text-center mb-1 font-semibold'>
                        Upload profile
                    </h1>
                    {/* Render uploaded image or drag and drop area */}
                    {formData.image? (
                        <img src={URL.createObjectURL(formData.image)} alt="Uploaded" className="w-40 h-40 object-cover" />
                    ) : (
                        <div className="flex flex-col justify-center items-center h-40 mb-2 border-dashed border-spacing-7 bg-green-100 border-green-600 border-2 rounded-xl">
                            <FiUploadCloud className='text-3xl' />
                            <h2>Drag and Drop Files</h2>
                            <p className='text-sm text-gray-400'>or</p>
                            <input type="file" name="image" onChange={handleChange} className="hidden" />
                            <button type="button" onClick={() => document.getElementsByName("image")[0].click()} className='rounded-lg p-2 bg-green-700 text-white'>
                                Browse
                            </button>
                        </div>
                    )}

                    {/* Name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`mt-1 p-2 block w-full border-gray-300 border-2 rounded-md ${errors.name && 'border-red-500'}`} />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`mt-1 p-2 block w-full  border-gray-300 border-2 rounded-md ${errors.email && 'border-red-500'}`} />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    {/* Password */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className={`mt-1 p-2 block w-full border-2 border-gray-300 rounded-md ${errors.password && 'border-red-500'}`} />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>
                    {/* Confirm Password */}
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className={`mt-1 p-2 block w-full border-2 border-gray-300 rounded-md ${errors.confirmPassword && 'border-red-500'}`} />
                        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                    </div>
                </div>
                <div>

                    {/* Contact Number */}
                    <div className="mb-4">
                        <label htmlFor="contact_number" className="block text-sm font-medium text-gray-700">Contact Number</label>
                        <input type="tel" id="contact_number" name="contact_number" value={formData.contactNumber} onChange={handleChange} className={`mt-1 p-2 block w-full border-2 border-gray-300 rounded-md ${errors.contactNumber && 'border-red-500'}`} />
                        {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>}
                    </div>
                    {/* Street */}
                    <div className="mb-4">
                        <label htmlFor="street" className="block text-sm font-medium text-gray-700">Street</label>
                        <input type="text" id="street" name="address.street" value={formData.street} onChange={handleChange} className={`mt-1 p-2 block w-full border-2 border-gray-300 rounded-md ${errors.street && 'border-red-500'}`} />
                        {errors.street && <p className="text-red-500 text-sm mt-1">{errors.street}</p>}
                    </div>
                    {/* City */}
                    <div className="mb-4">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                        <input type="text" id="city" name="address.city" value={formData.city} onChange={handleChange} className={`mt-1 p-2 block w-full border-2 border-gray-300 rounded-md ${errors.city && 'border-red-500'}`} />
                        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                    </div>
                    {/* State */}
                    <div className="mb-4">
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                        <input type="text" id="state" name="address.state" value={formData.state} onChange={handleChange} className={`mt-1 p-2 block w-full border-2 border-gray-300 rounded-md ${errors.state && 'border-red-500'}`} />
                        {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                    </div>
                    {/* Country */}
                    <div className="mb-4">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                        <input type="text" id="country" name="address.country" value={formData.country} onChange={handleChange} className={`mt-1 p-2 block w-full border-2 border-gray-300 rounded-md ${errors.country && 'border-red-500'}`} />
                        {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                    </div>
                    {/* Postal Code */}
                    <div className="mb-4">
                        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
                        <input type="text" id="postalCode" name="address.postalCode" value={formData.postalCode} onChange={handleChange} className={`mt-1 p-2 block w-full border-2 border-gray-300 rounded-md ${errors.postalCode && 'border-red-500'}`} />
                        {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
                    </div>
                    <button type="submit" className={`bg-primary text-white  px-4 py-2 rounded-md ${hasErrors ? 'cursor-not-allowed opacity-50' : 'hover:bg-primary-dark'}`} disabled={hasErrors}>Signup</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
