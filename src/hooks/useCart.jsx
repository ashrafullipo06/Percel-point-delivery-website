import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useUser from "./useUser";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { isUser, isUserLoading } = useUser();
  const {
    data: percels = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["percel"],
    enabled: !!isUser?._id,
    queryFn: async () => {
      const res = await axiosSecure(`/percels/${isUser?._id}`);
      return res.data;
    },
  });

  return { percels, isLoading, refetch };
};

export default useCart;
