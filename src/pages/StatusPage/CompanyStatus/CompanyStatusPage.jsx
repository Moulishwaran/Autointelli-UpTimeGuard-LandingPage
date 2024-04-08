// eslint-disable-next-line no-unused-vars
import React from "react";
import "./CompanyStatusPage.css";
import GoDaddyLogo from "../../../assets/godaddy-logo.svg";
import NASALogo from "../../../assets/nasa1.svg";
import Moodys from "../../../assets/moodys-logo.svg";
import IBMLogo from "../../../assets/ibm-logo.svg";
import ExpediaLogo from "../../../assets/expedia-logo.svg";

const CompanyStatusPage = () => {
  return (
    <div className="CompanyStatusPage">
      <div className="MainContent-Company-Images">
        <div className="MainContent-Company">
          <img className="MainContent-GodaddyLogo" src={GoDaddyLogo} alt="" />
          <img
            className="MainContent-NasaLogo"
            src={NASALogo}
            alt=""
            sizes="30px"
          />
          <img className="MainContent-MoodysLogo" src={Moodys} alt="" />
          <img className="MainContent-IBMLogo" src={IBMLogo} alt="" />
          <img className="MainContent-ExpediaLogo" src={ExpediaLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CompanyStatusPage;
