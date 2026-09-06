import { siteConfig } from "../config/siteConfig";

export const telLink = `tel:${siteConfig.phone}`;
export const whatsAppLink = `https://wa.me/${siteConfig.whatsapp}`;

export function buildWhatsAppEnquiryMessage(formData) {
  const message = `Life Insurance Planning Enquiry - ${siteConfig.websiteName}

Name: ${formData.get("name")}
Gender: ${formData.get("gender")}
Mobile: ${formData.get("mobile")}
Plan Name: ${formData.get("plan_name")}
City/Village: ${formData.get("location") || "Not provided"}
Preferred Contact Time: ${formData.get("preferred_contact_time") || "Not provided"}
Message: ${formData.get("message") || "No additional message"}
`;
  return message;
}

export function openWhatsApp(message) {
  const url = `${whatsAppLink}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
