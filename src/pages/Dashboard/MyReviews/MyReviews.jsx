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

  const { data = [] } = useQuery({
    queryKey: ["reviews", isUser?._id],
    enabled: !!isUser?._id,
    queryFn: async () => {
      const res = await axiosSecure(`/ratings/${isUser?._id}`);
      return res.data;
    },
  });
  // console.log(data);

  return (
    <div className="p-6">
      <Heading title="My Reviews" />
      <div className="space-y-6 mt-6 grid lg:grid-cols-2 2xl:grid-cols-3" >
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white p-6 rounded-lg shadow-lg flex gap-6 items-center"
          >
            <div className="flex-shrink-0">
              <img
                className="w-16 h-16 rounded-full"
                src={item.userPhoto}
                alt={item.userName}
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.userName}
              </h3>
              <p className="text-sm text-gray-600">{item.feedBack}</p>
              <div className="mt-2 flex items-center">
                <span className="text-yellow-500">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </span>
              </div>
              <div className="mt-4 flex items-center">
                <img
                  className="w-12 h-12 rounded-full"
                  src={item.delivermanPhoto}
                  alt={item.deliverManName}
                />
                <div className="ml-3">
                  <p className="font-semibold text-gray-800">
                    {item.deliverManName}
                  </p>
                  <p className="text-sm text-gray-500">Delivery Man</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
