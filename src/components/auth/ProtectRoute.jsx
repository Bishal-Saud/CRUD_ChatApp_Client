import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectRoute({ children, user, redirect = "/login" }) {
  return user ? <Outlet /> : <Navigate to={redirect} />;
}

export default ProtectRoute;
