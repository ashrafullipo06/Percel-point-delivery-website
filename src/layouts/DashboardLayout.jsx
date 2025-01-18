import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-3/12 2xl:w-2/12">
        <Dashboard />
      </div>
      <div className="w-full lg:w-9/12 2xl:w-10/12 py-24">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
