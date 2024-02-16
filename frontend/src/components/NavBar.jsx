import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.svg";
import logoText from "../assets/images/logo-text.svg";

const NavBar = ({ user }) => {
  return (
    <div className="border-b-2">
      <div className="flex justify-between items-center p-5">
        <Link to="/">
          <img className="w-40" src={logoText}></img>
        </Link>
        <Link>
          <img src={user?.image} alt="user-picture" className="rounded-full" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
