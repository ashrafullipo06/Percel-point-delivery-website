import { useState } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUser from "../../../hooks/useUser";
import useCart from "../../../hooks/useCart";
import Heading from "../../../components/Heading";
import Loading from "../../shared/Loading/Loading";
import ReviewModal from "../../../components/ReviewModal";

const MyPercel = () => {
  const axiosSecure = useAxiosSecure();
  const { percels, isLoading, refetch } = useCart();
  const { isUser } = useUser();
  const [ratingInfo, setRatingInfo] = useState(null);

  // Pagination State
  const itemsPerPage = 5;
  const totalPages = Math.ceil(percels.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDelete = (percel) => {
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
          Swal.fire("Deleted!", `${percel.percelType} Deleted`, "success");
        }
      }
    });
  };

  if (isLoading) return <Loading />;

  const totalPayableAmount = percels.reduce(
    (prev, curr) => prev + (curr.charge || 0),
    0
  );
  // Get Current Page Data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPercels = percels.slice(startIndex, startIndex + itemsPerPage);

  // Pagination Handlers
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Heading title="My Booked Percel" />
      <div className="flex items-center justify-evenly mt-7">
        <h1 className="text-2xl">
          Total Payable Amount: {totalPayableAmount || 0}
        </h1>
        <Link to="/dashboard/payment" className="btn">
          Pay
        </Link>
      </div>
      <div className="mt-8">
        {percels.length === 0 ? (
          <h2 className="text-center text-2xl mt-16 text-red-500">
            No Items found in your cart
          </h2>
        ) : (
          <div className="overflow-x-auto w-full mt-8">
            <table className="table">
              {/* Head */}
              <thead>
                <tr>
                  <th>SI</th>
                  <th>Percel Type</th>
                  <th>Requested Date</th>
                  <th>Delivery Date</th>
                  <th>Booking Date</th>
                  <th>Delivery Man</th>
                  <th>Booking Status</th>
                  <th>Payment Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentPercels.map((percel, i) => (
                  <tr key={percel._id}>
                    <th>{startIndex + i + 1}</th>
                    <td>{percel.percelType}</td>
                    <td>
                      {format(
                        new Date(percel.requestedDeliveryDate),
                        "dd MMM, yy"
                      )}
                    </td>
                    <td>
                      {percel.assignDeliveryDate
                        ? format(
                            new Date(percel.assignDeliveryDate),
                            "dd MMM , yy"
                          )
                        : "Not Assigned"}
                    </td>
                    <td>
                      {percel.bookingDate
                        ? format(new Date(percel.bookingDate), "dd MMM , yy")
                        : "Not Assigned"}
                    </td>
                    <td>{percel.deliveryManName || "Not Assigned"}</td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full ${
                          percel.status === "pending" ? "bg-red-300" : ""
                        } ${
                          percel.status === "on the way" ? "bg-green-300" : ""
                        } ${
                          percel.status === "delivered" ? "bg-green-700" : ""
                        }`}
                      >
                        {percel.status}
                      </span>
                    </td>
                    <td>
                      {percel.paymentStatus ? (
                        <span className="px-2 py-1 bg-green-500 text-white rounded-full">
                          Success
                        </span>
                      ) : (
                        "Please Pay"
                      )}
                    </td>
                    <td className="flex items-center gap-2">
                      {percel.status === "pending" && (
                        <>
                          <Link
                            to={`/dashboard/update-booked-percel/${percel._id}`}
                            className="btn text-xl"
                          >
                            <CiEdit />
                          </Link>
                          <button
                            onClick={() => handleDelete(percel)}
                            className="text-xl text-red-500 btn bg-orange-200"
                          >
                            <MdDelete />
                          </button>
                        </>
                      )}
                      {percel.status === "delivered" &&
                        !percel.reviewStatus && (
                          <button
                            onClick={() => {
                              setRatingInfo(percel);
                              document
                                .getElementById("reviewModal")
                                .showModal();
                            }}
                            className="btn"
                          >
                            Review
                          </button>
                        )}
                      {percel.reviewStatus && (
                        <button disabled className="btn">
                          Reviewed
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center items-center gap-2">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <ReviewModal refetch={refetch} ratingInfo={ratingInfo} />
    </div>
  );
};

export default MyPercel;
