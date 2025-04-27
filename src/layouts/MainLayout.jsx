import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/layouts/Navbar/Navbar";
import Footer from "../components/layouts/Footer/Footer";
import ResponsiveNavbar from "../components/layouts/Navbar/Navbar2";
import Footer2 from "../components/layouts/Footer/Footer2";

const MainLayout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <ResponsiveNavbar />
      <div className="min-h-[calc(100vh-276px)] pt-[67px] container mx-auto">
        <Outlet />
      </div>
      {/* <Footer /> */}
      <Footer2 />
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
