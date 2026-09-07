import { useEffect } from "react";
import { getPlanTitle } from "../../../helpers/helper";
import { siteConfig } from "../../../config/siteConfig";
import "./PlanModal.css";
import { telLink, whatsAppLink } from "../../../utils/links";

export default function PlanModal({ plan, onClose }) {
  useEffect(() => {
    if (!plan) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [plan, onClose]);

  if (!plan) {
    return null;
  }

  const title = getPlanTitle(plan);
  const whatsAppMessage = `Hello ${siteConfig.name}, I want to know more about: ${title}`;

  return (
    <div
      className="plan-modal open"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} plan details`}
      onClick={(event) => {
        if (event.target.classList.contains("plan-modal")) {
          onClose();
        }
      }}
    >
      <div className="plan-modal__dialog">
        <button
          type="button"
          className="plan-modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className="plan-modal__image-wrap">
          <img src={plan.url} alt={title} />
        </div>

        <div className="plan-modal__content">
          <div className="kicker">LIC Plan</div>
          <h2>{title}</h2>
          <div className="plan-modal__detail">{plan.image_detail}</div>

          <div className="plan-modal__actions">
            <a href={telLink} className="btn btn-primary">
              Call {siteConfig.phone}
            </a>
            <a
              href={`${whatsAppLink}?text=${encodeURIComponent(whatsAppMessage)}`}
              className="btn btn-green"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
