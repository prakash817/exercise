"use client";

import { useState } from "react";
import { genderOptions } from "../../../data/content";
import WhatsAppIcon from "../icon/WhatsAppIcon";
import { usePlans } from "@/hooks/usePlans";
import "./EnquireyForm.css";

export const EnquireForm = ({ formResult, handleSubmit }) => {
  const { plans } = usePlans();
  const [hasContactTime, setHasContactTime] = useState(false);

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" required placeholder="Full Name" />
      <input
        name="mobile"
        required
        inputMode="tel"
        placeholder="Mobile Number"
      />
      <select name="gender" defaultValue={genderOptions[0].id}>
        {genderOptions.map((gender) => (
          <option key={gender.id}>{gender.gender}</option>
        ))}
      </select>
      <input name="location" placeholder="City / Village" />

      <select
        name="plan_name"
        defaultValue={plans[0]?.plan_name}
        key={plans[0]?.id ?? "plans-loading"}
      >
        {plans.map((plan) => (
          <option key={plan.id}>{plan.plan_name}</option>
        ))}
      </select>
      <label
        className={`datetime-field${hasContactTime ? " has-value" : ""}`}
      >
        <span className="datetime-field__placeholder">
          Preferred contact time
        </span>
        <input
          name="preferred_contact_time"
          type="datetime-local"
          onChange={(event) => setHasContactTime(Boolean(event.target.value))}
        />
      </label>
      <textarea
        className="full"
        name="message"
        placeholder="Your requirement / message"
      />
      {formResult ? <div className="form-result">{formResult}</div> : null}
      <button className="btn btn-green full btn-with-icon" type="submit">
        <WhatsAppIcon className="whatsapp-icon" size={18} />
        Submit & Open WhatsApp →
      </button>
    </form>
  );
};
