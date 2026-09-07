"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import CallIcon from "../icon/CallIcon";
import { telLink } from "../../../utils/links";

export default function SectionLink({
  section,
  path,
  className,
  children,
  onNavigate,
  call,
}) {
  const pathname = usePathname();
  const router = useRouter();

  if (call) {
    return (
      <a
        href={telLink}
        className={`${className ?? ""} btn-with-icon`.trim()}
        onClick={() => onNavigate?.()}
      >
        <CallIcon className="call-icon" size={16} />
        {children}
      </a>
    );
  }

  if (path) {
    return (
      <Link href={path} className={className} onClick={() => onNavigate?.()}>
        {children}
      </Link>
    );
  }

  const handleClick = (event) => {
    event.preventDefault();
    onNavigate?.();

    if (pathname !== "/") {
      router.push(`/#${section}`);
      return;
    }

    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `#${section}`);
  };

  return (
    <Link href={`/#${section}`} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
