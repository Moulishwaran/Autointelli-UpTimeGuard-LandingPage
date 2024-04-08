// eslint-disable-next-line no-unused-vars
import React from "react";
import "./statusPage.css";
import Navbar from "../../components/navbar/Navbar";
import CompanyStatusPage from "./CompanyStatus/CompanyStatusPage";
import Product from "../../assets/product-2.svg";
import Benefits from "./BenefitsStatus/Benefits";
import KeepEveryOne from "../StatusPage/KeepEveryOne/KeppEveryOne";
import StatusAll from "./Status-All/StatusAll";
import AdditionFeatures from "./AdditionalFeatures/AdditionalFeatures";
import CreateStatus from "./CreateStatus/CreateStatus";
import Footer from "../../components/Footer/Footer";

const StatusPage = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="Status-Page-background">
          <div className="StatusPage">
            <h1 className="Status-Title">
              Showcase reliability with <br /> a hosted
              <span className="Status-Page-Color"> status page.</span>
            </h1>
            <p className="Status-Share-Incidents">
              Share incidents and maintenance with your users <br /> through
              hosted status pages and decent e-mails.
            </p>
            <div className="Status-Btn">
              <button className="Status-Share-Button">
                Get a Free status page
              </button>
              <p className="Status-Share-Btn-Live-demo">Chech LIVE demo</p>
            </div>
          </div>
        </div>
        <div className="Status-Page-Image">
          <div>
            <img className="Status-Circle-Image" src={Product} alt="" />
          </div>
        </div>
        <CompanyStatusPage />
        <Benefits />
        <KeepEveryOne />
        <StatusAll />
        <AdditionFeatures />
        <CreateStatus />
      </div>
      <div className="Footer-Background-Status">
        <Footer />
      </div>
    </>
  );
};

export default StatusPage;
