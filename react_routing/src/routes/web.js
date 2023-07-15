
import React from "react";
import { Routes, Route } from "react-router-dom";
import Api from "../pages/Api";
import Home from "../pages/Home";
import Form from "../pages/Form";
import Login from "../pages/Login";
import Showhide from "../pages/Showhide";
import Apitable from "../pages/Apitable";
import Sortdata from "../pages/Sortdata";
import Navbar from "../Navbar";

function Web() {
  return (
    <>
      <div className="background-container"/>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/api" element={<Api />} />
          <Route path="/form" element={<Form />} />
          <Route path="/showhide" element={<Showhide />} />
          <Route path="/Apitable" element={<Apitable/>}/>
          <Route path="/Sortdata" element={<Sortdata/>}/>

        </Routes>
        </div>
    </>
  );
}
 
export default Web;