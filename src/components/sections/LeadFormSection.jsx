import { useState } from "react";

import { buildWhatsAppEnquiryMessage, openWhatsApp } from "../../utils/links";

import { EnquireForm } from "../common/form/EnquireyForm";
import { EnquiryFormTextInfo } from "../common/form/EnquiryFormTextInfo";

export default function LeadFormSection() {
  const [formResult, setFormResult] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = buildWhatsAppEnquiryMessage(formData);
    setFormResult("Opening WhatsApp with your enquiry…");
    openWhatsApp(message);
  };

  return (
    <section id="lead">
      <div className="container">
        <div className="lead">
          <EnquiryFormTextInfo />
          <EnquireForm formResult={formResult} handleSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
}
