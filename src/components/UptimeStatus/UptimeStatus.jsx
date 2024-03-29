// eslint-disable-next-line no-unused-vars
import React from "react";
import "./uptimestatus.css";
import StatusImage from "../../assets/status.webp";
import Subusers from "../../assets/subusers.svg";

const UptimeStatus = () => {
  return (
    <>
      <div className="UptimeStatus-All">
        <div className="UptimeStatus-Page">
          <h2 className="UptimeStats-Heading">
            Inform your <br /> customers about <br /> incidents with <br />
            <span className="UptimeStaus-text">status pages</span>.
          </h2>
          <p className="UptimeStats-Text">
            Be transparent. Inform customers of <br /> planned outages. Show
            them that you <br /> strive to keep your service 100% online.
          </p>
          <div className="UptimeStats-Buttons">
            <p className="UptimeStats">Check LIVE demo</p>
            <p className="UptimeStats-OR">or</p>
            <p className="UptimeStats-Explore">Explore Status Pages</p>
          </div>
        </div>
        <div className="UptimeStatus-Page-Image">
          <img className="UptimeStatus-Page-Image" src={StatusImage} alt="" />
        </div>
        <div className="Team-members">
          <img className="SubusersImage" src={Subusers} alt="" />
          <div className="Team-Members-Para">
            <p className="Team-Members-Title">
              Add your
              <span className="Member-Span"> team members </span>
              <br /> to keep them notified <span>.</span>
            </p>
            <p className="Team-Members-Text">
              You can invite all your team members to access <br /> your
              monitors, keep them notified and manage <br /> incidents. Choose
              from three levels of user access: <br /> read, write and
              notify-only.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UptimeStatus;
