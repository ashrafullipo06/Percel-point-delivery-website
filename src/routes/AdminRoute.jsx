import { Navigate, useLocation } from "react-router-dom";
import useUserRole from "../hooks/useUserRole";
import useAuth from "../hooks/useAuth";
import Loading from "../pages/shared/Loading/Loading";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const { userRole, isUserRoleLoading } = useUserRole();
  if (isUserRoleLoading || loading) return <Loading />;
  if (userRole === "admin" && user) return children;
  return <Navigate state={location.pathname} to="/login" replace />;
};

export default AdminRoute;
