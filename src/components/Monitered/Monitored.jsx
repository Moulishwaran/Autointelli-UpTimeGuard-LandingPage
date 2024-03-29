// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Monitored.css";
import { CgWebsite } from "react-icons/cg";
import { IoShieldOutline } from "react-icons/io5";
import { MdDomainVerification } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";

const Monitored = () => {
  return (
    <div className="Monitored">
      <div className="Monitored-Title">
        <h2 className="Monitored-Text">
          All you really care about <br />
          <span className="Monitored-Really">monitored</span> in one place
          <span className="Monitored-Dot">.</span>
        </h2>
      </div>
      <div className="Monitored-Content-Top">
        <div className="Monitored-card">
          <div className="Card-item">
            <CgWebsite size={80} color="#61dafb" className="CardWebSite-Icon" />
          </div>
          <h3 className="Card-Monitoring-Title">Website monitoring</h3>
          <p className="Card-Website-Description">
            Be the first to know that your website is down! <br /> Reliable
            monitoring warns you before any significant <br /> trouble and saves
            you money.
          </p>
          <button className="Card-Website-Btn">Website monitoring</button>
        </div>

        <div className="Monitored-Separator">
          <div className="Monitored-card">
            <div className="Card-item">
              <IoShieldOutline
                size={80}
                color="#61dafb"
                className="CardWebSite-Icon"
              />
            </div>
            <h3 className="Card-Monitoring-Title">SSL monitoring</h3>
            <p className="Card-Website-Description">
              Don't lose visitors because of an expired SSL <br /> certificate.
              Get notified 30, 14 and 7 days before <br /> expiration.
            </p>
            <button className="Card-Website-Btn">SSL monitoring</button>
          </div>
        </div>
      </div>

      <div className="Monitored-Content-Bottom">
        <div className="Monitored-Cards">
          <div className="MonitoredCard-item">
            <MdDomainVerification
              size={80}
              color="#61dafb"
              className="CardWebSite-Icon"
            />
            <h3 className="MonitoredCards-Title">Cron job monitoring</h3>
            <p className="MonitoredCards-Description">
              Also known as heartbeat monitoring. Monitor <br /> recurring
              background jobs or intranet devices <br /> connected to the
              internet.
            </p>
            <button className="Card-Website-Btn">Domain monitoring</button>
          </div>
        </div>
        <div className="Monitored-All-Bottom">
          <div className="Monitored-Cards">
            <div className="MonitoredCard-item">
              <BsClockHistory
                size={80}
                color="#61dafb"
                className="CardWebSite-Icon"
              />
              <h3 className="MonitoredCards-Title">
                Domain expiration monitoring
              </h3>
              <p className="MonitoredCards-Description">
                Keep your online presence secure and avoid any <br /> potential
                damage by monitoring your domain's <br /> expiration date.
              </p>
              <button className="Card-Website-Btn">Domain monitoring</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitored;
