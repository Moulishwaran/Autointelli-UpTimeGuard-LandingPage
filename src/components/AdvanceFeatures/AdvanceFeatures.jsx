// eslint-disable-next-line no-unused-vars
import React from "react";
import "./advance.css";

const AdvanceFeatures = () => {
  return (
    <div>
      <div className="Advance-Features">
        <div className="Feature-Item">
          <button className="Feature-Item-Btn">
            Start Monitoring in 30 seconds
          </button>

          <h2 className="Feature-Item-Heading">
            <span className="Featured-Advance"> Advanced features</span> for
            advanced users <span className="Featured-Dot"> .</span>
          </h2>
        </div>
        <div className="Advance-Featured-Details">
          <div className="Advance-Detail-Item">
            <div className="Advance-incedent">
              <h3 className="Advance-incedent-Heading">
                Share incident updates
              </h3>
              <p className="Advance-incedent-Text">
                Send status updates via email to your <br /> Status page
                subscribers.
              </p>
            </div>

            <div className="Advance-window">
              <div className="Advance-Maintain">
                <h3 className="Advance-window-Heading">Maintenance windows</h3>
                <p className="Advance-window-Text">
                  Set up maintenance windows to prevent <br /> alarms during
                  planned maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Advance-WhiteLabel">
          <div className="Advance-White-Detail">
            <div className="Advance-white">
              <h3 className="Advance-whiteLabel-Heading">
                White-labeled Status pages
              </h3>
              <p className="Advance-whiteLabel-Text">
                Customize colors, add your logo or even <br /> link your custom
                domain.
              </p>
            </div>
            <div className="Advance-Custom">
              <div className="Advance-custom-Detail">
                <h3 className="Advance-Custon-Heading">Custom HTTP requests</h3>
                <p className="Advance-Custom-Text">
                  Need to set an advanced HTTP header? <br /> We've got you
                  covered!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Advance-Response">
          <div className="Advance-response-Detail">
            <div className="Advance-Response-Time">
              <h3 className="Advance_response-Heading">
                Response time monitoring
              </h3>
              <p className="Advance-Response-Text">
                See your response times in a chart to <br /> reveal performance
                hiccups.
              </p>
            </div>
          </div>
          <div className="Advance-Location">
            <div className="Advance-Location-Detail">
              <h3 className="Advance-Location-Heading">
                Multi-location checks
              </h3>
              <p className="Advance-Location-Text">
                We verify incidents from multiple <br /> locations to prevent
                false-positives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceFeatures;
