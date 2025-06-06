import { useState } from 'react';
import Tracktor from '../assets/tractor1.webp';
import Rating from '../component/Rating'

// Product Details Component
function ProductDetails({ onRatingChange }) {
    const [hoverValue, setHoverValue] = useState(null);
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const handleMouseOver = (newValue) => {
        setHoverValue(newValue);
    };

    const handleMouseLeave = () => {
        setHoverValue(null);
    };

    return (
        <div className='flex flex-col item m-auto '>

            <div className="container mx-auto p-6 bg-white">
                <div className="flex justify-evenly h-96 ">

                    <div className="flex justify-center ">
                        <img src={Tracktor} alt="" className="mr-4  rounded-md" />
                        <div >
                            <img src={Tracktor} alt="" className=" w-40 mb-2 rounded-md" />
                            <img src={Tracktor} alt="" className=" w-40 mb-2 rounded-md" />
                            <img src={Tracktor} alt="" className="w-40 rounded-md" />
                        </div>
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold">Tracktor</h1>
                        <h3 className="text-gray-500">John Deere</h3>

                        {/* Rating */}
                        <div className="mt-4">
                            <Rating initialRating={4.5}  />
                        </div>

                        {/* Pricing */}
                        <div className='flex items-center'>
                            <input type="radio" name="pricing" id="pricing1" className="w-6 h-6 mr-2 text-black" />
                            <label htmlFor="pricing1" className="text-lg">5000 hours per day</label>
                        </div>

                        <div className='flex items-center'>
                            <input type="radio" name="pricing" id="pricing2" className="w-6 h-6 mr-2 checked:bg-primary" />
                            <label htmlFor="pricing2" className="text-lg">5000 hours per day</label>
                        </div>

                        <div className='flex items-center'>
                            <input type="radio" name="pricing" id="pricing3" className="w-6 h-6 mr-2 text-black" />
                            <label htmlFor="pricing3" className="text-lg">5000 hours per day</label>
                        </div>



                        <div className="mt-4">
                            <div>
                                <label className="block">From</label>
                                <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                            </div>
                            <div>
                                <label className="block">To</label>
                                <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
                            </div>
                        </div>

                        <div className="mt-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Chat with Seller
                            </button>
                            <button className="ml-2 bg-primary text-white px-4 py-2 rounded hover:bg-green-700">
                                Book now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
                {/* Description  */}
            <div className='shadow-md' >
                <div className="m-auto p-12">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto">
                            <div className="p-1.5 w-full inline-block align-middle">
                                <div className="overflow-hidden border rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200 ">
                                        <thead className="bg-gray-50">
                                            <tr>

                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                                >
                                                    Description
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                                >
                                                    Type
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                                >
                                                    Location
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                                >
                                                    Condition
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-wrap w-[250px]">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium natus iste cumque! Eius incidunt amet esse? Ab modi reiciendis magnam non quod numquam laborum, ipsa sapiente repellendus itaque id ex!
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap border">
                                                    Tracktor
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap border">
                                                    Indore
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                                                    <a
                                                        className="text-green-500 hover:text-green-700"
                                                        href="#"
                                                    >
                                                        NEW
                                                    </a>
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default ProductDetails;
