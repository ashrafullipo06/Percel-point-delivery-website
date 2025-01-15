import Heading from "../../../components/Heading";
import useAllUsers from "../../../hooks/useAllUsers";
import adminIcon from "../../../assets/dashboard/adminIcon.png";
import userIcon from "../../../assets/dashboard/user.png";
import deliveryMan from "../../../assets/dashboard/delivery.png";

const AllUsers = () => {
  const { users, isLoading } = useAllUsers();
  console.log(users);

  const handleAdmin = (user) => {
    console.log(user);
  };
  const handleUser = (user) => {
    console.log(user);
  };
  const handleDeliveryMan = (user) => {
    console.log(user);
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
                    <p className="bg-red-300 px-2 py-1 rounded-full ">
                      {user?.requestedRole}
                    </p>
                  )}
                </td>
                <td>{user.role}</td>
                <th>
                  {user?.role === "admin" && (
                    <>
                      <button className="btn btn-ghost btn-xs">
                        <img className="w-6" src={userIcon} />
                      </button>
                      <button className="btn btn-ghost btn-xs">
                        <img className="w-6" src={deliveryMan} />
                      </button>
                    </>
                  )}
                  {user?.role === "user" && (
                    <>
                      <button className="btn btn-ghost btn-xs ">
                        <img className="w-6" src={adminIcon} />
                      </button>
                      <button className="btn btn-ghost btn-xs">
                        <img className="w-6" src={deliveryMan} />
                      </button>
                    </>
                  )}

                  {user?.role === "delivery man" && (
                    <>
                      <button className="btn btn-ghost btn-xs ">
                        <img className="w-6" src={adminIcon} />
                      </button>
                      <button className="btn btn-ghost btn-xs">
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
