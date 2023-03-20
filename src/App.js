import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/components/Layout";
import SideMenu from "./pages/components/SideMenu";
import Inventory from "./pages/Inventory";
import AddProduct from "./pages/AddProduct";
import NoPageFound from "./pages/NoPageFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/add-product" element={<AddProduct />} />
        </Route>
        <Route path="*" element={<NoPageFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
