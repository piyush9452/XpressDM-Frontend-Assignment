import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = { title: "Coming Soon – XpressDM" };

export default function PlaceholderPage() {
  return (
    <>
      <Navbar />
      <main className="page-glow flex min-h-screen flex-col items-center justify-center px-6 pt-20">
        <div className="text-center max-w-md">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
            <svg className="h-8 w-8 text-orange-400" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="mb-3 text-3xl font-bold text-white">Coming Soon</h1>
          <p className="mb-8 text-gray-400 text-sm leading-relaxed">
            This page is under construction. Head back to pricing.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity"
          >
            View Pricing
          </Link>
        </div>
      </main>
    </>
  );
}
