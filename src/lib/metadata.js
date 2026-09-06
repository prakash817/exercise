export const siteConfig = {
  name: "Shubh Insurance and Financial Services",
  description:
    "LIC policy feature pages with advisor-specific landing pages, quotes, and WhatsApp enquiry.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};
export function createPageMetadata({ title, description, path = "", }) {
    const url = `${siteConfig.url}${path}`;
    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: siteConfig.name,
            type: "website",
            locale: "en_US",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}
