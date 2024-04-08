// eslint-disable-next-line no-unused-vars
import React from "react";
import "./showcase.css";
import Monitor from "../../assets/monitor.jpeg";
import MonitorImg from "../../assets/monitor2.webp";
import SubImage from "../../assets/subusers.svg";
import FreeAccount from "../../components/FreeAccount/FreeAccount";
import Footer from "../../components/Footer/Footer";

const ShowcasePage = () => {
  return (
    <div className="ShowCase-Page">
      <div className="ShowCase-page-background">
        <div className="Showcase-your-service">
          <h2 className="Showcase-your-service-Heading">
            Showcase your <br />
            service uptime with <br /> the{" "}
            <span className="Showcase-your-service-color"> status page .</span>
          </h2>

          <p className="Showcase-your-service-Text">
            Showcase your service uptime with a <br />
            <span className="Showcase-your-service-page">
              status page. Highlight your services
            </span>
            <br />
            <span className="Showcase-your-service-reliability">
              reliability and build trust with your
            </span>
            <br />
            <span className="Showcase-your-service-visitors">
              website visitors and (potential)
            </span>
            <br />
            <span className="Showcase-your-service-check"> customers.</span>
          </p>

          <p type="submit" className="LiveShowcase-Btn">
            Check the LIVE status Page Example
          </p>
        </div>
      </div>

      <div className="ShowCase-page-Image">
        <div className="ShowCase-page-back">
          <img className="status-image" src={Monitor} alt="" />
          <img className="status-image2" src={MonitorImg} alt="" />
        </div>
      </div>
      <div className="Add-Team-Member">
        <div className="Add-Team-Member-container">
          <div className="Add-team-member-container">
            <img className="SubUser-Image" src={SubImage} alt="" />
          </div>
          <div className="Add-team-text">
            <h3 className="Add-team-title">
              Add your
              <span className="Add-team-title-Color"> team members </span>
              <br />
              <span className="Add-team-title-notify">
                to keep them notified.
              </span>
            </h3>
            <p className="Add-team-Para">
              <span className="Add-team-Para-You">
                You can invite all your team members to access
              </span>
              <br />
              <span className="Add-team-Para-You">
                your monitors, keep them notified and manage
              </span>
              <br /> incidents. Choose from three levels of user access:
              <br />
              <span className="Add-team-Para-You2">
                read, write and notify-only.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="Account-Free">
        <FreeAccount />
      </div>
    </div>
  );
};

export default ShowcasePage;

{
  /*  */
}
