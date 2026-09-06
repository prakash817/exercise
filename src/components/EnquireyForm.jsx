import { featurePlans } from "../config/plans";
import { genderOptions } from "../data/content";
import WhatsAppIcon from "./WhatsAppIcon";

export const EnquireForm = ({ formResult, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" required placeholder="Full Name *" />
      <input
        name="mobile"
        required
        inputMode="tel"
        placeholder="Mobile Number *"
      />
      <select name="gender" defaultValue={genderOptions[0].id}>
        {genderOptions.map((gender) => (
          <option key={gender.id}>{gender.gender}</option>
        ))}
      </select>
      {/* <input name="district" placeholder="District" /> */}
      <input name="location" placeholder="City / Village" />
      {/* <input name="age" type="number" min="1" max="100" placeholder="Age" /> */}
      {/* <input name="qualification" placeholder="Qualification" /> */}

      <select name="plan_name" defaultValue={featurePlans[0].plan_name}>
        {featurePlans.map((plan) => (
          <option key={plan.id}>{plan.plan_name}</option>
        ))}
      </select>
      <input
        name="preferred_contact_time"
        placeholder="Preferred contact time"
        type="datetime-local"
      />
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
