import { useQuery } from "@tanstack/react-query";
import Heading from "../../../components/Heading";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import ReviewCard from "../../../components/ReviewCard";

const TopRatedDeliveryMan = () => {
  const axiosPublic = useAxiosPublic();
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["ratings"],
    queryFn: async () => {
      const res = await axiosPublic("/ratings");
      return res.data;
    },
  });
  console.log(isLoading);
  return (
    <div>
      <Heading title="Top Rated Delivery Men" />

      <div className="grid grid-cols-3 gap-8">
        {reviews?.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedDeliveryMan;
