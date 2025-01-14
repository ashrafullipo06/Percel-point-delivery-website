import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { data: admins = [], isLoading } = useQuery({
    queryKey: ["admins"],
    queryFn: async () => {
      const res = await axiosSecure();
      return res.data;
    },
  });
};

export default useAllAdmin;
