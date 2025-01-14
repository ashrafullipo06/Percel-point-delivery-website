import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="pb-[84px]">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-276px)] container mx-auto">
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
