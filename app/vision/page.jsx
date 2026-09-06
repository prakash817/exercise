"use client";

import { useEffect } from "react";
import VisionSection from "@/components/sections/VisionSection";

export default function VisionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="vision-page">
      <VisionSection />
    </main>
  );
}
