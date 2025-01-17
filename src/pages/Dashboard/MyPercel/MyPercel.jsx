import { useQuery } from "@tanstack/react-query";
import useUser from "../../../hooks/useUser";
import Heading from "../../../components/Heading";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const MyPercel = () => {
  const axiosSecure = useAxiosSecure();
  const { isUser } = useUser();

  const { data: percels = [], refetch } = useQuery({
    queryKey: ["percel"],
    enabled: !!isUser?._id,
    queryFn: async () => {
      const res = await axiosSecure(`/percels/${isUser?._id}`);
      return res.data;
    },
  });
  console.log(percels);

  const handleDelete = (percel) => {
    console.log(percel);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/percels/${percel._id}`);
        if (res.data.deletedCount === 1) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${percel.percelType} Deleted`,
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div>
      <Heading title="My Booked Percel" />
      <div className="mt-8">
        {percels.length === 0 ? (
          <div>
            <h2 className="text-center text-2xl mt-16 text-red-500">
              No Item found in your cart
            </h2>{" "}
          </div>
        ) : (
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
                    <td>
                      {format(
                        new Date(percel?.requestedDeliveryDate),
                        "dd MMM, yy"
                      )}
                    </td>
                    <td>
                      {percel?.assignDeliveryDate ? (
                        <span className="font-semibold">
                          {format(
                            new Date(percel?.requestedDeliveryDate),
                            "dd MMM , yy"
                          )}
                        </span>
                      ) : (
                        "Not Assign"
                      )}
                    </td>
                    <td>
                      {percel?.bookingDate ? (
                        <span>
                          {format(new Date(percel?.bookingDate), "dd MMM , yy")}
                        </span>
                      ) : (
                        "Not Assign"
                      )}
                    </td>
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
                    <td className="flex items-center gap-2">
                      {percel.status === "pending" ? (
                        <>
                          <Link
                            to={`/dashboard/update-booked-percel/${percel._id}`}
                            className="btn text-xl"
                          >
                            <CiEdit />
                          </Link>

                          <button
                            onClick={() => {
                              handleDelete(percel);
                            }}
                            className="text-xl text-red-500 btn bg-orange-200"
                          >
                            <MdDelete />
                          </button>
                        </>
                      ) : (
                        <>
                          <button disabled className="btn text-xl">
                            <CiEdit />
                          </button>
                          <button
                            disabled
                            className="text-xl text-red-500 btn bg-orange-200"
                          >
                            <MdDelete />
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPercel;
