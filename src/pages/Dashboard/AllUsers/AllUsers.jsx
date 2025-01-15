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
          refetch(); // Refresh the user list
        } else {
          Swal.fire("Error!", "Failed to update user role.", "error");
        }
      }
    });
  };

  return (
    <div>
      <Heading title="All Users" />
      <div className="overflow-x-auto w-full py-24">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SI</th>
              <th>Name</th>
              <th>Email</th>
              <th>Request to be</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.imgDisplayUrl} alt={user.name} />
                      </div>
                    </div>
                    <div className="font-semibold">{user.name}</div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  {user?.status === "pending" && (
                    <p className="bg-green-500 px-2 py-1 text-center text-white rounded-full ">
                      {user?.requestedRole === "deliveryMan" && "Delivery Man"}
                      {user?.requestedRole === "admin" && "Admin"}
                    </p>
                  )}
                </td>
                <td>{user.role}</td>
                <th>
                  {user?.role === "admin" && (
                    <>
                      <button
                        onClick={() => handleUserRole(user, "user")}
                        className="btn btn-ghost btn-xs"
                      >
                        <img className="w-6" src={userIcon} />
                      </button>
                      <button
                        onClick={() => handleUserRole(user, "deliveryMan")}
                        className="btn btn-ghost btn-xs"
                      >
                        <img className="w-6" src={deliveryMan} />
                      </button>
                    </>
                  )}
                  {user?.role === "user" && (
                    <>
                      <button
                        onClick={() => handleUserRole(user, "admin")}
                        className="btn btn-ghost btn-xs "
                      >
                        <img className="w-6" src={adminIcon} />
                      </button>
                      <button
                        onClick={() => handleUserRole(user, "deliveryMan")}
                        className="btn btn-ghost btn-xs"
                      >
                        <img className="w-6" src={deliveryMan} />
                      </button>
                    </>
                  )}

                  {user?.role === "deliveryMan" && (
                    <>
                      <button
                        onClick={() => handleUserRole(user, "admin")}
                        className="btn btn-ghost btn-xs "
                      >
                        <img className="w-6" src={adminIcon} />
                      </button>
                      <button
                        onClick={() => handleUserRole(user, "user")}
                        className="btn btn-ghost btn-xs"
                      >
                        <img className="w-6" src={userIcon} />
                      </button>
                    </>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
