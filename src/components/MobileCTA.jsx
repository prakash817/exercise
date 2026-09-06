import { telLink, whatsAppLink } from "../utils/links";
import CallIcon from "./CallIcon";
// import SectionLink from "./SectionLink";
import WhatsAppIcon from "./WhatsAppIcon";

export default function MobileCTA() {
  return (
    <div className="mobile-cta">
      <a className="btn btn-primary btn-with-icon" href={telLink}>
        <CallIcon className="call-icon" size={16} />
        Call
      </a>
      <a
        className="btn btn-green btn-with-icon"
        href={whatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon className="whatsapp-icon" size={16} />
        WhatsApp
      </a>
      {/* <SectionLink section="lead" className="btn btn-gold">
        📝 Apply
      </SectionLink> */}
    </div>
  );
}
