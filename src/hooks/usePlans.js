import { useEffect, useState } from "react";

export function buildPlansApiUrl({ planType, featured, collection } = {}) {
  const params = new URLSearchParams();
  if (planType) params.set("plan_type", planType);
  if (featured) params.set("featured", featured);
  if (collection) params.set("collection", collection);
  const query = params.toString();
  return query ? `/api/plans?${query}` : "/api/plans";
}

export async function fetchPlans(options = {}) {
  const response = await fetch(buildPlansApiUrl(options));
  if (!response.ok) {
    throw new Error("Failed to load plans");
  }
  return response.json();
}

export function usePlans(options = {}) {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const planType = options.planType ?? "";
  const featured = options.featured ?? "";
  const collection = options.collection ?? "";

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const data = await fetchPlans({
          planType: planType || undefined,
          featured: featured || undefined,
          collection: collection || undefined,
        });
        if (!cancelled) {
          setPlans(Array.isArray(data) ? data : []);
        }
      } catch {
        if (!cancelled) {
          setPlans([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [planType, featured, collection]);

  return { plans, loading };
}
