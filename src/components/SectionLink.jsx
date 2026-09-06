import { Link, useLocation, useNavigate } from "react-router-dom";
import CallIcon from "./CallIcon";
import { telLink } from "../utils/links";

export default function SectionLink({
  section,
  path,
  className,
  children,
  onNavigate,
  call,
}) {
  const location = useLocation();
  const navigate = useNavigate();

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
      <Link to={path} className={className} onClick={() => onNavigate?.()}>
        {children}
      </Link>
    );
  }

  const handleClick = (event) => {
    event.preventDefault();
    onNavigate?.();

    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash: `#${section}` });
      return;
    }

    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `#${section}`);
  };

  return (
    <Link to={`/#${section}`} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
