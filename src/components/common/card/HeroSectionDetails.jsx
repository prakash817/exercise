import { siteConfig } from "../../../config/siteConfig";
import { telLink, whatsAppLink } from "../../../utils/links";
import CallIcon from "../icon/CallIcon";
import "./HeroSectionDetails.css";
import FreeConsultationBadge from "../badge/FreeConsultationBadge";
import PolicyMarquee from "../marquee/PolicyMarquee";
import WhatsAppIcon from "../icon/WhatsAppIcon";

export const HeroSectionDetails = () => {
  return (
    <div>
      <span className="eyebrow">📍 {siteConfig.serviceAreas}</span>
      <h1>
        LIC Advisor, <span>Retirement Planning & Claim Settlement </span>
        Expert{" "}
      </h1>
      <p>
        Your trusted LIC Insurance Advisor for smart policy planning, secure
        retirement solutions, and smooth claim settlement — personalised
        guidance from <b>{siteConfig.name}</b> to protect your family&apos;s
        future.
      </p>
      <div className="hero-actions">
        <a
          className="btn btn-green hero-wa-btn btn-with-icon"
          href={whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hero-wa-btn__label">
            <WhatsAppIcon className="whatsapp-icon" size={20} />
            WhatsApp for Policy Planning
          </span>
          <FreeConsultationBadge className="free-consultation-badge--compact" />
        </a>
        <a className="btn btn-primary btn-with-icon" href={telLink}>
          <CallIcon className="call-icon" size={18} />
          Call {siteConfig.name}
        </a>
      </div>
      <PolicyMarquee visibleHeading={false} />
    </div>
  );
};
