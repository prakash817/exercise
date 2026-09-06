import Link from "next/link";

export default function PolicyNotFound() {
  return (
    <div
      id="policy-root"
      className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 text-center text-slate-100"
    >
      <h1 className="text-4xl font-bold text-white">Page Not Found</h1>
      <p className="mt-4 max-w-md text-slate-400">
        The policy or advisor you&apos;re looking for doesn&apos;t exist. Check
        the URL and try again.
      </p>
      <p className="mt-2 text-sm text-slate-500">
        Example:{" "}
        <code className="rounded bg-white/10 px-2 py-1">
          /policy/term-insurance-v3/CE6622
        </code>
      </p>
      <Link
        href="/feature-page"
        className="mt-8 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-900"
      >
        All Feature Pages
      </Link>
    </div>
  );
}
