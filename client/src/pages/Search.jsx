import FeaturedProduct from "../component/FeaturedProduct";
import ProductFilter from "../component/ProductFilter";
import ProductGrid from "../component/ProductGrid";
import { FaSearch } from "react-icons/fa";
import Tracktor from "../assets/tractor1.webp";
function Search() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1",
      image: Tracktor,
      hourly: 50000,
      weekly: 100000,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      image: Tracktor, hourly: 50000,
      weekly: 100000,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      image: Tracktor, hourly: 50000,
      weekly: 100000,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      image: Tracktor, hourly: 50000,
      weekly: 100000,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      image: Tracktor, hourly: 50000,
      weekly: 100000,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      image: Tracktor, hourly: 50000,
      weekly: 100000,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2", hourly: 50000,
      weekly: 100000,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2", hourly: 50000,
      weekly: 100000,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2"
    },
    // Add more products as needed
  ];
  return (<>
    <div className="flex m-auto max-w-screen-2xl ">
      {/* SideBar */}
      <div className="w-1/3  px-6 ">
        <ProductFilter />
      </div>

      <div className="w-2/3 p-6 flex flex-col h-100">
        <div className="relative">
          <input
            type="text"
            className="my-4 w-full h-8 px-5 rounded-full shadow-md pl-10"
            placeholder="Search"
          />
          <FaSearch className="absolute top-3 right-6 mt-3 text-black hover:cursor-pointer" />
        </div>
      
        <FeaturedProduct />
        <ProductGrid products={products} />
      </div>
    </div>

  </>);
}

export default Search;