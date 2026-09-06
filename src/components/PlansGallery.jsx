"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllPlans } from "@/helpers/helper";
import PlanCard from "@/components/PlanCard";
import PlanModal from "@/components/PlanModal";

export default function PlansGallery({ planType }) {
  const allPlans = getAllPlans(planType);
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
          <Link href="/" className="plans-page__back">
            ← Back to Home
          </Link>
          <p className="plans-page__count">Total Plans: {allPlans.length}</p>
        </div>

        <div className="plans-grid">
          {allPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} onSelect={setSelectedPlan} />
          ))}
        </div>
      </div>

      <PlanModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
    </main>
  );
}
