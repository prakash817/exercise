"use client";

import { useEffect, useState } from "react";
import { usePlans } from "@/hooks/usePlans";
import BackButton from "@/components/common/button/BackButton";
import PlanCard from "@/components/common/plan/PlanCard";
import PlanModal from "@/components/common/plan/PlanModal";
import "./PlansGallery.css";

export default function PlansGallery({ planType }) {
  const { plans } = usePlans({ planType: planType || undefined });
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [planType]);

  return (
    <main className="plans-page">
      <div className="container">
        <div className="section-head">
          <div className="kicker">
            {!planType ? "All LIC Plans" : "Plan Type"}
          </div>
          <h2>
            {!planType
              ? "Complete Plan Gallery"
              : planType.toUpperCase() + " Plans"}
          </h2>
          <p>
            Browse every plan in one place. Select a plan to open full details,
            benefits, and contact options.
          </p>
          <BackButton />
          <p className="plans-page__count">Total Plans: {plans.length}</p>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} onSelect={setSelectedPlan} />
          ))}
        </div>
      </div>

      <PlanModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
    </main>
  );
}
