import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Navbar from "./containers/Navbar/Navbar";
import AdminRoutes from "./components/AdminRoutes";
import Orders from "./pages/Dashboard/Orders/Orders";
import EditProducts from "./pages/Dashboard/EditProducts/EditProducts";
import ProductLists from "./containers/ProductLists/ProductLists";

const Main = () => (
  <>
    <Navbar />
    <Products />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/admin" element={<AdminRoutes />}>
        <Route index element={<Orders />} />
        <Route path="edit-products" element={<EditProducts />} />
        <Route path="/products" element={<ProductLists />} />
      </Route>

      <Route element={<PrivateRoute />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
