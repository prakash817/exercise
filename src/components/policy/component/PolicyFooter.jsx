import { SECTION_CONTAINER_CLASS } from "./constants";
export function PolicyFooter({ policy, advisor }) {
    return (<footer className="border-t border-[var(--p-border)] py-8 pb-24 md:pb-8">
      <div className={`${SECTION_CONTAINER_CLASS} text-center text-sm text-[var(--p-text-dim)]`}>
        <p>
          © {new Date().getFullYear()} {advisor.company} • {policy.footerText}
        </p>
        <p className="mt-1">
          Advisor: {advisor.name} ({advisor.id}) • {advisor.licenseNumber}
        </p>
      </div>
    </footer>);
}
