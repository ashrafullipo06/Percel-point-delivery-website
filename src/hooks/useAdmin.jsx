import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: admin = {}, isLoading } = useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      const res = await axiosSecure(`/user/admin/${user?.email}`);
      return res.data;
    },
  });
  return { admin, isLoading };
};

export default useAdmin;
