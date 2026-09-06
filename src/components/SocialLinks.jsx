// import { siteConfig } from '../config/siteConfig'
// import FacebookIcon from './FacebookIcon'
// import InstagramIcon from './InstagramIcon'
// import WhatsAppIcon from './WhatsAppIcon'
// import { whatsAppLink } from '../utils/links'

// export default function SocialLinks({ includeWhatsApp = false, className = '' }) {
//   return (
//     <div className={`social-links${className ? ` ${className}` : ''}`}>
//       <a
//         className="btn btn-primary btn-with-icon"
//         href={siteConfig.facebook}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FacebookIcon className="facebook-icon" size={18} />
//         Facebook
//       </a>
//       <a
//         className="btn btn-gold btn-with-icon"
//         href={siteConfig.instagram}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <InstagramIcon className="instagram-icon" size={18} />
//         Instagram
//       </a>
//       {includeWhatsApp ? (
//         <a
//           className="btn btn-green btn-with-icon"
//           href={whatsAppLink}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <WhatsAppIcon className="whatsapp-icon" size={18} />
//           WhatsApp
//         </a>
//       ) : null}
//     </div>
//   )
// }

import { siteConfig } from "../config/siteConfig";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import WhatsAppIcon from "./WhatsAppIcon";
import { whatsAppLink } from "../utils/links";

export default function SocialLinks({
  includeWhatsApp = false,
  className = "",
}) {
  return (
    <div className={`social-links ${className ? ` ${className}` : ""}`}>
      <a
        className="btn btn-primary btn-with-icon social-btn"
        href={siteConfig.facebook}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon className="facebook-icon" size={18} />
        Facebook
      </a>

      <a
        className="btn btn-gold btn-with-icon social-btn"
        href={siteConfig.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon className="instagram-icon" size={18} />
        Instagram
      </a>

      {includeWhatsApp && (
        <a
          className="btn btn-green btn-with-icon social-btn whatsapp-btn"
          href={whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className="whatsapp-icon" size={18} />
          WhatsApp
        </a>
      )}
    </div>
  );
}
