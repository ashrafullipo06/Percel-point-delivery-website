import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Auth/Login/Login";
import Home from "../pages/Home/Home/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
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
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import DeliveryManRoute from "./DeliveryManRoute";
import UserRoute from "./UserRoute";
import Register from "../pages/Auth/Register/Register";
import Support from "../pages/Support/Support";
import Features from "../pages/Features/Features";

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
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "features",
        element: <Features />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      //!  User
      {
        path: "book-percel",
        element: (
          <UserRoute>
            <PercelBook />
          </UserRoute>
        ),
      },
      {
        path: "my-percel",
        element: (
          <UserRoute>
            <MyPercel />
          </UserRoute>
        ),
      },
      {
        path: "my-profile",
        element: (
          <UserRoute>
            <MyProfile />
          </UserRoute>
        ),
      },
      {
        path: "update-booked-percel/:id",
        element: (
          <UserRoute>
            <UpdateBookedPercel />
          </UserRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <UserRoute>
            <Payment />
          </UserRoute>
        ),
      },
      // ! Admin
      {
        path: "",
        element: <AdminStats />,
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "all-percels",
        element: (
          <AdminRoute>
            <AllPercels />
          </AdminRoute>
        ),
      },
      {
        path: "all-delivery-men",
        element: (
          <AdminRoute>
            <AllDeliveryMen />
          </AdminRoute>
        ),
      },
      // ! Delivery Man
      {
        path: "my-delivery-list",
        element: (
          <DeliveryManRoute>
            <MyDeliveryList />
          </DeliveryManRoute>
        ),
      },
      {
        path: "my-reviews",
        element: (
          <DeliveryManRoute>
            <MyReviews />
          </DeliveryManRoute>
        ),
      },
      {
        path: "delivery-history",
        element: (
          <DeliveryManRoute>
            <DeliveryHistory />
          </DeliveryManRoute>
        ),
      },
    ],
  },
]);

export default Router;
