
import React, { useState } from "react";
import {  Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component }) => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("name");

  console.log("protect rou");
  return <>{isAuthenticated ? <Component /> : navigate("/")}</>;
};

export default ProtectedRoute;
