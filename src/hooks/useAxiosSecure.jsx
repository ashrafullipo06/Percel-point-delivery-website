import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://percel-point.vercel.app",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { handleLogout } = useAuth();
  axiosSecure.interceptors.request.use((config) => {
    // Do something before request is sent
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  }),
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    };

  axiosSecure.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    async (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      const status = error.response.status;
      if (status === 403 || 401) {
        await handleLogout();
        navigate("/login");
        // console.log("Axios Secure Intercepter ERROR,", error);
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
