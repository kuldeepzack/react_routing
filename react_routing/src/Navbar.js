import React from "react";
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