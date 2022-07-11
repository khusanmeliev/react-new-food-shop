import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isLoggedin = useSelector((state) => state.isLoggedin);

  return isLoggedin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
