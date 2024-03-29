// eslint-disable-next-line no-unused-vars
import React from "react";
import LogoImage from "../../assets/favicon.ico";
import "./navbar.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="Navbar">
      <nav className="Navbar-Content">
        <div className="Navbar-LogoName">
          <img className="navbar-LogoImage" src={LogoImage} alt="ss" />
          <h2 className="navbar-Logotitle">Uptime Guard</h2>
        </div>
        <div className="Navbar-Menu-List">
          <ul className="Navbar-Letters">
            <li className="Navbar-Monitering">
              Monitering
              <MdKeyboardArrowDown className="Navbar-Monitering-icon" />
            </li>
            <li className="Navbar-Integration">Integrations</li>
            <li className="Navbar-Status">Status Page</li>
          </ul>
        </div>

        <div className="Navbar-Login">
          <button className="Navbar-Login-Btn">Log In</button>
          <button className="Navbar-Register-Free">Register For Free</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
