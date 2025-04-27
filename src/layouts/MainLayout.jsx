import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

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
