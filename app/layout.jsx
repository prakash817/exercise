import { siteConfig } from "@/config/siteConfig";

const siteTitle =
  "LIC Financial & Insurance Advisor & Life Insurance Planning Advisor and WhatsApp enquiry with Suraj Kumar Gupta";
const siteDescription =
  "LIC Financial & Insurance Advisor & Life Insurance Planning Advisor and WhatsApp enquiry with Suraj Kumar Gupta";

export const metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: siteDescription,
  authors: [{ name: siteConfig.name }],
  robots: "index, follow",
  icons: {
    icon: [{ url: "/myPhoto.png", type: "image/png" }],
  },
  openGraph: {
    title: `${siteConfig.websiteName} | LIC Advisor`,
    description: siteDescription,
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
