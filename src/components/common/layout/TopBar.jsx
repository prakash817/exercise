import { siteConfig } from "../../../config/siteConfig";
import { telLink } from "../../../utils/links";
import CallIcon from "../icon/CallIcon";
import LimitedTimeOfferBadge from "../badge/LimitedTimeOfferBadge";
import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="topbar" id="home">
      <div className="container topbar-inner">
        <LimitedTimeOfferBadge />
        <div className="topbar-contact">
          <a href={telLink} className="topbar-link btn-with-icon">
            <CallIcon className="call-icon" size={14} />
            {siteConfig.phone}
          </a>
          <span className="email">✉️ {siteConfig.email}</span>
        </div>
      </div>
    </div>
  );
}
