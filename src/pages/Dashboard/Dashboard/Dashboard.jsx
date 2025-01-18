import { Link, NavLink } from "react-router-dom";
import userimg from "../../../assets/dashboard/users.png";
import deleveryMen from "../../../assets/dashboard/delivery.png";
import percel from "../../../assets/dashboard/booked.png";
import bookedPercel from "../../../assets/dashboard/checklist.png";
import home from "../../../assets/dashboard/home.png";

import useUserRole from "../../../hooks/useUserRole";

const Dashboard = () => {
  const { userRole } = useUserRole();

  return (
    <div className="md:h-screen bg-base-200 flex flex-col">
      <Link
        to="/dashboard"
        className="text-3xl font-bold text-center pt-8 text-gray-800"
      >
        Dashboard
      </Link>
      <div className="border-b-2 border-gray-300 mx-6 my-4"></div>

      {/* Mobile Menu Toggle */}
      <ul className="px-6 space-y-4">
        {/* User Role-Based Sections */}
        {userRole === "admin" && (
          <>
            <li>
              <NavLink
                to="all-percels"
                className="flex items-center gap-3 p-3 bg-white shadow-md rounded-md hover:bg-blue-100 transition duration-200"
              >
                <img className="w-8 h-8" src={percel} alt="All Percel Icon" />
                <span className="font-semibold text-gray-700">All Percel</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="users"
                className="flex items-center gap-3 p-3 bg-white shadow-md rounded-md hover:bg-blue-100 transition duration-200"
              >
                <img className="w-8 h-8" src={userimg} alt="Users Icon" />
                <span className="font-semibold text-gray-700">All Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="all-delivery-men"
                className="flex items-center gap-3 p-3 bg-white shadow-md rounded-md hover:bg-blue-100 transition duration-200"
              >
                <img
                  className="w-8 h-8"
                  src={deleveryMen}
                  alt="Delivery Men Icon"
                />
                <span className="font-semibold text-gray-700">
                  All Delivery Men
                </span>
              </NavLink>
            </li>
          </>
        )}

        {userRole === "user" && (
          <>
            <li>
              <NavLink
                to="book-percel"
                className="flex items-center gap-3 p-3 bg-white shadow-md rounded-md hover:bg-blue-100 transition duration-200"
              >
                <img
                  className="w-8 h-8"
                  src={percel}
                  alt="Book a Parcel Icon"
                />
                <span className="font-semibold text-gray-700">
                  Book A Parcel
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="my-percel"
                className="flex items-center gap-3 p-3 bg-white shadow-md rounded-md hover:bg-blue-100 transition duration-200"
              >
                <img
                  className="w-8 h-8"
                  src={bookedPercel}
                  alt="My Parcel Icon"
                />
                <span className="font-semibold text-gray-700">My Parcel</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="my-profile"
                className="flex items-center gap-3 p-3 bg-white shadow-md rounded-md hover:bg-blue-100 transition duration-200"
              >
                <img className="w-8 h-8" src={percel} alt="Profile Icon" />
                <span className="font-semibold text-gray-700">Profile</span>
              </NavLink>
            </li>
          </>
        )}

        {userRole === "deliveryMan" && (
          <>
            <li>
              <NavLink
                to="my-delivery-list"
                className="flex items-center gap-3 p-3 bg-white shadow-md rounded-md hover:bg-blue-100 transition duration-200"
              >
                <img
                  className="w-8 h-8"
                  src={bookedPercel}
                  alt="Delivery List Icon"
                />
                <span className="font-semibold text-gray-700">
                  My Delivery List
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="my-reviews"
                className="flex items-center gap-3 p-3 bg-white shadow-md rounded-md hover:bg-blue-100 transition duration-200"
              >
                <img
                  className="w-8 h-8"
                  src={bookedPercel}
                  alt="Reviews Icon"
                />
                <span className="font-semibold text-gray-700">My Reviews</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="delivery-history"
                className="flex items-center gap-3 p-3 bg-white shadow-md rounded-md hover:bg-blue-100 transition duration-200"
              >
                <img
                  className="w-8 h-8"
                  src={bookedPercel}
                  alt="Delivery History Icon"
                />
                <span className="font-semibold text-gray-700">
                  Delivery History
                </span>
              </NavLink>
            </li>
          </>
        )}

        <li className="border-t-2 border-gray-300 my-6"></li>

        {/* Shared Section */}
        <li>
          <NavLink
            to="/"
            className="flex items-center gap-3 p-3 bg-white shadow-md rounded-md hover:bg-blue-100 transition duration-200"
          >
            <img className="w-8 h-8" src={home} alt="Home Icon" />
            <span className="font-semibold text-gray-700">Home</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
