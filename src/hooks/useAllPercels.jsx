import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllPercels = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allPercels"],
    queryFn: async () => {
      const res = await axiosSecure.get("/percels");
      return res.data; // Backend returns { totalPercel, result }
    },
  });

  // Extract `totalPercel` and `result` from `data`
  const totalPercel = data.totalPercel || 0; // Default to 0 if undefined
  const allPercels = data.result || []; // Default to an empty array if undefined

  return { totalPercel, allPercels, refetch, isLoading };
};

export default useAllPercels;
