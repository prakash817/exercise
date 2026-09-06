import PlansGallery from "@/components/PlansGallery";

export default async function PlansPage({ searchParams }) {
  const { plan_type: planType } = await searchParams;

  return <PlansGallery planType={planType ?? null} />;
}
