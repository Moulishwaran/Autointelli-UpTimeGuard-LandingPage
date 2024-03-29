// eslint-disable-next-line no-unused-vars
import React from "react";
import "./KeepUpTime.css";
import Monitor from "../../assets/monitor.jpeg";
import MonitorImg from "../../assets/monitor2.webp";
import AppStore from "../../assets/appstore-badge.svg";
import GoogleStore from "../../assets/google-playstore-badge.svg";

const KeepUpTime = () => {
  return (
    <div>
      <div className="KeepUpTime">
        <div className="KeepUpTime-Right">
          <img className="keepUpTime-MonitorImage" src={Monitor} alt="" />
          <img className="keepUpTime-Monitor-Images2" src={MonitorImg} alt="" />
          <img className="keepUpTime-MonitorImage3" src={Monitor} alt="" />
        </div>

        <div className="KeepUpTime-All">
          <div className="KeepUpTime-Content">
            <h2 className="KeepUpTime-Heading">
              <span className="KeepUpTime-span">Keep monitoring</span> <br />
              everywhere you go <span className="KeepUpTime-Dot">.</span>
            </h2>
            <p className="KeepUpTime-Paragraph">
              Get instant notifications, manage monitors and <br /> check your
              uptime statistics on the go.
            </p>
            <div className="KeepUpTime-Button">
              <img className="GoogleBtn" src={GoogleStore} alt="" />
              <img className="AppleBtn" src={AppStore} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeepUpTime;
