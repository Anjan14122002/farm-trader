/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Tracktor from "../assets/tractor1.webp";
import Rating from "./Rating"

function FeaturedProduct() {
  const products = [
    {
      id: 1,
      name: "Tracktor",
      description: "Description of Product 1",
      weekly:"5,700/week",
      daily: '1000/day',
      hour: '200/hour',
      img: Tracktor,
    },
    {
      id: 2,
      name: "Cutlivator",
      description: "Description of Product 2",
      weekly:"5,700/week",
      daily: '1000/day',
      hour: '200/hour',
      img: Tracktor,
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description of Product 3",
      weekly:"5,700/week",
      daily: '1000/day',
      hour: '200/hour',
      img: Tracktor,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="mb-5">
      <div className="bg-white">
        <h1 className="text-lg font-semibold ml-3 py-2">Featured Product</h1>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="p-4 ">
              <div className="border-2 flex gap-4 p-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className=" w-40 h-40"
                />
               <div>
               <h3 className="text-lg font-semibold">{product.name}</h3>
                <Rating initialRating={3}/>

                <div>
                <div>&#8377; {product.weekly}</div>
                <div>&#8377; {product.daily}</div>
                <div>&#8377; {product.hour}</div>
                </div>                
                <button className="bg-primary rounded-sm p-1 mt-1 hover:bg-green-700 text-white">View Product</button>
               </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <IoIosArrowForward
      className={`${className}  text-black  rounded-full hover:text-black`}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <IoIosArrowBack
      className={`${className} text-black  rounded-full hover:text-black`}
      onClick={onClick}
    />
  );
};

export default FeaturedProduct;
