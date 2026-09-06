import { useEffect } from "react";
import { siteConfig } from "../config/siteConfig";

function setMeta(name, content) {
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setOgMeta(property, content) {
  let element = document.querySelector(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function useSiteMeta() {
  useEffect(() => {
    document.title = `LIC Financial & Insurance Advisor & Life Insurance Planning Advisor and WhatsApp enquiry with Suraj Kumar Gupta`;

    setMeta(
      "description",
      `LIC Financial & Insurance Advisor & Life Insurance Planning Advisor and WhatsApp enquiry with Suraj Kumar Gupta`,
    );
    setMeta(
      "keywords",
      `LIC Financial & Insurance Advisor & Life Insurance Planning Advisor and WhatsApp enquiry with Suraj Kumar Gupta`,
    );
    setMeta("author", siteConfig.name);
    setOgMeta("og:title", `${siteConfig.websiteName} | LIC Advisor`);
    setOgMeta(
      "og:description",
      `LIC Financial & Insurance Advisor & Life Insurance Planning Advisor and WhatsApp enquiry with Suraj Kumar Gupta`,
    );
  }, []);
}

export function getBrandInitials(name = siteConfig.name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
