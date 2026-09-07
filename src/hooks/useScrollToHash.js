"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function useScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);
}
