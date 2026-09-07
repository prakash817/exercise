// import SocialLinks from "../links/SocialLinks";

// export const ContactSocialLinksCard = () => {
//   return (
//     <div className="contact-card">
//       <h3>Follow Us On</h3>
//       <p style={{ color: "#607083" }}>
//         Follow or message for policy and financial planning updates.
//       </p>
//       <SocialLinks includeWhatsApp />
//       <p style={{ fontSize: "12px", color: "#607083", marginTop: "20px" }}>
//         <span>
//           <b>Note:</b>
//         </span>{" "}
//         Please use the official links supplied by the website owner for social
//         media profiles.
//       </p>
//     </div>
//   );
// };

import SocialLinks from "../links/SocialLinks";
import "./ContactSocialLinksCard.css";

export const ContactSocialLinksCard = () => {
  return (
    <div className="contact-card">
      <div className="contact-card-content">
        <h3 className="contact-card-title">Follow Us On</h3>

        <p className="contact-card-description">
          Follow or message for policy and financial planning updates.
        </p>

        <SocialLinks includeWhatsApp />

        <p className="contact-card-note">
          <b>Note:</b> Please use the official links supplied by the website
          owner for social media profiles.
        </p>
      </div>
    </div>
  );
};
