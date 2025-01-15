import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllPercels = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: allPercels = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allPercels"],
    queryFn: async () => {
      const res = await axiosSecure.get("/percels");
      return res.data;
    },
  });
  // console.log(allPercels);
  return { allPercels, refetch, isLoading };
};

export default useAllPercels;
