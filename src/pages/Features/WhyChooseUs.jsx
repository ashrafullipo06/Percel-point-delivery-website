import React from "react";
import {
  FaShippingFast,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaMoneyBillWave,
} from "react-icons/fa";


const features = [
  {
    id: 1,
    title: "Fast Delivery",
    description:
      "Get your parcels delivered within 24 hours anywhere in the country.",
    icon: <FaShippingFast className="text-white text-2xl" />,
  },
  {
    id: 2,
    title: "Real-time Tracking",
    description: "Track your parcel live with our advanced tracking system.",
    icon: <FaMapMarkerAlt className="text-white text-2xl" />,
  },
  {
    id: 3,
    title: "Secure Packaging",
    description: "We ensure your packages are safely packed and handled.",
    icon: <FaShieldAlt className="text-white text-2xl" />,
  },
  {
    id: 4,
    title: "Affordable Rates",
    description:
      "Get the best delivery rates without compromising service quality.",
    icon: <FaMoneyBillWave className="text-white text-2xl" />,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Us
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We offer top-class services to ensure your parcels reach safely and
            quickly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="w-full bg-[#f2f8f9] px-[20px] py-[30px] relative overflow-hidden group cursor-pointer rounded-md before:bg-[#FF3131] before:w-[48px] before:h-[48px] before:absolute before:top-0 before:right-0 before:rounded-bl-[35px] before:z-[-1] hover:before:scale-[38] before:transition-all before:ease-out before:duration-[300ms] z-[0]"
            >
              <div className="absolute top-2 z-20 right-2  text-white">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl mt-4 font-bold transition-all duration-500 group-hover:text-white ease-out">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[0.9rem] text-gray-500 transition-all ease-out duration-500 mt-1 group-hover:text-white">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
