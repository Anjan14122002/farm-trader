import { useState } from "react";
import { FaTractor } from "react-icons/fa";
import { LiaSprayCanSolid } from "react-icons/lia";
import Cultivator from '../assets/Cultivator.webp'
import Harrow from '../assets/harrow.png'
import Sprayer from '../assets/sprayer.jpg'
import Seeder from '../assets/Seeder.png'
import Irrigation from '../assets/Irrigation.png'
import Trolly from '../assets/Trolly.webp'
import Harvest from '../assets/Harvestor.png'
function ProductFilter() {
    const [perDayValue, setPerDayValue] = useState(0);
    const [perHourValue, setPerHourValue] = useState(0)

    const handleChangePerDay = (e) => {
        setPerDayValue(e.target.value);
    }

    const handleChangePerHour = (e) => {
        setPerHourValue(e.target.value);
    }

    return (
        <div className="bg-white py-4 px-6 h-full flex flex-col ">
            <div className="mb-6">
                <h1 className="text-lg font-bold">Product Filter</h1>
                <h2 className="text-lg font-semibold mb-2">Categories</h2>
                <ul>
                    <div className="flex justify-start py-2 px-2 hover:shadow-md hover:shadow-primary hover:scale-105 rounded-full">
                        <FaTractor className="text-3xl mr-2"/>
                        <li>Tracktor</li>
                    </div>
                    <div className="flex justify-start py-2 px-2 hover:shadow-md hover:shadow-primary hover:scale-105 rounded-full">
                        <img src={Sprayer} alt="Categories" className="w-8 h-8 mr-2" />
                        <li>Sprayer</li>
                    </div>
                    <div className="flex justify-start py-2 px-2 hover:shadow-md hover:shadow-primary hover:scale-105 rounded-full">
                        <img src={Cultivator} alt="Categories" className="w-8 h-8 mr-2"  />
                        <li>Cultivator</li>
                    </div>
                    <div className="flex justify-start py-2 px-2 hover:shadow-md hover:shadow-primary hover:scale-105 rounded-full">
                        <img src={Harrow} alt="Categories" className="w-8 h-8 mr-2" />
                        <li>Harrow</li>
                    </div>
                    <div className="flex justify-start py-2 px-2 hover:shadow-md hover:shadow-primary hover:scale-105 rounded-full">
                        <img src={Seeder} alt="Categories" className="w-8 h-8 mr-2" />
                        <li>Seeder</li>
                    </div>
                    <div className="flex justify-start py-2 px-2 hover:shadow-md hover:shadow-primary hover:scale-105 rounded-full">
                        <img src={Irrigation} alt="Categories" className="w-8 h-8 mr-2" />
                        <li>Irrigation Equipment</li>
                    </div>
                    <div className="flex justify-start py-2 px-2 hover:shadow-md hover:shadow-primary hover:scale-105 rounded-full">
                        <img src={Trolly} alt="Categories" className="w-8 h-8 mr-2" />
                        <li>Trolly</li>
                    </div>

                    <div className="flex justify-start py-2 px-2 hover:shadow-md hover:shadow-primary hover:scale-105 rounded-full">
                        <img src={Harvest} alt="Categories" className="w-8 h-8 mr-2" />
                        <li>
                            Harvesting Equipment
                        </li>
                    </div>


                </ul>
            </div>

            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Price Range</h2>
                <div className="flex flex-col items-center">
                    <p>Per Day Price</p>
                    <p className="mb-2">&#x20B9;{perDayValue}</p>
                    <input
                        type="range"
                        min="0"
                        max={100000}
                        step={1000}
                        value={perDayValue}
                        onChange={handleChangePerDay}
                        className="w-full h-2 accent-primary"
                    />

                    <p>Per Hour Price</p>
                    <p className="mb-2">&#x20B9;{perHourValue}</p>
                    <input
                        type="range"
                        min="0"
                        max={50000}
                        step={100}
                        value={perHourValue}
                        onChange={handleChangePerHour}
                        className="w-full h-2 accent-primary"
                    />
                </div>
            </div>
            <button className="w-[30%] p-2 text-white font-semibold text-lg mx-auto my-4 hover:bg-accent  bg-primary">Filter</button>
        </div>
    );
}

export default ProductFilter;
