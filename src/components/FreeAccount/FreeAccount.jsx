// eslint-disable-next-line no-unused-vars
import React from "react";
import "./freeaccount.css";
import AppStore from "../../assets/appstore-badge.svg";
import GoogleStore from "../../assets/google-playstore-badge.svg";

const FreeAccount = () => {
  return (
    <div>
      <div className="Free-Account">
        <div className="Free-Account-Para">
          <h2 className="Free-heading">
            Get your <span className="Free-Now"> FREE account </span>now,
            <br /> 50 monitors included!
          </h2>
          <button className="Free-Account-Button">
            Start monitoring in 30 seconds
          </button>
          <p className="Free-Account-CreditCard">No credit card required!</p>
          <div className="Available-On">
            <p className="AvailableStore">Available also on:</p>
            <img className="GoogleStoreImage" src={GoogleStore} alt="" />
            <img className="AppleStoreImage" src={AppStore} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeAccount;
