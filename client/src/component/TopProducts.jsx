/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tracktor from '../assets/tractor1.webp';
import Rating from "./Rating";

function TopProduct() {
    const products = [
        {
            id: 1,
            name: "Product 1",
            description: "Description of Product 1",
            img: Tracktor
        },
        {
            id: 2,
            name: "Product 2",
            description: "Description of Product 2",
            img: Tracktor
        },
        {
            id: 3,
            name: "Product 3",
            description: "Description of Product 3",
            img: Tracktor
        },

    ];
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className="bg-white">
                <h1 className="text-3xl font-bold text-center mb-8 ">Top Product</h1>
                <Slider {...settings}>
                    {products.map((product) => (
                        <div key={product.id} className="p-5 bg-gray-100 shadow-md">
                            <div className="border shadow-md w-[70%] bg-white flex flex-col justify-center items-center">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="rounded-lg  w-full"
                                />
                                <div className="p-4">
                                    <h3 className="mt-1 text-lg font-semibold mb-1">{product.name}</h3>
                                <Rating initialRating={4}/>
                                    
                                    <p className="text-gray-600 text-sm">{product.description}</p>
                                    <button className="bg-primary text-white w-full p-3 rounded-lg">View details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default TopProduct;
