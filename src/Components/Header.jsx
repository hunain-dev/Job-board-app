import React from 'react';
import { Link, useNavigate} from 'react-router-dom';

import Button from './Button';
const Header = () => {
  const navigate = useNavigate(); 
  
  const Logout = ()=>{
    alert("Logout Successfully");
    navigate("RegisterForm");
    return;

     

  }
  return (
    <div className="Header">
      <div className="left">
     <Link to="/Home"><h1>CareerHunt.</h1></Link>   
        <Link to="/Topcompanies"><h2>Top-companies</h2></Link>
      </div>
      <div className="right" onClick={Logout}>
        <Button  btn="Log-out"  backgroundColor="#6C8A6E"/>
      </div>
    </div>
  );
};

export default Header;
