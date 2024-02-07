import React from 'react';
import logo from "../assets/Logo.svg";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="Logo" width={100} height={32} loading="lazy"/>
      </Link>
    </div>
  )
}

export default Navbar
