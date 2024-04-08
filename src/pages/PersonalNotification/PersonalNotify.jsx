// eslint-disable-next-line no-unused-vars
import React from "react";
import "./personal.css";
import { AiOutlineMail } from "react-icons/ai";
import { CiMobile2 } from "react-icons/ci";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { RxMobile } from "react-icons/rx";
import Google from "../../assets/google-playstore-badge.svg";
import Apple from "../../assets/appstore-badge.svg";
import { FaSlack } from "react-icons/fa6";
import ThirdParty from "../Thirdparty/ThirdParty";
import ShowcasePage from "../ShowcasePage/ShowcasePage";

const PersonalNotify = () => {
  return (
    <>
      <div className="Personal">
        <div className="Personal-Heading">
          <h1 className="Personal-Title">
            <span className="Personal-Color">Personal</span> notification
            channels
            <span className="Personal-Dot">.</span>
          </h1>
        </div>
        <div className="Personal-Cards">
          <div className="Personal-Card">
            <div className="Personal-Card-section">
              <AiOutlineMail className="Personal-Email-Icon" />
              <h5 className="Personal-Email-Text">E-mail</h5>
            </div>
          </div>
          <div className="Personal-Card2">
            <div className="Personal-Card-section2">
              <CiMobile2 className="Personal-SMS-Icon" />
              <h5 className="Personal-SMS-Text">SMS</h5>
            </div>
          </div>
          <div className="Personal-Card3">
            <div className="Personal-Card-section3">
              <MdOutlineWifiCalling3 className="Personal-VoiceCall-Icon" />
              <h5 className="Personal-VoiceCall-Text">Voice call</h5>
            </div>
          </div>
          <div className="Personal-Card4">
            <div className="Personal-Card-section4">
              <CiMobile2 className="Personal-Email-SMS-Icon" />
              <h5 className="Personal-Email-SMS-Text">Email & SMS</h5>
            </div>
          </div>
          <div className="Personal-Card5">
            <div className="Personal-Card-section5">
              <RxMobile className="Personal-mobileapp-Icon" />
              <h5 className="Personal-mobileapp-Text">Mobile app push</h5>
            </div>
          </div>
        </div>
        <div className="PersonalNotify">
          <h2 className="PersonalNotify-Heading">
            Stay <span className="Personal-span-color">notify</span> on the go{" "}
            <span className="Stay-Dot">.</span>
          </h2>
          <p className="Personal-Download">
            Don't forget to download our mobile app for your Android or iOS.
          </p>
          <img className="GoogleIcons" src={Google} alt="" />
          <img className="AppleIcons" src={Apple} alt="" />
        </div>
        <ThirdParty />
        <ShowcasePage />
      </div>
    </>
  );
};

export default PersonalNotify;
