import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <div className="Left menu">
        <Link to="/">Bug Tracker</Link>
      </div>
      <div className="right menu">
        <Link to="/">All Bugs</Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
