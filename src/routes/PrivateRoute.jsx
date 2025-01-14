import useAuth from "../hooks/useAuth";
import Loading from "../pages/shared/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return;
  }

  return children;
};

export default PrivateRoute;
