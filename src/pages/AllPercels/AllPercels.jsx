import Heading from "../../components/Heading";
import useAllPercels from "../../hooks/useAllPercels";
import { format } from "date-fns";
import { IoIosSettings } from "react-icons/io";
const AllPercels = () => {
  const { allPercels, refetch, isLoading } = useAllPercels();

  return (
    <div>
      <Heading title="All Percels" />
      <div className="mt-8">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SI</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Booking Date</th>
                <th>Requested Delivery Date</th>
                <th>Cost</th>
                <th>Status</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              {allPercels.map((percel, i) => (
                <tr key={percel._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={percel.userImg} alt={percel.userName} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{percel.userName}</div>
                      </div>
                    </div>
                  </td>
                  <td>{percel.userPhone}</td>
                  <td>{format(new Date(percel.bookingDate), "dd MMM, yy")}</td>
                  <td>
                    {format(
                      new Date(percel.requestedDeliveryDate),
                      "dd MMM, yy"
                    )}
                  </td>
                  <td>{percel.cost} tk</td>
                  <th>
                    <select
                      defaultValue=""
                      className=" select-bordered w-full max-w-xs"
                    >
                      <option value="" disabled>
                        {percel.status}
                      </option>
                      <option value="on the way">on the way</option>
                      <option value="delivered">delivered</option>
                      <option value="returend">returend</option>
                      <option value="returend">returend</option>
                      <option value="canceled">canceled</option>
                    </select>
                  </th>
                  <td>
                    <button className="btn text-xl bg-orange-500 text-white">
                      <IoIosSettings />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllPercels;
