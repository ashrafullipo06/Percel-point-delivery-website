import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../shared/Loading/Loading";
import Heading from "../../../components/Heading";

const AllDeliveryMen = () => {
  const axiosSecure = useAxiosSecure();
  const { data: deliveryMens = [], isLoading } = useQuery({
    queryKey: ["delivery-men"],
    queryFn: async () => {
      const res = await axiosSecure("/delivery-man");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  return (
    <div className="container mx-auto p-6">
      <Heading title="All Delivery Men" />
      <div className="overflow-x-auto mt-6">
        <table className="table-auto w-full border border-gray-200 rounded-lg shadow-md">
          {/* Head */}
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-6 py-3 text-center text-sm font-semibold uppercase">
                SI
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold uppercase">
                Phone Number
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold uppercase">
                Total Delivered Parcel
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {deliveryMens.length > 0 ? (
              deliveryMens.map((man, i) => (
                <tr
                  key={man._id}
                  className={`${
                    i % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100`}
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 text-center">
                    {i + 1}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={man.imgDisplayUrl}
                            alt={man.name}
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">
                          {man.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 text-center">
                    {man.phone}
                  </td>
                  <td className="px-6 py-4 text-gray-700 text-center">
                    {man.totalDeliveredParcel || "N/A"}
                  </td>
                  <td className="px-6 py-4 text-center">AVG Rating</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-4 text-center text-gray-500 italic"
                >
                  No delivery men found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDeliveryMen;
