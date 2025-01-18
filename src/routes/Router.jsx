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
import MyDeliveryList from "../pages/Dashboard/MyDeliveryList/MyDeliveryList";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import UpdateBookedPercel from "../pages/Dashboard/UpdateBookedPercel/UpdateBookedPercel";
import MyReviews from "../pages/Dashboard/MyReviews/MyReviews";
import DeliveryHistory from "../pages/Dashboard/DeliveryHistory/DeliveryHistory";
import Payment from "../pages/Dashboard/Payment/Payment";
import AdminStats from "../pages/Dashboard/AdminStats/AdminStats";

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
      {
        path: "my-profile",
        element: <MyProfile />,
      },
      {
        path: "update-booked-percel/:id",
        element: <UpdateBookedPercel />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      // ! Admin
      {
        path: "",
        element: <AdminStats />,
      },
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
      // ! Delivery Man
      {
        path: "my-delivery-list",
        element: <MyDeliveryList />,
      },
      {
        path: "my-reviews",
        element: <MyReviews />,
      },
      {
        path: "delivery-history",
        element: <DeliveryHistory />,
      },
    ],
  },
]);

export default Router;
