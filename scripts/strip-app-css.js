const fs = require("fs");
const path = require("path");
const p = path.join(__dirname, "..", "src", "App.css");
let css = fs.readFileSync(p, "utf8");

function cutTo(startMarker, endMarker) {
  const start = css.indexOf(startMarker);
  const end = css.indexOf(endMarker, start === -1 ? 0 : start);
  if (start === -1 || end === -1 || end < start) {
    console.log("SKIP", JSON.stringify(startMarker).slice(0, 50));
    return;
  }
  css = css.slice(0, start) + css.slice(end);
}

cutTo("header {\n  position: relative;", ".btn {\n  display: inline-flex;");
cutTo(".eyebrow {", ".hero h1 {");
cutTo(".free-consultation-badge {", ".chips {");
cutTo(".policy-marquee-wrap {", "\nsection {\n");
cutTo(".language-toggle {", ".advisor-intro {");
cutTo(".plans-page {", ".calculator-page {");
cutTo(".sip-chart__note {", ".sip-calculator__table-panel {");
cutTo(".cards {", ".band {");
cutTo(
  ".datetime-field,\n.datetime-field input[type=\"datetime-local\"] {",
  "textarea {",
);
cutTo(".form-result {", ".gallery {");
cutTo("\n.contact-line {", "\nfooter {");
cutTo("\nfooter {", "\n@media (max-width: 900px) {");
cutTo("\n.lightbox {", "\n@media (max-width: 900px) {");

if (!css.includes(".btn-with-icon")) {
  css = css.replace(
    ".btn-gold {",
    `.btn-with-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-gold {`,
  );
}

if (!css.includes("select {\n  cursor: pointer")) {
  css = css.replace(
    "textarea {",
    `select {
  cursor: pointer;
}

textarea {`,
  );
}

css = css.replace(
  `\n  .cards {
    grid-template-columns: 1fr 1fr;
  }

`,
  "\n",
);

css = css.replace(
  `\n  .plans-grid,
  .plans-grid--featured {
    grid-template-columns: repeat(2, 1fr);
  }

  .plan-modal__dialog {
    grid-template-columns: 1fr;
    max-height: 92vh;
  }

  .plan-modal__image-wrap {
    max-height: none;
    margin-top: 0;
  }

`,
  "\n",
);

css = css.replace(
  `\n  .navlinks {
    display: none;
  }

  .menu {
    display: block;
  }

  .navlinks.open {
    display: flex;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: #fff;
    flex-direction: column;
    padding: 18px;
    border-bottom: 1px solid var(--line);
  }
`,
  "",
);

css = css.replace(
  `\n  .topbar .container {
    font-size: 11px;
  }

  .topbar .email {
    display: none;
  }

  .topbar-contact {
    width: 100%;
    justify-content: space-between;
  }

  .limited-offer-badge {
    width: 100%;
    animation: none;
  }

`,
  "\n",
);

css = css.replace(
  `\n  .profile-card img {
    height: 330px;
  }

`,
  "\n",
);

css = css.replace(
  `\n  .cards,
  .op-grid,
  .process,
  .gallery,
  .plans-grid,
  .plans-grid--featured {
    grid-template-columns: 1fr;
  }
`,
  `
  .op-grid,
  .process,
  .gallery {
    grid-template-columns: 1fr;
  }
`,
);

css = css.replace(
  `\n  .mobile-cta {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    border-top: 1px solid var(--line);
    z-index: 55;
    padding: 8px;
    gap: 8px;
  }

  .mobile-cta .btn {
    flex: 1;
    font-size: 12px;
  }

  .float-wa {
    bottom: 74px;
    right: 15px;
  }

  .foot {
    flex-direction: column;
  }
`,
  "",
);

css = css.replace(
  /@media \(prefers-reduced-motion: reduce\) \{\s*\.free-consultation-badge,[\s\S]*?\.limited-offer-badge__text \{[\s\S]*?\}\s*\}\s*/m,
  "",
);

const reusable = css.indexOf("/* -------------- reusable components -------------- */");
if (reusable !== -1) {
  css = css.slice(0, reusable).trimEnd() + "\n";
}

fs.writeFileSync(p, css);
console.log("done", css.length);
