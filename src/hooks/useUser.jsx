import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useUser = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: isUser, isLoading: isUserLoading } = useQuery({
    queryKey: ["isUser"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosPublic(`/user/${user?.email}`);
      return res.data;
    },
  });
  return { isUser, isUserLoading };
};

export default useUser;
