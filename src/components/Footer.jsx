import { siteConfig } from "../config/siteConfig";
import { getBrandInitials } from "../hooks/useSiteMeta";
// import CallIcon from "./CallIcon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="foot">
          <div>
            <h3>{siteConfig.websiteName}</h3>
            <p>
              LIC Life Insurance • Retirement Planning • Claim Settlement •
              Financial Planning
              <br />
              Serving families in {siteConfig.serviceAreas} with trusted
              insurance guidance from {siteConfig.fullName}.
            </p>
          </div>
          {/* <div>
            <b>Quick Contact</b>
            <p className="footer-contact">
              <span className="footer-contact__line btn-with-icon">
                <CallIcon className="call-icon" size={14} />
                {siteConfig.phone}
              </span>
              <span className="footer-contact__line">
                ✉️ {siteConfig.email}
              </span>
            </p>
            <SocialLinks className="social-links--footer" />
          </div> */}
          <div>
            <span className="brandmark-footer">{getBrandInitials()}</span>
          </div>
        </div>
        <div className="disclaimer">
          <b>Disclaimer:</b> This is an independent personal insurance and
          financial advisory website of {siteConfig.fullName}. It is not the
          official corporate website of LIC of India. Insurance plans, premiums,
          benefits, bonuses, claim settlement, and other terms are subject to
          applicable LIC/regulatory rules, product conditions, and policies. No
          policy benefit, return, or income is guaranteed through this website.
        </div>
        <div style={{ fontSize: "11px", marginTop: "15px" }}>
          © {year} {siteConfig.websiteName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
