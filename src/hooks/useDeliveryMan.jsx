import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useDeliveryMan = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  //   console.log(user);
  const { data: isDeliveryMan, isLoading: isDeliveryManLoading } = useQuery({
    queryKey: ["isDeliveryMan", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure(`/user/delivery-man/${user.email}`);
      return res.data.deliveryMan;
    },
  });
  return { isDeliveryMan, isDeliveryManLoading };
};

export default useDeliveryMan;
