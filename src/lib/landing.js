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

export function getFeatureLandings(userId) {
  const advisorId = userId?.trim();
  const landings = advisorId
    ? seedFeatureLandings.filter((item) => item.userId === advisorId)
    : seedFeatureLandings;

  return landings
    .map(({ policyId, userId: landingUserId }) => {
      const policy = getPolicyById(policyId);
      if (!policy) return null;

      const advisor = getAdvisorById(landingUserId);
      return {
        policyId,
        userId: landingUserId,
        href: `/policy/${policyId}/${landingUserId}`,
        name: policy.name,
        versionLabel: policyId,
        advisorName: advisor?.name ?? "",
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

