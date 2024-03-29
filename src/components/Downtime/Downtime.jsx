// eslint-disable-next-line no-unused-vars
import React from "react";
import "./downtime.css";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoSlack } from "react-icons/io5";
import { PiWebhooksLogoLight } from "react-icons/pi";
import { FcSms } from "react-icons/fc";
import { FaStarOfLife } from "react-icons/fa";
import { PiDiscordLogo } from "react-icons/pi";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa";
import { FcCallback } from "react-icons/fc";

const Downtime = () => {
  return (
    <div className="Downtime">
      <div className="DownTime-Guard">
        <div className="DownTime-Social">
          <div className="Downtime-SocialIcon">
            <AiOutlineMail color="#FDBD00" size={60} />
            <p className="DowntimeEmail">Email</p>
          </div>
          <div className="Downtime-SocialIcon">
            <IoLogoSlack color="#36C5F0" size={60} />
            <p className="DowntimeSlack">Slack</p>
          </div>
          <div className="Downtime-SocialIcon">
            <PiWebhooksLogoLight color="#e21d60" size={60} />
            <p className="DowntimeWebhooks">Webhooks</p>
          </div>
        </div>

        <div className="DownTimeIcons">
          <div className="DownTime-IconSocial">
            <div className="DownTime-Icon-message">
              <FcSms size={60} />
              <p className="DownTimeIcon-SMS">SMS</p>
            </div>
            <div className="DownTime-Icon-message">
              <FaStarOfLife size={60} color="orangeRed" />
              <p className="DownTimeIcon-SMS">Zapier</p>
            </div>
            <div className="DownTime-Icon-message">
              <PiDiscordLogo size={60} color="#7289d9" />
              <p className="DownTimeIcon-SMS">Discord</p>
            </div>
          </div>

          <div className="DownTimeIcon-Right">
            <div className="DownTimeIcon-Section">
              <div className="DownTime-Icon-VoiceCall">
                <FcCallback size={60} />
                <p className="Downtime-Call-text">Voice call</p>
              </div>
              <div className="DownTime-Icon-VoiceCall">
                <FaTelegram color="#229ED9" size={60} />
                <p className="Downtime-Call-text">Telegram</p>
              </div>
              <div className="DownTime-Icon-VoiceCall">
                <BiLogoMicrosoftTeams color="#464EB8 " size={60} />
                <p className="Downtime-Call-Team">Microsoft Teams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="DownTime-Right">
        <div className="DownTime-Right-Text">
          <h2 className="DownTime-GetNotified">
            Downtime <br /> happens <span className="DownTime-Dot">.</span>{" "}
            <br />
            <span className="DownTime-Notified"> Get notified!</span>
          </h2>
          <p className="DownTime-Description">
            Downtime happens even to the <br /> best of us. But it’s important
            to <br /> know it before customers are <br /> affected!
          </p>
          <h4 className="DownTime-Integrations">Show all integrations</h4>
        </div>
      </div>
    </div>
  );
};

export default Downtime;
