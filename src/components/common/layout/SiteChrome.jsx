"use client";

import { siteConfig } from "@/config/siteConfig";
import { persistSiteUser } from "@/lib/siteUser";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import MobileCTA from "./MobileCTA";

export default function SiteChrome({ children }) {
  persistSiteUser({
    userId: siteConfig.userId,
    name: siteConfig.name,
  });

  return (
    <>
      <TopBar />
      <Header />
      {children}
      <Footer />
      <FloatingWhatsApp />
      <MobileCTA />
    </>
  );
}
