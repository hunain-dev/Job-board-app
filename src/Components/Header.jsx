import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header">
      <div className="left">
     <Link to="/"><h1>CareerHunt.</h1></Link>   
        <Link to="/"><h2>Home</h2></Link>
        <Link to="/Topcompanies"><h2>Top-companies</h2></Link>
      </div>
      <div className="right">
        <Link to="/Profile"><h2>Profile</h2></Link>
      </div>
    </div>
  );
};

export default Header;
