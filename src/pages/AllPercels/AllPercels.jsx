import { useState } from "react";
import Heading from "../../components/Heading";
import useAllPercels from "../../hooks/useAllPercels";
import { format } from "date-fns";
import { IoIosSettings } from "react-icons/io";
import Modal from "../../components/Modal";
import Loading from "../shared/Loading/Loading";
const AllPercels = () => {
  const { allPercels, refetch, isLoading } = useAllPercels();
  const [selectPercel, setSelecetPercel] = useState(null);
  const handleManage = (percel) => {
    // console.log(percel);
    document.getElementById("my_modal_5").showModal();
    setSelecetPercel(percel);
  };
  if (isLoading) return <Loading />;
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
                  <th>{percel.status}</th>
                  <td>
                    <button
                      onClick={() => handleManage(percel)}
                      className="btn text-xl bg-orange-500 text-white"
                    >
                      <IoIosSettings />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal selectPercel={selectPercel} />
    </div>
  );
};

export default AllPercels;
