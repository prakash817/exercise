import { useState } from "react";
import PlanModal from "../PlanModal";
import { PlanCardContainer } from "../PlanCardContainer";
import { getFeaturedPlans } from "../../helpers/helper";

const PlansSectionHead = ({ category }) => {
  return (
    <div className="section-head">
      <div className="kicker">{category}</div>
      <h2>Top Plans for Your Financial Goals</h2>
      <p>
        Explore our most recommended LIC plans for savings, pension, education,
        and family protection. Click any plan to view full details.
      </p>
    </div>
  );
};

export default function PlansSection({ planType, category }) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const plans = getFeaturedPlans({ plan_type: planType });

  return (
    <section id="plans" className="plans-section">
      <div className="container">
        <PlansSectionHead category={category} />
        <PlanCardContainer
          featuredPlans={plans}
          setSelectedPlan={setSelectedPlan}
        />
      </div>

      <PlanModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
    </section>
  );
}
