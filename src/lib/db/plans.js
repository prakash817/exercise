import { corePlans, featurePlans } from "@/config/plans";

const FEATURED_PLAN_IDS = [4, 14, 17, 21, 25, 12, 13, 9];
const CORE_PLAN_IDS = [18, 17, 19, 20];

const globalForDb = globalThis;

function initPlansDb() {
  if (globalForDb.plansDb) {
    return globalForDb.plansDb;
  }

  return {
    feature: structuredClone(featurePlans),
    core: structuredClone(corePlans),
  };
}

export const plansDb = initPlansDb();

if (process.env.NODE_ENV !== "production") {
  globalForDb.plansDb = plansDb;
}

function collectionList(collection) {
  if (collection === "core") return plansDb.core;
  return plansDb.feature;
}

export function listPlans({
  collection = "feature",
  plan_type,
  featured,
} = {}) {
  if (featured === "core") {
    return CORE_PLAN_IDS.map((id) =>
      plansDb.core.find((plan) => plan.id === id),
    ).filter(Boolean);
  }

  if (featured === "conceptual") {
    return FEATURED_PLAN_IDS.map((id) =>
      plansDb.feature.find((plan) => plan.id === id),
    ).filter(Boolean);
  }

  const plans = collectionList(collection);
  if (plan_type) {
    return plans.filter((plan) => plan.plan_type === plan_type);
  }
  return plans;
}

export function getPlanById(planId) {
  const id = Number(planId);
  return (
    plansDb.feature.find((plan) => plan.id === id) ??
    plansDb.core.find((plan) => plan.id === id)
  );
}

export function createPlan(data, collection = "feature") {
  if (data.id == null) {
    return { error: "Plan id is required", status: 400 };
  }

  const list = collectionList(collection);
  if (list.some((plan) => plan.id === Number(data.id))) {
    return { error: "Plan with this id already exists", status: 409 };
  }

  const plan = { ...data, id: Number(data.id) };
  list.push(plan);
  return { plan };
}

export function replacePlan(planId, data, collection = "feature") {
  const list = collectionList(collection);
  const id = Number(planId);
  const index = list.findIndex((plan) => plan.id === id);
  if (index === -1) {
    return { error: "Plan not found", status: 404 };
  }
  if (data.id != null && Number(data.id) !== id) {
    return { error: "Plan id in body must match URL", status: 400 };
  }
  const plan = { ...data, id };
  list[index] = plan;
  return { plan };
}

export function updatePlan(planId, data, collection = "feature") {
  const list = collectionList(collection);
  const id = Number(planId);
  const index = list.findIndex((plan) => plan.id === id);
  if (index === -1) {
    return { error: "Plan not found", status: 404 };
  }
  if (data.id != null && Number(data.id) !== id) {
    return { error: "Plan id cannot be changed", status: 400 };
  }
  const updated = { ...list[index], ...data, id };
  list[index] = updated;
  return { plan: updated };
}

export function deletePlan(planId, collection = "feature") {
  const list = collectionList(collection);
  const id = Number(planId);
  const index = list.findIndex((plan) => plan.id === id);
  if (index === -1) {
    return { error: "Plan not found", status: 404 };
  }
  const [removed] = list.splice(index, 1);
  return { plan: removed };
}
