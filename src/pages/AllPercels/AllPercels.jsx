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
    document.getElementById("my_modal_5").showModal();
    setSelecetPercel(percel);
  };

  if (isLoading) return <Loading />;
  console.log(allPercels);

  return (
    <div className="container mx-auto p-6">
      <Heading title="All Percels" />
      <div className="mt-8 overflow-x-auto">
        <table className="table-auto w-full border border-gray-200 rounded-lg shadow-md">
          {/* Table Header */}
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
                Booking Date
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold uppercase">
                Requested Delivery Date
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold uppercase">
                Cost
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold uppercase">
                Manage
              </th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {allPercels.map((percel, i) => (
              <tr
                key={percel._id}
                className={`${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="px-6 py-4 text-center">{i + 1}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={percel.userImg}
                          alt={percel.userName}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="font-bold text-gray-800">
                      {percel.userName}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">{percel.userPhone}</td>
                <td className="px-6 py-4 text-center">
                  {format(new Date(percel.bookingDate), "dd MMM, yy")}
                </td>
                <td className="px-6 py-4 text-center">
                  {format(new Date(percel.requestedDeliveryDate), "dd MMM, yy")}
                </td>
                <td className="px-6 py-4 text-center">{percel.cost} tk</td>
                <td className="px-6 py-4 text-center">{percel.status}</td>
                <td className="px-6 py-4 text-center">
                  {percel.status === "Delivered" ? (
                    <button
                      disabled
                      className="btn btn-sm bg-orange-500 text-white hover:bg-orange-600 text-xl "
                    >
                      <IoIosSettings />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleManage(percel)}
                      className="btn btn-sm bg-orange-500 text-white hover:bg-orange-600 text-xl "
                    >
                      <IoIosSettings />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal selectPercel={selectPercel} refetch={refetch} />
    </div>
  );
};

export default AllPercels;
