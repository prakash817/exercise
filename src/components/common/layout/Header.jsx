"use client";

import { useState } from "react";
import { navLinks } from "../../../data/content";
import { siteConfig } from "../../../config/siteConfig";
import { getBrandInitials } from "../../../hooks/useSiteMeta";
import SectionLink from "../links/SectionLink";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div className="container nav">
        <SectionLink section="home" className="brand" onNavigate={closeMenu}>
          <span className="brandmark">{getBrandInitials()}</span>
          <span>
            {siteConfig.websiteName}
            <small>{siteConfig.designation}</small>
            <small>{`${siteConfig.experienceYears}+ Years of expertise`}</small>
            {/* <small>{siteConfig.serviceAreas}</small> */}
          </span>
        </SectionLink>

        <button
          type="button"
          className="menu"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>

        <nav className={`navlinks${menuOpen ? " open" : ""}`}>
          {navLinks.map(({ label, section, path }) => (
            <SectionLink
              key={path ?? section}
              section={section}
              path={path}
              onNavigate={closeMenu}
              className={section === "home" ? "btn btn-primary" : ""}
            >
              {label}
            </SectionLink>
          ))}
          {/* <SectionLink call className="btn btn-primary" onNavigate={closeMenu}>
            Call Us
          </SectionLink> */}
        </nav>
      </div>
    </header>
  );
}
