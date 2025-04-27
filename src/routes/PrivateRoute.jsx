import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../components/shared/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <Loading />;
  }
  if (user) return children;

  return <Navigate to="/login" state={location.pathname} replace />;
};

export default PrivateRoute;
