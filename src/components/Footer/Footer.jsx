// eslint-disable-next-line no-unused-vars
import React from "react";
import "./footer.css";
import LogoImage from "../../assets/favicon.ico";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiDiscordLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterLeft">
        <img className="FooterCompanyLogo" src={LogoImage} alt="" />
        <h2 className="Footer-Company-Title">Uptime Guard</h2>
        <p className="Footer-Company-Notified">
          Downtime happens. Get notified!
        </p>
        <p className="Footer-Company-Address">
          Join more than 2,100,000 happy users! <br /> UptimeRobot is one of the
          most popular <br /> website monitoring services in the world.
        </p>

        <div className="Footer-Social-icon">
          <IoLogoFacebook className="Footer-FacebookIcon" />
          <FaTwitter className="Footer-TwitterIcon" />
          <FaLinkedin className="Footer-LinkedinIcon" />
          <PiDiscordLogo className="Footer-DiscordIcon" />
        </div>
      </div>
      <div className="FooterRight">
        <div className="Footer-Monitoring">
          <h1 className="Footer-Monitoring-Heading"> Monitoring</h1>
          <ul className="Footer-Monitoring-List">
            <li>Website monioring</li>
            <li>SSL monitoring</li>
            <li>Domain monitoring</li>
            <li>Ping monitoring</li>
            <li>Port monitoring</li>
            <li>Cron job monitoring</li>
            <li>Keyword monitoring</li>
          </ul>
        </div>

        <div className="Footer-Company">
          <h1 className="Footer-company-Heading">Company</h1>
          <ul className="Footer-company-List">
            <li>Pricing</li>
            <li>Blog</li>
            <li>Affiliate program</li>
            <li>Terms / Privacy</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="Footer-Resources">
          <h1 className="Footer-Resources-Heading">Resources</h1>
          <ul className="Footer-Resources-List">
            <li>Integration</li>
            <li>API</li>
            <li>FAQs</li>
            <li>Help center</li>
            <li>Locations & IPs</li>
            <li>Comparisons</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
