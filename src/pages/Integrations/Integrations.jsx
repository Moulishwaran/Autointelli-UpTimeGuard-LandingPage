// eslint-disable-next-line no-unused-vars
import React from "react";
import "./integration.css";
import Navbar from "../../components/navbar/Navbar";
import PersonalNotify from "../PersonalNotification/PersonalNotify";
import Footer from "../../components/Footer/Footer";

const Integrations = () => {
  return (
    <div className="Integration">
      <Navbar />
      <div className="Integration-DownTime">
        <h1 className="Integration-Heading">
          Downtime happens <span className="Integration-Dot">.</span> <br />
          <span className="Integration-Get-Notified"> Get notified!</span>
        </h1>
        <p className="Integration-Description">
          Everyone knows it happens. But it’s important to realize before
          customers do.
        </p>
      </div>
      <PersonalNotify />
      <div className="Footer-Integration">
        <Footer />
      </div>
    </div>
  );
};

export default Integrations;
