"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import PricingCard, { PricingCardProps } from "@/components/PricingCard";
import { cn } from "@/lib/utils";

/* ── Plans ──────────────────────────────────────────────────────── */
const FREE_PLAN: PricingCardProps = {
  title: "Free",
  subtitle: "Good for exploring automation.",
  price: "₹0",
  ctaText: "Get Started",
  ctaLink: "/placeholder",
  ctaVariant: "dark",
  features: [
    { label: "Unlimited Automations", active: true },
    { label: "1000 DM", active: true },
    { label: "1000 Contact", active: true },
    { label: "Ask to follow", active: false },
    { label: "Lead Generation", active: false },
    { label: "Smart Follow-ups · Coming Soon", active: false, comingSoon: true },
    { label: "AI Reply · Coming Soon", active: false, comingSoon: true },
  ],
};

const PRO_PLAN: PricingCardProps = {
  title: "Pro",
  subtitle: "Best for growing outreach and engagement.",
  price: "₹499",
  priceNote: "/ month\nper account",
  ctaText: "Go Pro",
  ctaLink: "/placeholder",
  ctaVariant: "gradient",
  isPro: true,
  billingOptions: ["Monthly", "Quarterly", "Annually"],
  features: [
    { label: "Unlimited Automation", active: true },
    { label: "Unlimited DMs", active: true },
    { label: "Unlimited Contact", active: true },
    { label: "Ask to follow", active: true },
    { label: "Lead Generation", active: true },
    { label: "Smart Follow-ups · Coming Soon", active: true, comingSoon: true },
    { label: "AI Reply · Coming Soon", active: true, comingSoon: true },
  ],
};

const ENTERPRISE_PLAN: PricingCardProps = {
  title: "Enterprise",
  subtitle: "For teams and multi-account management.",
  price: "",
  ctaText: "Talk to Us",
  ctaLink: "/placeholder",
  ctaVariant: "dark",
  features: [
    { label: "Add multiple Accounts", active: true },
    { label: "Custom Solutions", active: true },
    { label: "Early Access New Features", active: true },
    { label: "Priority Support", active: true },
  ],
};

/* ── Comparison table rows ──────────────────────────────────────── */
const COMPARISON_ROWS = [
  { feature: "Pricing",         free: "0",         pro: "₹399 (Changes based\non plan duration)" },
  { feature: "Automations",     free: "Unlimited",  pro: "Unlimited" },
  { feature: "DM Sent Limit",   free: "1000",       pro: "Unlimited" },
  { feature: "Contacts Limit",  free: "1000",       pro: "Unlimited" },
  { feature: "Ask to Follow",   free: false,        pro: true },
  { feature: "Lead Generation", free: false,        pro: true },
  { feature: "Collect Email",   free: false,        pro: true },
  { feature: "Rerun",           free: false,        pro: true },
  { feature: "Support",         free: "Email",      pro: "Priority" },
];

const BILLING_OPTIONS = ["Monthly", "Quarterly", "Annually"] as const;

/* ── Page ───────────────────────────────────────────────────────── */
export default function PricingPage() {
  const [billing, setBilling] = useState<"Monthly" | "Quarterly" | "Annually">("Monthly");

  return (
    <main className="page-glow min-h-screen pt-24 pb-20">

      {/* ── Hero ── */}
      <SectionWrapper className="text-center pt-10 pb-14">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1l1.4 2.8 3.1.45-2.25 2.2.53 3.1L6 8.1 3.22 9.55l.53-3.1L1.5 4.25l3.1-.45z"
              fill="url(#star-g)"/>
            <defs>
              <linearGradient id="star-g" x1="1" y1="1" x2="11" y2="11" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F97316"/><stop offset="1" stopColor="#EC4899"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="text-xs font-medium text-white">Pricing</span>
        </div>

        {/* Headline */}
        <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
          Simple and
          <br />
          transparent{" "}
          <span className="gradient-brand-text">pricing.</span>
        </h1>

        {/* Subhead */}
        <p className="mx-auto mb-10 max-w-sm text-sm text-gray-400 leading-relaxed">
          Simple plans, upfront costs, & zero surprises.
          <br />
          Pricing made easy & completely transparent.
        </p>

        {/* Billing toggle */}
        <div
          className="inline-flex items-center rounded-full bg-[#1C1C1C] border border-[#2A2A2A] p-1 gap-1"
          role="group"
          aria-label="Billing period"
        >
          {BILLING_OPTIONS.map((opt) => (
            <button
              key={opt}
              onClick={() => setBilling(opt)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
                billing === opt
                  ? "gradient-brand text-white shadow"
                  : "text-gray-400 hover:text-white"
              )}
              aria-pressed={billing === opt}
            >
              {opt}
            </button>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Pricing Cards ── */}
      <SectionWrapper className="pb-16">
        <div className="grid gap-5 md:grid-cols-3">
          <PricingCard {...FREE_PLAN} />
          <PricingCard
            {...PRO_PLAN}
            activeBilling={billing}
          />
          <PricingCard {...ENTERPRISE_PLAN} />
        </div>
      </SectionWrapper>

      {/* ── Feature Comparison ── */}
      <SectionWrapper className="pb-16">
        {/* Section badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1l1.4 2.8 3.1.45-2.25 2.2.53 3.1L6 8.1 3.22 9.55l.53-3.1L1.5 4.25l3.1-.45z"
                fill="url(#star-g2)"/>
              <defs>
                <linearGradient id="star-g2" x1="1" y1="1" x2="11" y2="11" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F97316"/><stop offset="1" stopColor="#EC4899"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="text-xs font-medium text-white">Feature Comparison</span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#111]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#2A2A2A]">
                <th className="px-5 py-3.5 text-left font-semibold text-gray-300 text-sm">
                  Compare our plans
                </th>
                <th className="px-5 py-3.5 text-center font-semibold text-gray-300 text-sm w-32">
                  Free
                </th>
                <th className="px-5 py-3.5 text-center font-semibold text-sm w-44 pro-col-highlight">
                  <span className="gradient-brand-text font-bold">Pro</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr
                  key={row.feature}
                  className={cn(
                    "border-b border-[#1E1E1E] last:border-0",
                    i % 2 === 0 ? "bg-transparent" : "bg-white/[0.015]"
                  )}
                >
                  <td className="px-5 py-3.5 text-gray-300">{row.feature}</td>
                  <td className="px-5 py-3.5 text-center text-gray-400">
                    {typeof row.free === "boolean" ? (
                      row.free ? (
                        <CheckMark />
                      ) : (
                        <CrossMark />
                      )
                    ) : (
                      row.free
                    )}
                  </td>
                  <td className="px-5 py-3.5 text-center pro-col-highlight">
                    {typeof row.pro === "boolean" ? (
                      row.pro ? (
                        <CheckMark accent />
                      ) : (
                        <CrossMark />
                      )
                    ) : (
                      <span className="text-gray-200 whitespace-pre-line text-xs leading-snug">
                        {row.pro}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>
    </main>
  );
}

function CheckMark({ accent = false }: { accent?: boolean }) {
  return (
    <div className="flex justify-center">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="8.5" stroke={accent ? "#E04A1F" : "#4B4B4B"} strokeOpacity={accent ? "0.5" : "0.4"}/>
        <path d="M5.5 9l2.5 2.5 4.5-5" stroke={accent ? "#F97316" : "#6B6B6B"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function CrossMark() {
  return (
    <div className="flex justify-center">
      <span className="text-gray-500 text-base font-bold">✕</span>
    </div>
  );
}
