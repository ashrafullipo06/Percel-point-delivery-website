import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["admin", user?.email],
    enabled: !loading && !!user?.email, // When observer loading false and email true
    queryFn: async () => {
      const res = await axiosSecure(`/user/admin/${user?.email}`);
      return res.data?.admin;
    },
  });

  return { isAdmin, isAdminLoading };
};

export default useAdmin;
