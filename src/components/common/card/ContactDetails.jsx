import { siteConfig } from "../../../config/siteConfig";
import CallIcon from "../icon/CallIcon";
import WhatsAppIcon from "../icon/WhatsAppIcon";
import "./ContactDetails.css";

export const ContactDetails = () => {
  return (
    <div className="contact-card">
      <div className="contact-line">
        <span
          className="contact-line__icon contact-line__icon--call"
          aria-hidden="true"
        >
          <CallIcon size={22} />
        </span>
        <div>
          <b>Mobile</b>
          <span>{siteConfig.phone}</span>
        </div>
      </div>
      <div className="contact-line">
        <span
          className="contact-line__icon contact-line__icon--whatsapp"
          aria-hidden="true"
        >
          <WhatsAppIcon size={22} />
        </span>
        <div>
          <b>WhatsApp</b>
          <span> Policy Enquiries Welcome</span>
        </div>
      </div>
      <div className="contact-line">
        📍
        <div>
          <b>Service Area</b>
          <span>{siteConfig.serviceAreas}</span>
        </div>
      </div>
      <div className="contact-line">
        👤
        <div>
          <b>Professional</b>
          <span>
            {siteConfig.name} — {siteConfig.designation}
          </span>
        </div>
      </div>
    </div>
  );
};
