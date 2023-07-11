// import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
// import React from "react";
// import Api from "./pages/Api";
// import Home from "./pages/Home";
// import Form from "./pages/Form";
// import Login from "./pages/Login";
// import Showhide from "./pages/Showhide";
// import Navbar from "./Navbar";
// import { useStores } from "./store";

// function AppRoutes() {
//   const { Frontlogin } = useStores;
// const location = useLocation();
// const isLoggedIn = location.pathname !== "/";

// if (!isLoggedIn) {
//   return null;
// }
//   return (
//     <>
//       <div className="background-container"></div>

//       <Navbar />
//       <div className="container">
//         <Router>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/api" element={<Api />} />
//           <Route path="/form" element={<Form />} />
//           <Route path="/" element={<Home />} />
//           <Route path="/showhide" element={<Showhide />} />
//         </Routes>
//         </Router>
//       </div>
//     </>
//   );
// }

// export default AppRoutes;
