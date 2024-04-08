// eslint-disable-next-line no-unused-vars
import React from "react";
import "./benefits.css";
import { CiHeadphones } from "react-icons/ci";
import { FaHandHoldingHeart } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";

const Benefits = () => {
  return (
    <div className="Benefits">
      <div className="Benefits-All">
        <h1 className="Benefits-Title">
          <span className="Benefits-Title-Color">Benefits</span> of using a
          status page.
        </h1>
      </div>

      <div className="Benifits-Card-main">
        <div className="Benifits-Card">
          <CiHeadphones className="Benefits-headphone-Icon" size={100} />
          <h3 className="Benefits-card-title">
            Fewer support <br />
            tickets
          </h3>
          <p className="Benefits-card-text">
            Increase response speed <br />
            during incidents and protect <br /> your team from overload – <br />
            focusing on what's important
          </p>
        </div>
        <div className="Benifits-Card">
          <FaHandHoldingHeart className="Benefits-heart-Icon" size={100} />
          <h3 className="Benefits-card-title">
            Improved user trust <br /> and relationships
          </h3>
          <p className="Benefits-card-text">
            Strengthen your relationships <br /> with users by demonstrating
            <br />
            your commitment to actively <br /> addressing incidents.
          </p>
        </div>
        <div className="Benifits-Card">
          <RiMessage2Fill className="Benefits-message-Icon" size={100} />
          <h3 className="Benefits-card-title">
            Avoid bad reviews <br /> on social media
          </h3>
          <p className="Benefits-card-text">
            Things happen – inform all <br /> users before they inform <br />
            everyone else on different <br /> platforms and review portals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
