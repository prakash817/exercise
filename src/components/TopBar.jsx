import { siteConfig } from "../config/siteConfig";
import { telLink } from "../utils/links";
import CallIcon from "./CallIcon";
import LimitedTimeOfferBadge from "./LimitedTimeOfferBadge";

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
