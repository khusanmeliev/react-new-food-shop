import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Dashboard/Admin";
import Products from "./pages/Products/Products";
// import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Navbar from "./containers/Navbar/Navbar";

const Main = () => (
  <>
    <Navbar />
    <Products />
  </>
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route element={<PrivateRoute />}> */}
        <Route path="/admin" element={<Admin />} />
        {/* </Route> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
