import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";
import Loading from "../components/shared/Loading/Loading";


const DeliveryManRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const { userRole, isUserRoleLoading } = useUserRole();
  if (isUserRoleLoading || loading) return <Loading />;
  if (userRole === "deliveryMan" && user) return children;
  return <Navigate state={location.pathname} to="/login" replace />;
};

export default DeliveryManRoute;
