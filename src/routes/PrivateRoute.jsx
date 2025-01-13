import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <p>Load...........</p>;
  }
  if (!user) {
    return;
  }

  return children;
};

export default PrivateRoute;
