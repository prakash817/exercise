import { notFound } from "next/navigation";
import { PolicyLanding } from "@/components/policy/PolicyLanding";
import {
  getAdvisor,
  getPolicy,
  getPolicyStaticParams,
} from "@/lib/landing";
import { createPageMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return getPolicyStaticParams();
}

export async function generateMetadata({ params }) {
  const { policyId, userId } = await params;
  const policy = getPolicy(policyId);
  const advisor = getAdvisor(userId);

  if (!policy || !advisor) {
    return createPageMetadata({
      title: "Policy Not Found",
      description: "The requested policy page could not be found.",
    });
  }

  return createPageMetadata({
    title: `${policy.name} — ${advisor.name}`,
    description: policy.heroSubtitle,
    path: `/policy/${policyId}/${userId}`,
  });
}

export default async function PolicyPage({ params }) {
  const { policyId, userId } = await params;
  const policy = getPolicy(policyId);
  const advisor = getAdvisor(userId);

  if (!policy || !advisor) {
    notFound();
  }

  return (
    <div id="policy-root">
      <PolicyLanding policy={policy} advisor={advisor} />
    </div>
  );
}
