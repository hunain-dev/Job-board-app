import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import Button from "./Button";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const Logout = () => {
    alert("Logout Successfully");
    navigate("/RegisterForm"); 
  };

  return (
    <div className="Header">
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <IoCloseOutline className="closeicon" onClick={toggleMenu} />

        <Link to="/Home">
          <h3>Home</h3>
        </Link>

        <Link to="/Topcompanies">
          <h3>Top-companies</h3>
        </Link>

        <h3 onClick={Logout}>LOGOUT</h3>
      </div>

      <div className="left">
        <Link to="/Home">
          <h1>CareerHunt.</h1>
        </Link>
        <Link to="/Topcompanies">
          <h2>Top-companies</h2>
        </Link>
      </div>
 <div className="right">
        <Button btn="Log-out" onClick={Logout} backgroundColor="#6C8A6E" />
        <CiMenuFries className="menuicon" onClick={toggleMenu} /> 
      </div>

    </div>
  );
};

export default Header;
