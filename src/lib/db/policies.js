import { seedPolicies } from "@/lib/db/seed";
import { withPolicyStyles } from "@/lib/policy-theme";

const globalForDb = globalThis;

function initPoliciesDb() {
  const seed = structuredClone(seedPolicies).map(withPolicyStyles);
  const existing = globalForDb.policiesDb;

  if (!existing) {
    return seed;
  }

  const seedIds = new Set(seed.map((policy) => policy.id));
  const existingIds = new Set(existing.map((policy) => policy.id));
  const idsMatch =
    seedIds.size === existingIds.size &&
    [...seedIds].every((id) => existingIds.has(id));

  if (!idsMatch) {
    return seed;
  }

  return existing.map((policy) => {
    const seedPolicy = seed.find((item) => item.id === policy.id);
    return withPolicyStyles({
      ...policy,
      styles: policy.styles ?? seedPolicy?.styles,
    });
  });
}

export const policiesDb = initPoliciesDb();
if (process.env.NODE_ENV !== "production") {
    globalForDb.policiesDb = policiesDb;
}
export function getAllPolicies() {
    return policiesDb.map(withPolicyStyles);
}
export function getPolicyById(policyId) {
    const policy = policiesDb.find((item) => item.id === policyId);
    return policy ? withPolicyStyles(policy) : undefined;
}
export function createPolicy(data) {
    if (!data.id?.trim()) {
        return { error: "Policy id is required", status: 400 };
    }
    if (getPolicyById(data.id)) {
        return { error: "Policy with this id already exists", status: 409 };
    }
    const policy = withPolicyStyles(data);
    policiesDb.push(policy);
    return { policy };
}
export function replacePolicy(policyId, data) {
    const index = policiesDb.findIndex((policy) => policy.id === policyId);
    if (index === -1) {
        return { error: "Policy not found", status: 404 };
    }
    if (data.id !== policyId) {
        return { error: "Policy id in body must match URL", status: 400 };
    }
    const policy = withPolicyStyles(data);
    policiesDb[index] = policy;
    return { policy };
}
export function updatePolicy(policyId, data) {
    const index = policiesDb.findIndex((policy) => policy.id === policyId);
    if (index === -1) {
        return { error: "Policy not found", status: 404 };
    }
    if (data.id && data.id !== policyId) {
        return { error: "Policy id cannot be changed", status: 400 };
    }
    const updated = withPolicyStyles({
        ...policiesDb[index],
        ...data,
        id: policyId,
    });
    policiesDb[index] = updated;
    return { policy: updated };
}
export function deletePolicy(policyId) {
    const index = policiesDb.findIndex((policy) => policy.id === policyId);
    if (index === -1) {
        return { error: "Policy not found", status: 404 };
    }
    const [removed] = policiesDb.splice(index, 1);
    return { policy: withPolicyStyles(removed) };
}
