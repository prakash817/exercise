import SiteChrome from "../src/components/SiteChrome";
import { siteConfig } from "../src/config/siteConfig";
import "../src/index.css";
import "../src/App.css";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
