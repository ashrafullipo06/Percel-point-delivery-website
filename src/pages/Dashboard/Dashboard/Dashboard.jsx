import { NavLink } from "react-router-dom";
import user from "../../../assets/dashboard/users.png";
import deleveryMen from "../../../assets/dashboard/delivery.png";

const Dashboard = () => {
  return (
    <div className="h-screen bg-base-200 flex flex-col ">
      <h1 className="text-3xl text-center pt-8">Dashboard</h1>
      <div className="divider"></div>

      <ul className="px-4 space-y-2">
        {/* Admin */}
        <li>
          <NavLink to="users" className="btn w-full bg-slate-500">
            <img className="w-6" src={user} alt="" /> Users
          </NavLink>
        </li>
        <li>
          <NavLink className="btn w-full bg-slate-500">
            <img className="w-6" src={deleveryMen} alt="" /> Delivery Men
          </NavLink>
        </li>
        <li className="divider py-8"></li>
        {/* Shared */}
        <li>
          <NavLink to="/" className="btn w-full bg-slate-500">
            <img className="w-6" src={deleveryMen} alt="" /> Home
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
