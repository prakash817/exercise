import { getAdvisorById, getAllAdvisors } from "@/lib/db/advisors";
import { getAllPolicies, getPolicyById } from "@/lib/db/policies";
import { seedFeatureLandings } from "@/lib/db/seed/feature-landings";

export function getPolicy(policyId) {
  return getPolicyById(policyId);
}

export function getAdvisor(userId) {
  return getAdvisorById(userId);
}

export function getAllPolicyIds() {
  return getAllPolicies().map((policy) => policy.id);
}

export function getAllAdvisorIds() {
  return getAllAdvisors().map((advisor) => advisor.id);
}

export function getFeatureLandings() {
  return seedFeatureLandings
    .map(({ policyId, userId }) => {
      const policy = getPolicyById(policyId);
      const advisor = getAdvisorById(userId);
      if (!policy || !advisor) return null;
      return {
        policyId,
        userId,
        href: `/policy/${policyId}/${userId}`,
        name: policy.name,
        versionLabel: policyId,
        advisorName: advisor.name,
      };
    })
    .filter(Boolean);
}

export function getPolicyStaticParams() {
  return seedFeatureLandings.map(({ policyId, userId }) => ({
    policyId,
    userId,
  }));
}

