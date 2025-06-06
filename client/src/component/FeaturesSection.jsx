

function Feature({ title, description }) {
    return (
        <div className="bg-white rounded-lg p-6 shadow-md hover:border-r-2 hover:border-r-green-700 hover:border-b-2 hover:border-b-green-700 hover:translate-y-1">
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    );
}

function FeaturesSection() {
    return (
        <section className="bg-gray-100 py-12 ">
            <div className="container m-auto px-4 ">
                <div className="flex flex-col justify-center items-center h-[80vh]">
                <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <Feature
                        title="Wide Selection"
                        description="Choose from a wide range of farming equipment, from tractors to harvesters, we've got you covered."
                    />
                    <Feature
                        title="Easy Rental Process"
                        description="Renting equipment is quick and hassle-free. Simply browse, select, and book."
                    />
                    <Feature
                        title="Affordable Pricing"
                        description="Our rental prices are competitive, ensuring you get the best value for your money."
                    />
                </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;
