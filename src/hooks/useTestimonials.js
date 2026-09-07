import { useEffect, useState } from "react";

export async function fetchTestimonials() {
  const response = await fetch("/api/testimonials");
  if (!response.ok) {
    throw new Error("Failed to load testimonials");
  }
  return response.json();
}

export async function postTestimonial(data) {
  const response = await fetch("/api/testimonials", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload.error ?? "Failed to create testimonial");
  }
  return payload;
}

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const data = await fetchTestimonials();
        if (!cancelled) {
          setTestimonials(Array.isArray(data) ? data : []);
        }
      } catch {
        if (!cancelled) {
          setTestimonials([]);
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

  return { testimonials, loading };
}
