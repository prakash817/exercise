import { featurePage } from "../config/siteConfig";

export function parsePolicyVersion(policySlug) {
  const match = policySlug.match(/^(.*)-v(\d+)$/);

  if (match) {
    return {
      family: match[1],
      version: `v${match[2]}`,
      label: `Version ${match[2]}`,
    };
  }

  return {
    family: policySlug,
    version: "default",
    label: "Default version",
  };
}

export function getPolicyRoute(item) {
  const pathname = new URL(item.featurePageUrl).pathname;
  const [, policy, code] = pathname.split("/").filter(Boolean);
  return { policy, code };
}

export function getPolicyHref(item) {
  const { policy, code } = getPolicyRoute(item);
  return `/policy/${policy}/${code}`;
}

export function findPolicyPage(policy, code) {
  return (
    featurePage.find((item) => {
      const route = getPolicyRoute(item);
      return route.policy === policy && route.code === code;
    }) ?? null
  );
}

export function getPolicyStaticParams() {
  return featurePage.map((item) => getPolicyRoute(item));
}

export function formatPolicyName(policySlug) {
  return parsePolicyVersion(policySlug)
    .family.split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
