import React from "react";
import { Routes, Route } from "react-router-dom";
import Basket from "./pages/basket/Basket";
import Products from "./pages/products/Products";
import Sidebar from "./pages/Dashboard/Sidebar/Sidebar";
import Admin from "./pages/Dashboard/Admin";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

const Main = () => (
  <>
    <Products />
    <Basket />
  </>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="admin" element={<Admin />}>
        <Route index element={<Sidebar />} />
      </Route>
      <Route exact path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
