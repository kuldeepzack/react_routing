import { Routes, Route } from "react-router-dom";
import Api from "./pages/Api";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Login from "./pages/Login";
import Showhide from "./pages/Showhide";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <>
<div className="background-container"></div>
 

      <Navbar />
      <div className="container">
        <Routes>
      
          <Route path="/login" element={<Login />} />
          <Route path="/api" element={<Api />} />
          <Route path="/form" element={<Form />} />
          <Route path="/" element={<Home />} />

          <Route path="/showhide" element={<Showhide />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
