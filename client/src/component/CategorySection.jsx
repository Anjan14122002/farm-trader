
const categories = [
    "Sprayer",
    "Cultivator",
    "Tractor",
    "Fertilizer Spreaders",
    "Irrigation Equipment",
    "Mowers",
    "Plows",
    "Harvesting Equipment"
];

function CategorySection() {
    return (
        <div className="flex flex-col justify-center items-center mt-40 mb-40">
<h1 className="text-4xl text-center font-bold mb-12">Category</h1>
        <div className="flex flex-wrap gap-1 max-w-[50%] ">
            {categories.map((category, index) => (
                <div key={index} className="relative  w-[200px] h-[200px] m-auto hover:scale-95 hover:cursor-pointer">
                    <img
                        src={`https://source.unsplash.com/400x300/?${category}`}
                        alt={category}
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center rounded-lg">
                        <span className="text-xl font-semibold">{category}</span>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}

export default CategorySection;
