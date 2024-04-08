// eslint-disable-next-line no-unused-vars
import React from "react";
import "./keepEveryOne.css";
import CustomizeImage from "../../../assets/status-page-custom-logo.svg";

const KeppEveryOne = () => {
  return (
    <div className="KeppEveryOne">
      <div className="KeepEveryOne-All">
        <h2 className="KeepEveryOne-Heading">
          Keep everyone <span className="KeepEveryOne-heading">informed.</span>
        </h2>
      </div>
      <div className="KeppEveryOne-Customize">
        <h2 className="KeppEveryOne-Customize-Heading">
          <span className="KeppEveryOne-color">Customize</span> your <br />
          status page with <br />
          <span className="KeppEveryOne-branding">branding .</span>
        </h2>
        <p className="KeepEveryOne-Paragraph">
          <span className="KeepEveryOne-recognition1">
            Maintain customer trust and enhance
          </span>
          <br />
          <span className="KeepEveryOne-recognition">
            recognition during incidents with
          </span>
          <br /> complete control over your status page's <br />
          layout, themes, logos, colors, and fonts.
        </p>

        <img
          className="KeepEveryOne-recognition-Image"
          src={CustomizeImage}
          alt=""
        />
      </div>
      <div className="KeepEveryOne-Notify">
        <div className="KeepEveryOne-Circle">
          <img className="Customize-Image" src={CustomizeImage} alt="" />
        </div>
      </div>
      <div className="Customize-All">
        <h1 className="Customize-Text">
          <span className="Customize-Text-Color">Notify </span> your users
          <br /> about maintenance <br /> and incidents.
        </h1>
        <p className="KeepEveryOne-Notify-para">
          Enhance the credibility of your service. <br />
          <span className="KeepEveryOne-Decent">
            Decent e-mail notifications from your
          </span>
          <br />
          <span className="KeepEveryOne-Status">
            status page are an excellent way to
          </span>
          <br />
          <span className="KeepEveryOne-Delivery">
            deliver important details to your
          </span>
          <br />
          <span className="KeepEveryOne-Customers">
            customers. They’ll be prepared, and
          </span>
          <br />
          <span className="KeepEveryOne-more">more likely to stay tuned.</span>
        </p>
      </div>
    </div>
  );
};

export default KeppEveryOne;
