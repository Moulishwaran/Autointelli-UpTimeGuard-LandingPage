// eslint-disable-next-line no-unused-vars
import React from "react";
import "./thirdparty.css";
import { FaSlack } from "react-icons/fa6";
import { FaStarOfLife } from "react-icons/fa";
import { SiPagerduty } from "react-icons/si";
import { SiSplunk } from "react-icons/si";
import { FaTelegram } from "react-icons/fa6";
import { PiWebhooksLogoLight } from "react-icons/pi";
import { PiDiscordLogo } from "react-icons/pi";
import { GiBulletBill } from "react-icons/gi";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { SiGooglechat } from "react-icons/si";
import { TbBrandPushover } from "react-icons/tb";
import { FaQuestion } from "react-icons/fa6";

const ThirdParty = () => {
  return (
    <div className="Thirdparty">
      <div className="ThirdParty-Party-background">
        <div className="Third-Slack">
          <FaSlack size={60} color="#36C5F0" className="slackIcon" />
          <h5 className="Slack-Text">Slack</h5>
        </div>

        <div className="Third-Slack">
          <FaStarOfLife size={60} color="orangeRed" className="ZapierIcon" />
          <h5 className="Zapier-Text">Zapier</h5>
        </div>

        <div className="Third-Slack">
          <SiPagerduty size={60} color="green" className="pagerIcon" />
          <h5 className="PagerDuty-Text">PagerDuty</h5>
        </div>
        <div className="Third-Slack">
          <SiSplunk size={130} color="green" className="Splunk-Icon" />
          <h5 className="Splunk-Text">Splunk On-call</h5>
        </div>
      </div>
      <div className="Third-Party-Background2">
        <div className="Third-Slack2">
          <FaTelegram size={60} color="#229ED9" className="Telegram-Icons" />
          <h5 className="Telegram-Text">Telegram</h5>
        </div>
        <div className="Third-Slack2">
          <PiWebhooksLogoLight
            size={60}
            color="#e21d60"
            className="WebHooks-Icons"
          />
          <h5 className="WebHook_text">Webhooks</h5>
        </div>
        <div className="Third-Slack2">
          <PiDiscordLogo size={60} color="#7289d9" className="Discord-Icons" />
          <h5 className="Discord-Text">Discord</h5>
        </div>
        <div className="Third-Slack2">
          <GiBulletBill size={60} color="Green" className="Pushbullet-Icons" />
          <h5 className="PushBullet-Text">Pushbullet</h5>
        </div>
      </div>

      <div className="Third-Party-Background3">
        <div className="Third-Slack3">
          <BiLogoMicrosoftTeams
            color="#464EB8 "
            size={60}
            className="Microsoft-Icon"
          />
          <h5 className="MicorSoft-Text">Microsoft Teams</h5>
        </div>
        <div className="Third-Slack3">
          <SiGooglechat color="green" size={60} className="Google-Icons" />
          <h5 className="Google-Text">Google chat</h5>
        </div>
        <div className="Third-Slack3">
          <TbBrandPushover color="#464EB8 " size={60} className="PusherIcon" />
          <h5 className="Pusher-Text">Pushover</h5>
        </div>
        <div className="Third-Slack3">
          <FaQuestion color="gray" size={60} className="QueationIcon" />
          <h5 className="question-Text">Need more?</h5>
        </div>
      </div>
    </div>
  );
};

export default ThirdParty;
