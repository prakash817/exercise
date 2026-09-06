import { Link } from "react-router-dom";
import PlanCard from "./PlanCard";

export const PlanCardContainer = ({ featuredPlans, setSelectedPlan }) => {
  return (
    <>
      <div className="plans-grid plans-grid--featured">
        {featuredPlans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} onSelect={setSelectedPlan} />
        ))}
      </div>

      <div className="plans-section__footer">
        <Link to="/plans" className="btn btn-primary">
          Show More Plans
        </Link>
      </div>
    </>
  );
};
