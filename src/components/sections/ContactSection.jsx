import { siteConfig } from "../../config/siteConfig";
import { ContactSocialLinksCard } from "../ContactSocialLinksCard";
import { ContactDetails } from "../ContactDetails";

export default function ContactSection() {
  return (
    <section id="contact" style={{ background: "#f2f9fc" }}>
      <div className="container">
        <div className="section-head">
          <div className="kicker">Get In Touch</div>
          <h2>Contact {siteConfig.name}</h2>
          <p>
            LIC Life Insurance, Retirement Planning, Claim Settlement, Financial
            Planning enquiry के लिए संपर्क करें.
          </p>
        </div>
        <div className="contact">
          <ContactDetails />
          <ContactSocialLinksCard />
        </div>
      </div>
    </section>
  );
}
