import { Outlet, Navigate, useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";
import { createSearchParams } from "react-router-dom";

const ProtectedRoutes = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (user.email === "" || null) {
    let loginPath = "/login";
    loginPath = location.pathname
      ? `${loginPath}?next=${location.pathname}`
      : loginPath;
    return <Navigate to={loginPath} state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
