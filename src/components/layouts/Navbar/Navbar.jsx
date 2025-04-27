import { Link, NavLink } from "react-router-dom";
import logo from "/percel-point.svg";
import useAuth from "../../../hooks/useAuth";
import { MdNotificationsActive } from "react-icons/md";
const Navbar = () => {
  const { user, handleLogout, loading } = useAuth();
  // console.log(loading);
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <MdNotificationsActive />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </li>
    </>
  );

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
  return (
    <div className="bg-base-200 py-2 fixed w-full z-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-3">
            <img className="w-12" src={logo} alt="" />
            <p className="text-2xl font-semibold"> Point</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            <span className="loading loading-ring loading-lg"></span>
          ) : (
            <>
              {user ? (
                <>
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src={user?.photoURL}
                        />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                      {adminLinks}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn">
                    Login
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
