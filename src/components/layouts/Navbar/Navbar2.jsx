// ResponsiveNavbar.tsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { TbLogout2, TbUsersGroup } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import { MdLaptopMac, MdOutlineArrowRightAlt } from "react-icons/md";
import { BsBuildings, BsCalendar2Date } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { BiHome, BiSupport } from "react-icons/bi";
import logo from "/percel-point.svg";
import useAuth from "../../../hooks/useAuth";

const ResponsiveNavbar = () => {
  const [isProductHover, setIsProductHover] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isMegaMenuCollapse, setIsMegaMenuCollapse] = useState(false);
  const [megaMenuSubItemsOpen, setMegaMenuSubItemsOpen] = useState("");
  const { user, handleLogout, loading } = useAuth();

  const handleMenuClick = () => {
    // Keep the MegaMenu open after clicking inside
    setIsProductHover(true);
  };

  const adminLinks = (
    <>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <div className="divider"></div>
      <li>
        <button onClick={handleLogout}>Log Out</button>
      </li>
    </>
  );

  const moreProducts = [
    {
      title: "Demo App",
      img: "https://i.ibb.co/LQBDJGD/icon-logo-container.png",
      link: "/demo-app",
    },
    {
      title: "CRM",
      img: "https://i.ibb.co/Y8cRWRj/icon-logo-container-1.png",
      link: "/crm",
    },
    {
      title: "CMS",
      img: "https://i.ibb.co/6bGWgp6/icon-logo-container-2.png",
      link: "/cms",
    },
  ];

  const ecoSystem = [
    {
      title: "Directory",
      icon: <BsBuildings className="text-white text-xl" />,
      link: "/directory",
    },
    {
      title: "Bookings",
      icon: <BsCalendar2Date className="text-white text-xl" />,
      link: "/bookings",
    },
    {
      title: "User Feedback",
      icon: <TbUsersGroup className="text-white text-xl" />,
      link: "/user-feedback",
    },
    {
      title: "Task Manager",
      icon: <FaTasks className="text-white text-xl" />,
      link: "/task-manager",
    },
  ];

  return (
    <div className="w-full bg-slate-900 fixed z-50">
      <nav className="relative container mx-auto shadow">
        {/* Top bar */}
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img className="w-12" src={logo} alt="Logo" />
            <p className="text-2xl font-semibold text-white">Point</p>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 text-gray-700 text-[1rem]">
            <li>
              <Link
                to="/"
                className="flex items-center hover:text-blue-500 gap-2 text-white"
              >
                <BiHome className="text-[1.2rem]" />
                Home
              </Link>
            </li>

            {/* Products MegaMenu */}
            <li
              className="relative"
              onMouseEnter={() => setIsProductHover(true)}
              onMouseLeave={() => setIsProductHover(false)}
            >
              <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 text-white">
                <MdLaptopMac className="text-[1.2rem]" />
                Products
                <IoIosArrowUp
                  className={`transition-transform ${
                    isProductHover && "rotate-180"
                  }`}
                />
              </div>
            </li>

            <li>
              <Link
                to="/features"
                className="flex items-center gap-2 hover:text-blue-500 text-white"
              >
                <AiOutlineFire className="text-[1.2rem]" />
                Features
              </Link>
            </li>

            <li>
              <Link
                to="/support"
                className="flex items-center gap-2 hover:text-blue-500 text-white"
              >
                <BiSupport className="text-[1.2rem]" />
                Support
              </Link>
            </li>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Account */}
            {loading ? (
              <div className="loading loading-ring loading-lg"></div>
            ) : (
              <>
                {user ? (
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img src={user.photoURL} alt="User" />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-4 z-50"
                    >
                      {adminLinks}
                    </ul>
                  </div>
                ) : (
                  <Link to="/login" className="btn btn-primary btn-sm">
                    Login
                  </Link>
                )}
              </>
            )}

            {/* Mobile Hamburger */}
            <CiMenuFries
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="text-[2rem] md:hidden cursor-pointer text-gray-700"
            />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 w-[260px] h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
            mobileSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="text-2xl"
            >
              ✖️
            </button>
          </div>
          <ul className="flex flex-col p-6 gap-4 text-gray-700">
            <li>
              <Link to="/" onClick={() => setMobileSidebarOpen(false)}>
                Home
              </Link>
            </li>

            {/* Products Dropdown Mobile */}
            <li
              onClick={() => setIsMegaMenuCollapse(!isMegaMenuCollapse)}
              className="cursor-pointer flex justify-between items-center"
            >
              Products
              <IoIosArrowDown
                className={`transition-transform ${
                  isMegaMenuCollapse ? "rotate-180" : ""
                }`}
              />
            </li>

            {/* Sub Items */}
            {isMegaMenuCollapse && (
              <ul className="ml-4 flex flex-col gap-2 text-sm text-gray-600">
                {moreProducts.map((product, idx) => (
                  <li key={idx}>
                    <Link
                      to={product.link}
                      onClick={() => setMobileSidebarOpen(false)}
                    >
                      {product.title}
                    </Link>
                  </li>
                ))}
                {ecoSystem.map((eco, idx) => (
                  <li key={idx}>
                    <Link
                      to={eco.link}
                      onClick={() => setMobileSidebarOpen(false)}
                    >
                      {eco.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            <li>
              <Link to="/features" onClick={() => setMobileSidebarOpen(false)}>
                Features
              </Link>
            </li>
            <li>
              <Link to="/support" onClick={() => setMobileSidebarOpen(false)}>
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Mega Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-gray-800 transition-all duration-300 z-40 ${
            isProductHover ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onMouseEnter={() => setIsProductHover(true)}
          onMouseLeave={() => setIsProductHover(false)}
        >
          <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Column 1 - More Products */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white font-semibold text-xl">
                More Products
              </h3>
              {moreProducts.map((item, idx) => (
                <Link
                  to={item.link}
                  onClick={handleMenuClick}
                  key={idx}
                  className="flex gap-4 items-start group"
                >
                  <img src={item.img} alt={item.title} className="w-10 h-10" />
                  <div>
                    <h4 className="text-white font-medium">{item.title}</h4>
                    <p className="text-white/80 text-sm">
                      Lorem ipsum dolor sit amet.
                    </p>
                    <span className="text-orange-400 mt-2 flex items-center gap-1 text-sm">
                      Call to action
                      <MdOutlineArrowRightAlt className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Column 2 - Ecosystem */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white font-semibold text-xl">Ecosystem</h3>
              {ecoSystem.map((item, idx) => (
                <Link
                  to={item.link}
                  onClick={handleMenuClick}
                  key={idx}
                  className="flex gap-3 items-start"
                >
                  {item.icon}
                  <div>
                    <h4 className="text-white font-medium">{item.title}</h4>
                    <p className="text-white/80 text-sm">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ResponsiveNavbar;
