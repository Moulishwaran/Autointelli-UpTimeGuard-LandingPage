// eslint-disable-next-line no-unused-vars
import React from "react";
import "./additionalFeatures.css";
import { SiTeamviewer } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";
import { FaServer } from "react-icons/fa";

const AdditionalFeatures = () => {
  return (
    <div className="AdditionFeatures">
      <div className="Additional-Features-Heading">
        <h1 className="feature-title">
          Additional <span className="Features">Features .</span>
        </h1>
        <p className="Feature-Paragraph">
          Unlock the full potential of your status page and leverage every
          option to maximize efficiency <br /> and save costs with UptimeRobot.
        </p>
      </div>
      <div className="Featured-Card">
        <div className="Featured-Card-Detail">
          <SiTeamviewer
            color="green"
            size={80}
            className="Featured-Card-Detail-Icon"
          />
          <h3 className="Featured-API-Title">
            Use API to manage <br /> status pages
          </h3>
          <p className="Featured-Para-Desc">
            API allows you to work with <br /> your service status page - get
            <br />
            the status page details, add <br /> or remove monitors, list all
            <br />
            status pages, sort them, get <br /> the status, add a password,{" "}
            <br /> and more!
          </p>
        </div>
        <div className="Featured-Card-Detail">
          <FaUserFriends
            color="green"
            size={80}
            className="Featured-Card-Detail-Icon"
          />
          <h3 className="Featured-API-Title">
            Allow sub-users to <br /> access status page
          </h3>
          <p className="Featured-Para-Desc">
            Add users to your account <br /> with notify-only or login <br />
            access. This feature enables <br /> seamless collaboration <br />
            among colleagues, allowing <br /> them to manage status pages <br />
            and add recent updates.
          </p>
        </div>
        <div className="Featured-Card-Detail">
          <FaServer
            color="green"
            size={80}
            className="Featured-Card-Detail-Icon"
          />
          <h3 className="Featured-API-Title">
            Status page for <br /> different monitors
          </h3>
          <p className="Featured-Para-Desc">
            Add as many monitors to your <br /> status pages as you wish, no
            <br />
            matter if it’s a website, server, <br /> keyword SSL certificate,
            port, <br /> or cron job monitor. Specify <br /> the order
            alphabetically.
          </p>
        </div>
      </div>
      <div className="Featured-Right">
        <button className="GetFree-Button">Get FREE Status page</button>
      </div>
    </div>
  );
};

export default AdditionalFeatures;
