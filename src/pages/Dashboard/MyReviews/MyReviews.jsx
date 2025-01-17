import Heading from "../../../components/Heading";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUser from "../../../hooks/useUser";

const MyReviews = () => {
  const axiosSecure = useAxiosSecure();
  const { isUser } = useUser();

  const { data } = useQuery({
    queryKey: ["reviews", isUser?._id],
    enabled: !!isUser?._id,
    queryFn: async () => {
      const res = await axiosSecure(`/ratings/${isUser?._id}`);
      return res.data;
    },
  });
  console.log(data);

  return (
    <div>
      <Heading title="My Reviews" />
    </div>
  );
};

export default MyReviews;
