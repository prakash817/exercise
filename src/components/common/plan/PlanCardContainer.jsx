import Link from "next/link";
import PlanCard from "./PlanCard";
import "./PlanCardContainer.css";

export const PlanCardContainer = ({ featuredPlans, setSelectedPlan }) => {
  return (
    <>
      <div className="plans-grid plans-grid--featured">
        {featuredPlans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} onSelect={setSelectedPlan} />
        ))}
      </div>

      <div className="plans-section__footer">
        <Link href="/plans" className="btn btn-primary">
          Show More Plans
        </Link>
      </div>
    </>
  );
};
