// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Card.css";
import { GrServerCluster } from "react-icons/gr";
import { TbTargetArrow } from "react-icons/tb";
import { GiSkeletonKey } from "react-icons/gi";

const Card = () => {
  return (
    <div className="Card">
      <div className="PortCards">
        <div className="PortCard-Icon">
          <GrServerCluster size={80} color="#61dafb" className="PortIcon" />
        </div>
        <h3 className="PortCard-Title">Port monitoring</h3>
        <p className="PortCard-Description">
          Is the email service still UP? <br /> How about the critical <br />
          database server? Let's check! <br /> Monitor any specific service{" "}
          <br />
          running on any port.
        </p>
        <button className="Portcard-Btn">Port monitoring</button>
      </div>

      <div className="PortCard-Ping">
        <div className="PortCards-Ping">
          <div className="PortCard-Icon">
            <TbTargetArrow size={80} color="#61dafb" className="PortIcon" />
          </div>
          <h3 className="PortCard-Title">Ping monitoring</h3>
          <p className="PortCard-Description">
            Leverage one of the most <br /> used tools administrators use <br />
            to check the availability of <br /> network devices.
          </p>
          <button className="Portcard-PingBtn">Ping monitoring</button>
        </div>
      </div>
      <div className="PortCard-keyword">
        <div className="PortCard-Key">
          <div className="PortCard-Icon">
            <GiSkeletonKey size={80} color="#61dafb" className="PortIcon" />
          </div>
          <h3 className="PortCard-Title">KeyWord monitoring</h3>
          <p className="PortCard-Description">
            Is the email service still UP? <br /> How about the critical <br />
            database server? Let's check! <br /> Monitor any specific service{" "}
            <br />
            running on any port.
          </p>
          <button className="Portcard-KeyWordBtn">Keyword monitoring</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
