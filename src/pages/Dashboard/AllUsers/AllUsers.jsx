import { useState } from "react";
import Heading from "../../../components/Heading";
import useAllUsers from "../../../hooks/useAllUsers";
import adminIcon from "../../../assets/dashboard/adminIcon.png";
import userIcon from "../../../assets/dashboard/user.png";
import deliveryMan from "../../../assets/dashboard/delivery.png";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { users, isLoading, refetch } = useAllUsers();
  const axiosSecure = useAxiosSecure();

  // Pagination State
  const itemsPerPage = 5;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handleUserRole = (user, newRole) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Change ${user.role} to ${newRole}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Make ${newRole}`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.patch(`/users/${user._id}`, {
          role: newRole,
        });
        if (res) {
          Swal.fire("Updated!", "User role has been updated.", "success");
          refetch();
        } else {
          Swal.fire("Error!", "Failed to update user role.", "error");
        }
      }
    });
  };

  if (isLoading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  // Get users for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = users.slice(startIndex, startIndex + itemsPerPage);

  // Pagination Handlers
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-6">
      <Heading title="All Users" />
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
                Email
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold uppercase">
                Requested Role
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold uppercase">
                Current Role
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold uppercase">
                Make Role
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, i) => (
              <tr
                key={user._id}
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
                          src={user.imgDisplayUrl}
                          alt={user.name}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="font-bold">{user.name}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">{user.email}</td>
                <td className="px-6 py-4 text-center">
                  {user?.status === "pending" && (
                    <span className="bg-green-500 px-2 py-1 text-white rounded-full">
                      {user?.requestedRole === "deliveryMan"
                        ? "Delivery Man"
                        : "Admin"}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-center">{user.role}</td>
                <td className="px-6 py-4 text-center">
                  {user?.role === "admin" && (
                    <>
                      <button
                        onClick={() => handleUserRole(user, "user")}
                        className="btn btn-ghost btn-xs tooltip"
                        data-tip="User"
                      >
                        <img className="w-6 " src={userIcon} alt="User Icon" />
                      </button>
                      <button
                        onClick={() => handleUserRole(user, "deliveryMan")}
                        className="btn btn-ghost btn-xs tooltip"
                        data-tip="Delivery Man"
                      >
                        <img
                          className="w-6"
                          src={deliveryMan}
                          alt="Delivery Icon"
                        />
                      </button>
                    </>
                  )}
                  {user?.role === "user" && (
                    <>
                      <button
                        onClick={() => handleUserRole(user, "admin")}
                        className="btn btn-ghost btn-xs tooltip"
                        data-tip="Admin"
                      >
                        <img className="w-6" src={adminIcon} alt="Admin Icon" />
                      </button>
                      <button
                        onClick={() => handleUserRole(user, "deliveryMan")}
                        className="btn btn-ghost btn-xs tooltip"
                        data-tip="Delivery Man"
                      >
                        <img
                          className="w-6"
                          src={deliveryMan}
                          alt="Delivery Icon"
                        />
                      </button>
                    </>
                  )}
                  {user?.role === "deliveryMan" && (
                    <>
                      <button
                        onClick={() => handleUserRole(user, "admin")}
                        className="btn btn-ghost btn-xs tooltip"
                        data-tip="Admin"
                      >
                        <img className="w-6" src={adminIcon} alt="Admin Icon" />
                      </button>
                      <button
                        onClick={() => handleUserRole(user, "user")}
                        className="btn btn-ghost btn-xs tooltip"
                        data-tip="User"
                      >
                        <img className="w-6" src={userIcon} alt="User Icon" />
                      </button>
                    </>
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
    </div>
  );
};

export default AllUsers;
