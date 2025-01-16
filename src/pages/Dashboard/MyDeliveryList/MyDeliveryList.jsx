import { useMutation, useQuery } from "@tanstack/react-query";
import Heading from "../../../components/Heading";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUser from "../../../hooks/useUser";
import Loading from "../../shared/Loading/Loading";
import Swal from "sweetalert2";

const MyDeliveryList = () => {
  const { isUser, isUserLoading } = useUser();
  const axiosSecure = useAxiosSecure();
  const { loading: authLoading } = useAuth();
  const userId = isUser?._id;

  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["delivery-details", userId],
    enabled: !!userId,
    queryFn: async () => {
      const res = await axiosSecure(`/delivery-list/${userId}`);
      return res.data;
    },
  });

  const handleDeliveryStatus = async (item) => {
    console.log(item);
    const res = await axiosSecure.patch(`/delivery-status/${item.percelId}`);
    console.log(res.data);
    if (res.data.modifiedCount === 1) {
      Swal.fire({
        title: "Good job!",
        text: `Product Delivery to ${item.deliveryDetails.reciverName} Success`,
        icon: "success",
      });
    }
  };

  // Handle loading state
  if (isUserLoading || authLoading || isLoading) return <Loading />;

  // Handle error state
  if (isError)
    return (
      <div className="text-red-500 text-center mt-4">
        Error: {error.message || "Failed to fetch delivery details"}
      </div>
    );

  console.log(data);

  return (
    <div>
      <Heading title="My Delivery List" />
      <div className="mt-6">
        <div className="overflow-x-auto">
          {data.length > 0 ? (
            <table className="table-auto w-full border-collapse border border-gray-200 shadow-lg">
              {/* Table Head */}
              <thead className="bg-gray-100 text-gray-800">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">SI</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Booked By
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Receiver</th>
                  <th className="border border-gray-300 px-4 py-2">Phone</th>
                  <th className="border border-gray-300 px-4 py-2">Address</th>
                  <th className="border border-gray-300 px-4 py-2">Location</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Delivery Date
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody className="text-gray-700">
                {data.map((item, i) => (
                  <tr
                    key={item._id}
                    className={`${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                  >
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {i + 1}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.bookedUser?.name || "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.deliveryDetails?.reciverName || "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.deliveryDetails?.reciverPhone || "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.deliveryDetails?.address || "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.deliveryDetails?.location || "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">date</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      <button className="btn bg-red-600 text-white">
                        Cancel
                      </button>
                      <button
                        onClick={() => handleDeliveryStatus(item)}
                        className="btn btn-warning ml-2"
                      >
                        Deliver
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-red-500 text-center py-10 text-3xl">
              No orders found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyDeliveryList;
