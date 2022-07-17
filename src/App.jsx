import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Products from "./pages/Products/Products";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Navbar from "./containers/Navbar/Navbar";
import AdminRoutes from "./components/AdminRoutes";
import Orders from "./pages/Dashboard/Orders/Orders";
import EditProducts from "./pages/Dashboard/EditProducts/EditProducts";
const Main = () => (
  <>
    <Navbar />
    <Products />
  </>
);

function App() {
  const userRole = useSelector((state) => state.user.role);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* {userRole === "admin" && ( */}
      <Route path="/admin" element={<AdminRoutes />}>
        <Route index element={<Orders />} />
        <Route path="edit-products" element={<EditProducts />} />
      </Route>
      {/* )} */}

      <Route element={<PrivateRoute />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
