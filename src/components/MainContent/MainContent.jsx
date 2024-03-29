// eslint-disable-next-line no-unused-vars
import React from "react";
import "./maincontent.css";
import MicroImg from "../../assets/Micro.png";

import ExpediaLogo from "../../assets/expedia-logo.svg";
import GoDaddyLogo from "../../assets/godaddy-logo.svg";
import IBMLogo from "../../assets/ibm-logo.svg";
import NASALogo from "../../assets/nasa.svg";
import Moodys from "../../assets/moodys-logo.svg";
import Monitored from "../Monitered/Monitored";
import Card from "../MonitorCard/Card";
import Downtime from "../Downtime/Downtime";
import Footer from "../Footer/Footer";
import KeepUpTime from "../KeepUpTime/KeepUpTime";
import UptimeStatus from "../UptimeStatus/UptimeStatus";
import FreeAccount from "../FreeAccount/FreeAccount";

const MainContent = () => {
  return (
    <div className="MainContent">
      <div className="MainContent-Title-Left">
        <h3 className="MainContent-Leading">
          The world's leading <br />
          <span className="MainContent-span">uptime monitoring </span> platform
          <span className="mainContent-Dot"> .</span>
        </h3>

        <p className="MainContent-FreeContent">
          Get 50 Monitors with 5-minutes checks
          <span className="MainContent-Total"> totally FREE .</span>
        </p>
        <button className="Monitering-Button">
          Start Monitering in 30 seconds
        </button>
      </div>
      -
      <div className="MainContent-Title-Right">
        <img className="MainContent-Image-Right" src={MicroImg} alt="" />
        <div className="MainContent-MonitorCount">
          <p className="MainContent-Monitor-Details">
            Currently,we Keep an eye on
            <span className="MainContent-Monitor-Number"> 7,570,000 </span>
            monitors for more than
            <span className="MainContent-Monitor-Number"> 2,100,000 </span>users
            and companies
          </p>
        </div>
      </div>
      <div className="MainContent-Company-Images">
        <div className="MainContent-Company">
          <img className="MainContent-GodaddyLogo" src={GoDaddyLogo} alt="" />
          <img className="MainContent-NasaLogo" src={NASALogo} alt="" />
          <img className="MainContent-MoodysLogo" src={Moodys} alt="" />
          <img className="MainContent-IBMLogo" src={IBMLogo} alt="" />
          <img className="MainContent-ExpediaLogo" src={ExpediaLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
