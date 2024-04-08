// eslint-disable-next-line no-unused-vars
import React from "react";
import "./createStatus.css";
import CompanyStatusPage from "../CompanyStatus/CompanyStatusPage";
import Footer from "../../../components/Footer/Footer";

const CreateStatus = () => {
  return (
    <div className="status">
      <div className="Status-All">
        <h2 className="Status-title">
          Create your <span className="Status-title-color">first status </span>
          page now!
        </h2>
        <p className="Status-Para">
          Configure your FREE status page in just a few clicks. Start
          collaborating with your team or <br /> keeping your users informed
          with a hosted status page including up to 50 monitors.
        </p>
        <button className="status-Button">Sign up for FREE status page</button>
        <p className="Status-Credit-Card">No credit card required!</p>
      </div>
      <div className="Status-Or">
        <CompanyStatusPage />
      </div>
      <div></div>
    </div>
  );
};

export default CreateStatus;
