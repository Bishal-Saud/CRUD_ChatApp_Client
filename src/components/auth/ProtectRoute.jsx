import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ user, redirect, children }) => {
  if (!user) {
    return <Navigate to={redirect || "/login"} />;
  }
  return children ? children : <Outlet />;
};

export default ProtectRoute;
