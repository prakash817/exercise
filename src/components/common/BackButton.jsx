import Link from "next/link";
import "./BackButton.css";

export default function BackButton({
  href = "/",
  children = "← Back to Home",
}) {
  return (
    <Link href={href} className="back-button">
      {children}
    </Link>
  );
}
