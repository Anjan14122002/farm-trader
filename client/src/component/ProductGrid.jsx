/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link } from "react-router-dom";
import Tracktor from "../assets/tracker.jpg";
import Rating from "./Rating";

const ProductGrid = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9; // Number of products per page

  // Calculate total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Logic to change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate pagination links
  const paginationLinks = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === currentPage ||
      i === currentPage - 1 ||
      i === currentPage + 1 ||
      i === 1 ||
      i === totalPages
    ) {
      paginationLinks.push(i);
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      paginationLinks.push("...");
    }
  }

  // Calculate products to display on current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="container mx-auto p-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {/* Product cards */}
        {currentProducts.map((product, index) => (
          <div key={index} className="relative ">
            {/* product details */}
            <div className="bg-white  w-60 border rounded-md shadow-md transition-transform hover:shadow-primary  hover:scale-105 hover:translate-x-1">
              <img src={product.image} alt="this is image" />

              <div className="p-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <Rating initialRating={3} />
                  </div>
                  <div className="text-sm font-bold">
                    <p >&#8377;{product.hourly}</p>
                    <p>&#8377;{product.weekly}</p>
                  </div>
                </div>
                <Link to={"/product_details"}>
                  <button className="bg-primary p-2 mt-4 w-full rounded-sm text-white font-bold hover:underline ">
                    View details
                  </button>
                </Link>
              </div>
            </div>
            {/* <div className="absolute inset-0 bg-blue-500 opacity-0 transition-opacity hover:opacity-25 rounded-md"></div> */}
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {paginationLinks.map((link, index) => (
          <button
            key={index}
            onClick={() => paginate(link)}
            className={`mx-1 px-4 py-2 rounded-md ${
              link === currentPage
                ? "bg-primary text-white hover:bg-accent"
                : "bg-neutral"
            }`}
          >
            {link === "..." ? <span className="opacity-50 ">...</span> : link}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
