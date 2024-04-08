// eslint-disable-next-line no-unused-vars
import React from "react";
import LogoImage from "../../assets/favicon.ico";
import "./navbar.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="Navbar">
      <nav className="Navbar-Content">
        <div className="Navbar-LogoName">
          <img className="navbar-LogoImage" src={LogoImage} alt="ss" />
          <Link to={"/"} className="navbar-Logotitle">
            Uptime Guard
          </Link>
        </div>
        <div className="Navbar-Menu-List">
          <ul className="Navbar-Letters">
            <li className="Navbar-Monitering">
              Monitering
              <MdKeyboardArrowDown className="Navbar-Monitering-icon" />
            </li>
            <Link to={"/integration"} className="Navbar-Integration">
              Integrations
            </Link>
            <Link to={"/status-page"} className="Navbar-Status">
              Status Page
            </Link>
          </ul>
        </div>

        <div className="Navbar-Login">
          <Link className="Navbar-Login-Btn">Log In</Link>
          <button className="Navbar-Register-Free">Register For Free</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
