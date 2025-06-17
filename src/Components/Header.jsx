import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

import Button from "./Button";
import { IoIosMenu } from "react-icons/io";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigate = useNavigate();

  const Logout = () => {
    alert("Logout Successfully");
    navigate("RegisterForm");
    return;
  };
  return (
    <div className="Header">
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <IoCloseOutline className="closeicon" onClick={toggleMenu} />
        <Link to="/Services">
          <h3>Services</h3>
        </Link>
        <Link to="/Ourwork">
          <h3>Ourwork</h3>
        </Link>
        <Link to="/Aboutus">
          <h3>Aboutus</h3>
        </Link>
        <Link to="/Contact">
          <h3>Contact</h3>
        </Link>
      </div>

      <div className="left">
        <Link to="/Home">
          <h1>CareerHunt.</h1>
        </Link>
        <Link to="/Topcompanies">
          <h2>Top-companies</h2>
        </Link>
      </div>
      <div className="right" onClick={Logout}>
        <Button btn="Log-out" backgroundColor="#6C8A6E" />
        <IoIosMenu className="menuicon" onClick={toggleMenu} />
      </div>
    </div>
  );
};

export default Header;
