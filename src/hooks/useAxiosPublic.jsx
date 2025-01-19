import axios from "axios";
const axiosPublic = axios.create({
  baseURL: "https://percel-point.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
