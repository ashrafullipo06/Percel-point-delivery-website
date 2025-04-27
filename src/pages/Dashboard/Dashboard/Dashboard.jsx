import { Link, NavLink } from "react-router-dom";
import userimg from "../../../assets/dashboard/users.png";
import deleveryMen from "../../../assets/dashboard/delivery.png";
import percel from "../../../assets/dashboard/booked.png";
import bookedPercel from "../../../assets/dashboard/checklist.png";
import home from "../../../assets/dashboard/home.png";

import useUserRole from "../../../hooks/useUserRole";

const Dashboard = () => {
  const { userRole } = useUserRole();
  const navClass =
    "flex items-center gap-3 p-3 rounded-md hover:bg-blue-100 transition duration-200 text-white/80 hover:text-gray-700";
  const navText = "font-semibold ";

  return (
    <div className="md:h-screen bg-slate-900 flex flex-col">
      <Link
        to="/dashboard"
        className="text-3xl font-bold text-center pt-8 text-white"
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
              <NavLink to="all-percels" className={navClass}>
                <img className="w-8 h-8" src={percel} alt="All Percel Icon" />
                <span className={navText}>All Percel</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="users" className={navClass}>
                <img className="w-8 h-8" src={userimg} alt="Users Icon" />
                <span className={navText}>All Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="all-delivery-men" className={navClass}>
                <img
                  className="w-8 h-8"
                  src={deleveryMen}
                  alt="Delivery Men Icon"
                />
                <span className={navText}>All Delivery Men</span>
              </NavLink>
            </li>
          </>
        )}

        {userRole === "user" && (
          <>
            <li>
              <NavLink to="book-percel" className={navClass}>
                <img
                  className="w-8 h-8"
                  src={percel}
                  alt="Book a Parcel Icon"
                />
                <span className={navText}>Book A Parcel</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="my-percel" className={navClass}>
                <img
                  className="w-8 h-8"
                  src={bookedPercel}
                  alt="My Parcel Icon"
                />
                <span className={navText}>My Parcel</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="my-profile" className={navClass}>
                <img className="w-8 h-8" src={percel} alt="Profile Icon" />
                <span className={navText}>Profile</span>
              </NavLink>
            </li>
          </>
        )}

        {userRole === "deliveryMan" && (
          <>
            <li>
              <NavLink to="my-delivery-list" className={navClass}>
                <img
                  className="w-8 h-8"
                  src={bookedPercel}
                  alt="Delivery List Icon"
                />
                <span className={navText}>My Delivery List</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="my-reviews" className={navClass}>
                <img
                  className="w-8 h-8"
                  src={bookedPercel}
                  alt="Reviews Icon"
                />
                <span className={navText}>My Reviews</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="delivery-history" className={navClass}>
                <img
                  className="w-8 h-8"
                  src={bookedPercel}
                  alt="Delivery History Icon"
                />
                <span className={navText}>Delivery History</span>
              </NavLink>
            </li>
          </>
        )}

        <li className="border-t-2 border-gray-300 my-6"></li>

        {/* Shared Section */}
        <li>
          <NavLink to="/" className={navClass}>
            <img className="w-8 h-8" src={home} alt="Home Icon" />
            <span className={navText}>Home</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
