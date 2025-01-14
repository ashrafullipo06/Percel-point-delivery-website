import React from "react";
import banner from "../../../assets/Home/banner1.png";
import { FiSearch } from "react-icons/fi";

const HeroBanner = () => {
  return (
    <div>
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Percel Point</h1>
            <p className="mb-5">
              Fast, reliable, and secure parcel delivery services. From local
              deliveries to global shipping, we ensure your packages reach their
              destination on time, every time.
            </p>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden shadow-sm">
              <input
                className="py-2 px-3 w-full outline-none text-gray-700"
                type="text"
                placeholder="Search..."
              />
              <button className="p-2 bg-gray-200 hover:bg-gray-300">
                <FiSearch className="text-gray-500 text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
