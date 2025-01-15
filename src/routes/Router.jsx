import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Loading from "../pages/shared/Loading/Loading";
import PercelBook from "../pages/Dashboard/PercelBook/PercelBook";
import MyPercel from "../pages/Dashboard/MyPercel/MyPercel";
import AllPercels from "../pages/AllPercels/AllPercels";
import AllDeliveryMen from "../pages/Dashboard/AllDeliveryMen/AllDeliveryMen";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      //!  User
      {
        path: "book-percel",
        element: <PercelBook />,
      },
      {
        path: "my-percel",
        element: <MyPercel />,
      },
      // ! Admin
      {
        path: "users",
        element: <AllUsers />,
      },
      {
        path: "all-percels",
        element: <AllPercels />,
      },
      {
        path: "all-delivery-men",
        element: <AllDeliveryMen />,
      },
    ],
  },
]);

export default Router;
