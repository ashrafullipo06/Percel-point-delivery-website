import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useDeliveryMen = () => {
  const axiosSecure = useAxiosSecure();
  const { data: deliveryMan = [], isLoading: isDeleveryManLoading } = useQuery({
    queryKey: ["delevey-men"],
    queryFn: async () => {
      const res = await axiosSecure.get("/delivery-man");
      return res.data;
    },
  });
  return { deliveryMan, isDeleveryManLoading };
};

export default useDeliveryMen;
