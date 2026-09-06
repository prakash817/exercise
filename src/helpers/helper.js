import { corePlans, featurePlans } from "../config/plans";

const FEATURED_PLAN_IDS = [4, 14, 17, 21, 25, 12, 13, 9];
const CORE_PLAN_IDS = [18, 17, 19, 20];

export function getPlanTitle(plan) {
  const detail = plan.image_detail.trim();
  const separators = [" — ", " - ", " – ", ". "];

  for (const separator of separators) {
    const index = detail.indexOf(separator);
    if (index > 3 && index <= 80) {
      return detail.slice(0, index).trim();
    }
  }

  return `LIC Plan ${plan.id}`;
}

export function getPlanSummary(plan, maxLength = 110) {
  const detail = plan.image_detail.trim();
  const title = getPlanTitle(plan);
  let summary = detail;

  if (detail.startsWith(title)) {
    summary = detail
      .slice(title.length)
      .replace(/^[.\s—\-–]+/, "")
      .trim();
  }

  if (summary.length <= maxLength) {
    return summary;
  }

  return `${summary.slice(0, maxLength).trim()}...`;
}

export function getFeaturedPlans({ plan_type }) {
  if (plan_type === "core") {
    return CORE_PLAN_IDS.map((id) =>
      corePlans.find((plan) => plan.id === id),
    ).filter(Boolean);
  } else if (plan_type === "conceptual") {
    return FEATURED_PLAN_IDS.map((id) =>
      featurePlans.find((plan) => plan.id === id),
    ).filter(Boolean);
  }
}

export function getAllPlans(planType) {
  if (planType) {
    return featurePlans.filter((plan) => plan.plan_type === planType);
  }
  return featurePlans;
}

export function getPlanById(id) {
  return featurePlans.find((plan) => plan.id === Number(id));
}
