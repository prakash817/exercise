import { useEffect, useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { getStoredSiteUser, persistSiteUser } from "@/lib/siteUser";

export async function fetchFeatureLandings(userId) {
  const response = await fetch(
    `/api/feature-landings?userId=${encodeURIComponent(userId)}`,
  );
  if (!response.ok) {
    throw new Error("Failed to load feature pages");
  }
  return response.json();
}

export function useFeatureLandings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      persistSiteUser({
        userId: siteConfig.userId,
        name: siteConfig.name,
      });

      const userId = getStoredSiteUser()?.userId;
      if (!userId) {
        setListings([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const data = await fetchFeatureLandings(userId);
        if (!cancelled) {
          setListings(Array.isArray(data) ? data : []);
        }
      } catch {
        if (!cancelled) {
          setListings([]);
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
  }, []);

  return { listings, loading };
}
