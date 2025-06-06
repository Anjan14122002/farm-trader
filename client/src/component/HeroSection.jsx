import tracker from '../assets/tracker.jpg'
const HeroSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 h-[100vh] flex justify-center items-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Text Content */}

          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl mb-4">Welcome to AgroTrader</h2>
            
            <p className="text-lg text-gray-600 mb-6">Farmer&apos;s Equipments at reasonable and affordable prices</p>
            <button className="bg-primary hover:bg-accent text-white py-2 px-6 rounded-md shadow-md transition duration-300">Book Now</button>
          </div>

          <div className="lg:w-1/2">
            <img src={tracker} alt="Tracker" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;