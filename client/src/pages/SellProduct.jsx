import { IoCloudUploadOutline } from "react-icons/io5";
import { useState } from "react";

function SellProduct() {
    const [pricePerHour, setPricePerHour] = useState('');
    const [pricePerDay, setPricePerDay] = useState('');
    const [hourError, setHourError] = useState('');
    const [dayError, setDayError] = useState('');

    const handlePricePerHourChange = (event) => {
        const value = event.target.value;
        setPricePerHour(value);

        // Check if price per hour is valid
        if (parseFloat(value) <= 0) {
            setHourError('Price should be greater than zero.');
        } else {
            setHourError('');
        }
    };

    const handlePricePerDayChange = (event) => {
        const value = event.target.value;
        setPricePerDay(value);

        // Check if price per day is valid
        if (parseFloat(value) <= 0) {
            setDayError('Price should be greater than zero.');
        } else {
            setDayError('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if there are any errors
        if (hourError || dayError) {
            alert('Please fix the errors before submitting.');
            return;
        }

        // Perform form submission logic if there are no errors
        // Your form submission logic here
    };

    return (
        <div className="flex justify-center">
            <div className="flex flex-col p-5 w-3/4">
                <div className="bg-white">
                    <div className="p-4">
                        <h1 className="font-bold text-2xl">
                            Add Equipment details
                        </h1>
                        <p className="text-gray-500">Fill the details of your equipment which you want to rent, accordingly</p>
                    </div>
                </div>

                <h1 className="py-5 text-lg font-semibold shadow-md p-4">Basic Details</h1>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="p-5 bg-white">
                        {/* Your image upload section */}

                        {/* Your image upload section */}
                    </div>
                    <div className="flex flex-col gap-8 mb-5 p-4 bg-white">
                        {/* Your input fields */}
                        <div className="p-5  bg-white">

                        <div className="h-52 border-4 border-dashed border-gray-300 flex flex-col justify-center items-center bg-zinc-100">
                            <IoCloudUploadOutline className="text-6xl" />
                            <p className="text-2xl font-semibold">Drag and drop images</p>
                            <p className="text-gray-400">or browse to chooose a file</p>
                            <button className="text-lg text-primary hover:text-green-700">Browse</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 mb-5 p-4 bg-white">
                        <label >
                            <p>Equipment Name <span className="text-red-400">*</span></p>
                            <input type="text" className="w-full p-2 border-4 outline-4  outline-primary" />
                        </label>
                        <label >
                            <p> Manufacture&apos;s Name</p>
                            <input type="text" className="w-full p-2 border-4 outline-4  outline-primary" />
                        </label>
                        <label className="flex" >
                            <p>Equipment type:</p>
                            <select className="ml-3 border-4 outline-green-700">
                                <option value="Tracktor">Tracktor</option>
                                <option value="Cultivator">Cultivator</option>
                                <option value="Fertilizer spreaders">Fertilizer spreaders</option>
                                <option value="Sprayers">Sprayers</option>
                                <option value="Irrigation Equipment">Irrigation Equipment</option>
                                <option value="Mowers">Mowers</option>
                            </select>

                        </label>

                        <label >
                            <p>Description</p>
                            <textarea className="resize-none w-full h-40 border-4 focus:border-primary" placeholder="Write here..."></textarea>
                        </label>

                    <div className="flex justify-start gap-40">


                        <label>
                            <p>Price per hour <span className="text-red-400">*</span></p>
                            <input type="number" min="1" step="1" value={pricePerHour} onChange={handlePricePerHourChange} className="w-full p-2 border-4 outline-4 outline-primary" required />
                            {hourError && <p className="text-red-500">{hourError}</p>}
                        </label>
                        <label>
                            <p>Price per day <span className="text-red-400">*</span></p>
                            <input type="number" min="1" step="1" value={pricePerDay} onChange={handlePricePerDayChange} className="w-full p-2 border-4 outline-4 outline-primary" required />
                            {dayError && <p className="text-red-500">{dayError}</p>}
                        </label>
                    </div>

                        {/* Your input fields */}
                        <label >
                            <p>   Location</p>
                            <input type="text" className="w-full p-2 border-4 outline-4  outline-primary" />
                        </label>
                      
                    </div>
                    </div>
                    <button className="bg-primary m-auto text-white hover:bg-green-600 px-5 py-3 rounded-sm shadow-lg w-[100px]" type="submit">Upload</button>
                </form>
            </div>
        </div>
    );
}

export default SellProduct;
