"use client";

import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import MobileCTA from "./MobileCTA";

export default function SiteChrome({ children }) {
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
