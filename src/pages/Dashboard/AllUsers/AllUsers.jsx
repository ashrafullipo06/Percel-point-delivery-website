import Heading from "../../../components/Heading";
import useAllUsers from "../../../hooks/useAllUsers";

const AllUsers = () => {
  const { users, isLoading } = useAllUsers();

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
              <th>Favorite Color</th>
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
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs"> Delete</button>
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
