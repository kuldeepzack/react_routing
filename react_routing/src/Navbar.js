// import { Link, useLocation } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="nav">
//       <ul>
//         <CustomLink to="/api">Api</CustomLink>
//         <CustomLink to="/form">form</CustomLink>
//         <CustomLink to="/home">Home</CustomLink>
//         <CustomLink to="/">Login</CustomLink>
//         <CustomLink to="/showhide">Showhide</CustomLink>
//       </ul>
//     </nav>
//   );
// }

// function CustomLink({ to, children, ...props }) {

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   );
// }

import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  const location = useLocation();
  const isLoggedIn = location.pathname !== "/";

  if (!isLoggedIn) {
    return null;
  }

  return (
   
    <nav className="nav">
      <div class="topnav" id="myTopnav">
        <CustomLink to="/api">Api</CustomLink>
        <CustomLink to="/form">form</CustomLink>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
        <CustomLink to="/showhide">Showhide</CustomLink>
      </div>
    </nav>
   
  );
}

function CustomLink({ to, children, ...props }) {
  return (
    <li>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
