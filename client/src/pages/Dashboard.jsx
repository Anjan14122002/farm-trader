import { useState } from 'react';
import Tracktor from '../assets/tractor1.webp'



const BookingRows = [
    { id: 1, name: "Jone Doe", email: "jonne62@gmail.com" },
    { id: 2, name: "Jone Doe", email: "jonne62@gmail.com" },
    { id: 3, name: "Jone Doe", email: "jonne62@gmail.com" },
  
];
function Dashboard() {
    const [activeTab, setActiveTab] = useState('products');
    const [currentTab, setCurrentTab] = useState('product list')
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleToggle = (toggle) => {
        setCurrentTab(toggle)
    }
    return (
        <div className="flex flex-col  p-5 gap-16 justify-center m-auto">
            <div className="flex gap-16 m-auto">
                <button
                    className={`w-52 h-12 shadow-lg ${activeTab === 'products' ? 'bg-primary text-white' : 'border-4 border-primary text-primary hover:scale-105'} `}
                    onClick={() => handleTabClick('products')}
                >
                    My Products
                </button>
                <button
                    className={`w-52 h-12 shadow-lg ${activeTab === 'orders' ? 'bg-primary text-white scale-110' : 'border-4 border-primary text-primary hover:scale-105'} `}
                    onClick={() => handleTabClick('orders')}
                >
                    My Orders
                </button>
            </div>

            <div className="mt-4 h-[100vh] w-[70%] m-auto">
                {activeTab === 'products' ? (
                    <div>
                    <div className='bg-white shadow-xl'>

                        <button className={`px-4 py-2 m-3 shadow-md bg-white border-b-4 ${currentTab === 'product list' ? 'border-b-green-700 text-green-700' : 'border-b-white'}`} onClick={() => handleToggle('product list')}>
                            Product lists
                        </button>
                        <button className={`px-4 py-2 m-3 shadow-md bg-white border-b-4 ${currentTab === 'booking' ? 'border-b-green-700 text-green-700' : 'border-b-white'}`} onClick={() => handleToggle('booking')}>Bookings</button>
                    </div>
                     <div className='w-full  h-2'></div>

                     {/* Product list display */}
                        {
                            currentTab === 'product list' ? (
                                <div className="container mx-auto p-6 bg-white">
                                    <div className="flex">
                                        <div className="flex justify-center ">
                                            <img src={Tracktor} alt="" className="mr-4  h-52 rounded-md" />
                                            <div className=''>
                                            <img src={Tracktor} alt="" className="mr-4  h-[120px] rounded-md" />
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="text-2xl font-bold">Tracktor</h1>
                                            <h3 className="text-gray-500">John Deere</h3>
                                            <div className="mt-4">
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                                    Edit
                                                </button>
                                                <button className="ml-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                               
                                <div className="flex flex-col">
                        <div className="overflow-x-auto">
                            <div className="p-1.5 w-full inline-block align-middle">
                                <div className="overflow-hidden border rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            {/* Table header */}
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Map over orderRows */}
                                            {BookingRows.map(row => (
                                                <tr key={row.id}>
                                                    {row.name}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                            )
                        }

                    </div>
                ) : (
                    <div className='h-[100vh]'>
                        {/* Display orders in table form */}
                        {/* Replace this with your orders table component */}
                       
                    </div>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
