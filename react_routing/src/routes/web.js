
import React from "react";
import { Routes, Route } from "react-router-dom";
import Api from "../pages/Api";
import Home from "../pages/Home";
import Form from "../pages/Form";
import Login from "../pages/Login";
import Showhide from "../pages/Showhide";
import Navbar from "../Navbar";

function Web() {
  return (
    <>
      <div className="background-container"></div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/api" element={<Api />} />
          <Route path="/form" element={<Form />} />
          <Route path="/showhide" element={<Showhide />} />
        </Routes>
      
    </>
  );
}
 
export default Web;