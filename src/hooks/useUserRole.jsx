import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useUserRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const { data: userRole = {}, isLoading: isUserRoleLoading } = useQuery({
    queryKey: ["admin", user?.email],
    enabled: !loading && !!user?.email, // When observer loading false and email true
    queryFn: async () => {
      const res = await axiosSecure(`/user/role/${user?.email}`);
      return res.data?.userRole;
    },
  });

  return { userRole, isUserRoleLoading };
};

export default useUserRole;
