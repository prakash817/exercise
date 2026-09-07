import { siteConfig } from "../../../config/siteConfig";
import myPhoto from "../../../assets/myPhoto2.png";
import "./IntroImageCard.css";

export const IntroImageCard = () => {
  return (
    <div className="profile-card">
      {/* <img
            src="https://images.weserv.nl/?url=http://mobiapi.dataupload.in/profile_pic/43529.jpg"
            style={{
              width: "170px",
              height: "170px",
              borderRadius: "50%",
              border: "5px solid #fff",
              boxShadow: "0px 2px 2px 2px #c3c3c3",
            }}
            alt={`${siteConfig.name} LIC Insurance Advisor`}
            loading="eager"
          /> */}
      <img
        src={typeof myPhoto === "string" ? myPhoto : myPhoto.src}
        alt={`${siteConfig.name} LIC Insurance Advisor`}
        loading="eager"
      />
      <div className="profile-info">
        <div>
          <strong>{siteConfig.name}</strong>
          <small>{siteConfig.designation}</small>
        </div>
        {/* <SectionLink section="lead" className="btn btn-gold">
              Enquire
            </SectionLink> */}
      </div>
    </div>
  );
};
