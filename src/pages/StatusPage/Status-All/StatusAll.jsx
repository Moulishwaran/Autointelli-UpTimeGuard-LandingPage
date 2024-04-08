// eslint-disable-next-line no-unused-vars
import React from "react";
import "./stautsAll.css";
import { FaCheckCircle } from "react-icons/fa";

const StatusAll = () => {
  return (
    <div className="Status-Page-Need">
      <div className="Status-Paging">
        <h2 className="Status-Paging-Heading">
          Status page with
          <span className="Status-Paging-Heading-color"> all you need.</span>
        </h2>
      </div>
      <div className="Status-Paging-list">
        <div className="Status-Paging-list-Response1">
          <div>
            <FaCheckCircle
              className="Status-Paging-Icon"
              color="green"
              size={30}
            />
            <h3 className="Status-Paging-list-ResHeading">Response times</h3>
            <p className="Status-Paging-list-ResPara">
              Share response times so users can see <br /> that you strive to be
              as fast as possible.
            </p>
          </div>
        </div>
        <div className="Status-Paging-list-Response2">
          <div>
            <FaCheckCircle
              className="Status-Paging-Icon3"
              color="green"
              size={25}
            />
            <h3 className="Status-Paging-list-ResHeading">Custom Domain</h3>
            <p className="Status-Paging-list-ResPara2">
              Set up the status page on your own <br />
              <span className="">domain, like status.example.com.</span>
            </p>
          </div>
        </div>
        <div className="Status-Paging-list-Response3">
          <div className="Status-Paging-All">
            <FaCheckCircle
              className="Status-Paging-Icons"
              color="green"
              size={25}
            />
            <h3 className="Status-Paging-list-ResHeading3">
              Private status page
            </h3>
            <p className="Status-Paging-list-ResPara3">
              Hide your status page from search <br /> engine results and
              protect it with a <br />
              <span className="Status-Paging-Password"> password.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="Status-Paging-list2">
        <div className="Status-Paging-Announce">
          <div className="Status-Paging-Announce-content">
            <FaCheckCircle color="green" size={28} />
            <h3 className="Status-Paging-Announce-title">Announcements</h3>
            <p className="Status-Paging-Announce-Paragraph">
              Share updates and details about <br /> resolved incidents and
              planned <br />
              <span className="Status-Paging-Maintain">
                maintenance on your status page.
              </span>
            </p>
          </div>
        </div>
        <div className="Status-Paging-Analytics">
          <div className="Status-Paging-Analytics-Content">
            <FaCheckCircle
              color="green"
              size={28}
              className="Status-Paging-Analytics-Icon"
            />
            <h3 className="Status-Paging-Analytics-Title">
              Status page Analytics
            </h3>
            <p className="Status-Paging-Analytics-Para">
              Add your Google Analytics code if you <br /> have set up a custom
              domain to track <br />
              <span className="Status-Paging-Analytics-Para2">
                the traffic to your status page.
              </span>
            </p>
          </div>
        </div>
        <div className="Status-Paging-Decide">
          <div className="Status-Paging-Decide-Content">
            <FaCheckCircle color="green" size={28} className="DecidedIcon" />
            <h3 className="Status-Paging-Decide-Content-Heading">
              Decide what to share
            </h3>
            <p className="Status-Paging-Decide-Content-Para">
              Show or hide details like bar charts, <br />
              uptime percentage, monitored URLs
              <br />
              <span className="Status-Paging-Decide-Content-Para3">
                hide paused monitors.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="Free-Trial-Button">
        <button className="Free-Button">Get a FREE status page</button>
      </div>
    </div>
  );
};

export default StatusAll;
