import React from "react";
import Image from "next/image";
import { IoChevronForward } from "react-icons/io5";
import { IoCart, IoHeart, IoEye } from "react-icons/io5";


const ProductPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">

      {/* Product Card */}
      <div className="max-w-[1050px] bg-white border border-gray-200 shadow-lg rounded-lg mt-10 grid grid-cols-2 lg:grid-cols-2 gap-0 w-1440 h-[598px]">
        {/* Image Section */}
        <div className="relative">
          <img
            src="/details.03.png" // Replace with actual image URL
            alt="Floating Phone"
            className="w-506 rounded-t-lg object-cover h-450"
          />
          <div className="absolute bottom-4 left-4 flex flex-row gap-2">
            <img
              src="/details04.png" // Replace with thumbnail images
              alt="details04.png"
              className="w-100 h-75 border border-gray-300 rounded-md object-cover"
            />
            <img
              src="/details05.png"
              alt="details05.png"
              className="w-100 h-75 border border-gray-300 rounded-md object-cover"
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="p-4 ">
          <h2 className="text-xl font-semibold text-gray-800">Floating Phone</h2>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            <span className="text-yellow-500">★ ★ ★ ★</span>
            <span className="text-gray-400">★</span>
            <span className="text-sm text-gray-500 ml-2">10 Reviews</span>
          </div>

          {/* Price */}
          <p className="text-2xl font-bold text-blue-600 mt-3">$1,139.33</p>

          {/* Availability */}
          <div className="flex items-center gap-2 mt-1">
          <p className="text-sm text-gray-600">Availability:</p>
          <p className="text-sm text-blue-500">In Stock</p>
          </div>


          {/* Description */}
          <p className="text-sm text-gray-600 mt-12" >
            Met minim Mollie non desert Alamo est sit cliquey dolor 
            do met sent. RELIT official consequent door ENIM RELIT Mollie. 
            Excitation venial consequent sent nostrum met.
            <br/>
            <br/>
            _______________________________________________________________________
          </p>

          {/* Color Options */}
          <div className="flex items-center mt-8 gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-500 border border-gray-300"></div>
            <div className="w-6 h-6 rounded-full bg-green-500 border border-gray-300"></div>
            <div className="w-6 h-6 rounded-full bg-orange-500 border border-gray-300"></div>
            <div className="w-6 h-6 rounded-full bg-gray-800 border border-gray-300"></div>
          </div>

          {/* Button Section with Icons */}
<div className="flex items-center gap-4 mt-11 w-full">
  {/* Select Options Button */}
  <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600">
    Select Options
  </button>

  {/* Add to Cart Icon */}
  <button className="flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-blue-600">
    <IoCart className="mr-2" size={20} /> {/* Add Cart Icon */}
  </button>

  {/* Wishlist Icon */}
  <button className="flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-blue-600">
    <IoHeart className="mr-2" size={20} /> {/* Wishlist Icon */}

  </button>

  {/* Eye Icon */}
  <button className="flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-blue-600">
    <IoEye className="mr-2" size={20} /> {/* Eye Icon */}
  </button>
</div>

        </div>
      </div>
      <Details/>
    </div>
  );
};
export default ProductPage;

const Details = () => {
  return (
    <div className="mt-10 py-4 wrapper bg-cover bg-center"style={{ backgroundImage: "url('/details.02.png')" }}>
      {/* Navigation Tabs */}
      <div className="flex justify-center gap-8 items-center px-4 sm:px-14 text-[#737373] text-[14px]">
        <h3 className="font-semibold">Description</h3>
        <h3 className="font-bold">Additional Information</h3>
        <h3 className="font-bold">
          Reviews <span className="text-[#23856D]">(0)</span>
        </h3>
      </div>

      {/* Divider */}
      <div className="border-b border-[#ECECEC] mt-8"></div>

      {/* Main Content Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start mt-8 px-4 sm:px-14">
        {/* Left Section - Image */}
        <div className="flex-shrink-0 w-full sm:w-1/3 mb-6 sm:mb-0">
          <Image
            src="/details.01.png"
            alt="Product"
            width={316}
            height={372}
            className="rounded-md mx-auto"
          />
        </div>

        {/* Center Section - Text */}
        <div className="flex-1 text-center sm:text-left sm:px-8">
          <h2 className="font-bold text-[24px] text-[#252B42] mb-4">
            Precision Meets Style
          </h2>
          <p className="text-[#737373] text-[14px] leading-relaxed">
            This product is crafted with precision and care to meet your needs.{" "}
            <br />
            It combines functionality with a sleek design, making it a perfect
            addition <br />
            <br />
            to your daily essentials. Our commitment to quality ensures
            long-lasting <br />
            durability. Each detail is meticulously designed to deliver a
            seamless <br />
            and enjoyable user experience. <br />
            <br />
            Whether for personal or professional use, this product stands out{" "}
            <br />
            in style and performance. Choose from multiple options to suit your
            preferences.
          </p>
        </div>

        {/* Right Section - FAQ */}
        <div className="flex-shrink-0 w-full sm:w-1/3 text-[#252B42]">
          <h3 className="font-bold text-[24px] mb-4 mt-4 md:mt-0">Product Details</h3>
          <ul className="text-[#737373] text-[14px] leading-relaxed font-bold space-y-4">
            <li className="flex items-center gap-2">
              <IoChevronForward size={25} /> What materials are used in this
              product?
            </li>
            <li className="flex items-center gap-2">
              <IoChevronForward size={25} /> Does this product come in different
              sizes?
            </li>
            <li className="flex items-center gap-2">
              <IoChevronForward size={25} /> Are there any color options
              available?
            </li>
            <li className="flex items-center gap-2">
              <IoChevronForward size={25} /> Is this product eco-friendly?
            </li>
          </ul>
          <h3 className="font-bold text-[24px] mt-6 mb-4">Order & Shipping</h3>
          <ul className="text-[#737373] text-[14px] leading-relaxed font-bold space-y-4">
            <li className="flex items-center gap-2">
              <IoChevronForward size={25} /> How long does delivery take?
            </li>
            <li className="flex items-center gap-2">
              <IoChevronForward size={25} /> Can I track my order?
            </li>
            <li className="flex items-center gap-2">
              <IoChevronForward size={25} /> What are the shipping charges?
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
