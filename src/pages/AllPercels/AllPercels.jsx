import { useState } from "react";
import Heading from "../../components/Heading";
import useAllPercels from "../../hooks/useAllPercels";
import { format } from "date-fns";
import { IoIosSettings } from "react-icons/io";
import Modal from "../../components/Modal";
import Loading from "../shared/Loading/Loading";

const AllPercels = () => {
  const { allPercels, refetch, isLoading, totalPercel } = useAllPercels();
  const [selectPercel, setSelecetPercel] = useState(null);
  const [sortedPercels, setSortedPercels] = useState([]);
  const [isSorted, setIsSorted] = useState(false); // Track sorting state

  const itemPerPage = 5;
  const totalPage = Math.ceil(totalPercel / itemPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handleManage = (percel) => {
    document.getElementById("my_modal_5").showModal();
    setSelecetPercel(percel);
  };

  // Pagination Handlers
  const handleNext = () => {
    if (currentPage < totalPage) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // Sorting Functionality
  const handleSort = () => {
    if (!isSorted) {
      const sortedData = [...allPercels].sort((a, b) => {
        if (a.paymentStatus === b.paymentStatus) return 0;
        return a.paymentStatus ? -1 : 1; // Paid first
      });
      setSortedPercels(sortedData);
    } else {
      setSortedPercels([]); // Reset to original order
    }
    setIsSorted(!isSorted); // Toggle sort state
  };

  if (isLoading) return <Loading />;

  // Determine data to display: sorted or unsorted
  const dataToDisplay = isSorted ? sortedPercels : allPercels;

  // Get current page data
  const startIndex = (currentPage - 1) * itemPerPage;
  const currentData = dataToDisplay.slice(startIndex, startIndex + itemPerPage);

  return (
    <div className="container mx-auto p-6">
      <Heading title="All Percels" />
      <div className="flex justify-between items-center my-4">
        <button
          onClick={handleSort}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {isSorted ? "Reset Sorting" : "Sort by Payment Status"}
        </button>
        <p>Total Percels: {totalPercel}</p>
      </div>
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
                Payment
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
            {currentData.map((percel, i) => (
              <tr
                key={percel._id}
                className={`${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="px-6 py-4 text-center">{startIndex + i + 1}</td>
                <td className="px-6 py-4">
                  <div className="flex  gap-3">
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
                <td className="px-6 py-4 text-center">
                  {percel.paymentStatus ? (
                    <span className="px-2 py-1 rounded-lg bg-green-500 text-white">
                      Paid
                    </span>
                  ) : (
                    <span>Not Yet</span>
                  )}
                </td>
                <td className="px-6 py-4 text-center">
                  {percel.status === "Delivered" ? (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-md">
                      Delivered
                    </span>
                  ) : (
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-md">
                      {percel.status}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-center">
                  {percel.status === "Delivered" || !percel.paymentStatus ? (
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

      {/* Pagination Buttons */}
      <div className="mt-4 flex justify-center items-center gap-2">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Prev
        </button>
        {Array.from({ length: totalPage }, (_, index) => (
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
          disabled={currentPage === totalPage}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <Modal selectPercel={selectPercel} refetch={refetch} />
    </div>
  );
};

export default AllPercels;
