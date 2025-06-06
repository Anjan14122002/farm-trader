import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { IoMdCloseCircle } from "react-icons/io";
import { Context, BASE_URL } from '../main';
import axios from 'axios';
import { RxAvatar } from "react-icons/rx";
import { toast , ToastContainer} from 'react-toastify'

function Navbar() {
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const { user, setUser  } = useContext(Context);
    const [userAvatar, setUserAvatar] = useState('');
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);

    useEffect(() => {
        const fetchUserAvatar = async () => {
            if (isAuthenticated) {
                try {
                    console.log(user);

                    axios.defaults.withCredentials = true;
                    const response = await axios.get(`http://localhost:3000/api/v1/userAvatar/${user}`, {
                        credentials: 'include',
                        responseType: 'arraybuffer',
                    });

                    const blob = new Blob([response.data], { type: 'image/jpeg' });

                    // Create an object URL from the blob
                    const imageUrl = URL.createObjectURL(blob);
                    console.log(imageUrl);
                    setUserAvatar(imageUrl);
                    console.log(response);
                } catch (error) {
                    console.error('Error fetching user avatar:', error);
                }
            } else {
                setUserAvatar('');
            }
        };

        fetchUserAvatar();
    }, [isAuthenticated]);

    const toggleLoginModal = () => {
        setShowLoginModal(!showLoginModal);
    };

    const toggleSignupModal = () => {
        setShowSignupModal(!showSignupModal);
    };

    const handleLogout = async () => {
        try {
            axios.defaults.withCredentials = true;
            const response=  await axios.post(`${BASE_URL}/logout`, {credentials: 'include'})
            setIsAuthenticated(false);
            console.log("Logout response : " , response)
            toast.success('Logout successful')
        } catch (error) {
            toast.error('Error:'+ error.data)
            console.log('logout clicked with error!')
            setIsAuthenticated(true);
        }
    }
    return (
        <>
            <nav className="bg-primary shadow-md">
                <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                    <Link to="/" className="text-white flex items-center">
                        <img src={logo} alt="Logo" className="h-8 w-auto mr-2" />
                        <span className="text-white font-bold text-xl">AgroTrader</span>
                    </Link>
     

                    <div className="space-x-4">
                        <Link to="/" className="text-white hover:text-accent">Home</Link>
                        <Link to="/search" className="text-white hover:text-accent">Search</Link>
                        <Link to="/dashboard" className="text-white hover:text-accent">Dashboard</Link>
                        <Link to="/sell" className="text-white hover:text-accent">Sell Product</Link>
                    </div>


                    <div className="space-x-4 flex items-center">
                        {isAuthenticated ? (
                            <button onClick={handleLogout} className="text-white  hover:text-accent">Logout</button>
                        ) : (
                            <>
                                <button onClick={toggleLoginModal} className="text-white hover:text-accent">Login</button>
                                <button onClick={toggleSignupModal} className="text-white hover:text-accent">Register</button>
                            </>

                        )}

                        <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
                            <span className="text-primary font-bold">
                            {
                                isAuthenticated ? (<>
                                    <img src={userAvatar} alt="avatar" className='w-50 h-50 object-cover rounded-full'/>
                                </>) : (<RxAvatar/>)
                            }
                             </span>
                        </div>
                    </div>
                </div>
            </nav>

            {showLoginModal && (
                <div className="fixed z-100 top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50" style={{ "z-index": '100' }}>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <button onClick={toggleLoginModal} className="text-red-500 float-end text-xl mt-4"><IoMdCloseCircle /></button>
                        <Login />
                    </div>
                </div>
            )}

            {showSignupModal && (
                <div className="fixed z-100 top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50" style={{ "z-index": '100' }}>
                    <div className="bg-white p-8 rounded-lg shadow-lg ">
                        <button onClick={toggleSignupModal} className="text-red-500 float-end text-xl mt-4"><IoMdCloseCircle /></button>
                        <Signup />
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
