import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useUser from "../../../hooks/useUser";
import PercelTable from "../../../components/PercelTable";
import Heading from "../../../components/Heading";

const MyPercel = () => {
  const axiosPublic = useAxiosPublic();
  const { isUser } = useUser();

  const { data: percels = [] } = useQuery({
    queryKey: ["percel"],
    enabled: !!isUser?._id,
    queryFn: async () => {
      const res = await axiosPublic(`/percels/${isUser?._id}`);
      return res.data;
    },
  });
  console.log(percels);

  return (
    <div>
      <Heading title="My Booked Percel" />
      <div className="overflow-x-auto w-full mt-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SI</th>
              <th>Percel Type</th>
              <th>Requested Date</th>
              <th>Approximate Delivery Date</th>
              <th>Booking Date</th>
              <th>Delivery Man</th>
              <th>Booking Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {percels.map((percel, i) => (
              <tr key={percel._id}>
                <th>{i + 1}</th>

                <td>{percel.percelType}</td>
                <td>Requested Date</td>
                <td>Delivery Date</td>
                <td>Purple</td>
                <td>Purple</td>
                <td>
                  <span
                    className={`${
                      percel.status === "pending" && "bg-red-300"
                    } ${percel.status === "on the way" && "bg-green-300"} ${
                      percel.status === "delivered" && "bg-green-700"
                    } bg-green-300 px-3 py-1 rounded-full`}
                  >
                    {percel.status}
                  </span>
                </td>
                <td>Purple</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPercel;
