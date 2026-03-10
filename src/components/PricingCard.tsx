import { cn } from "@/lib/utils";
import Button from "./Button";

export interface PricingFeature {
  label: string;
  active: boolean;       // orange/pink check vs grey dimmed
  comingSoon?: boolean;
}

export interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;           // e.g. "₹0", "₹499", ""
  priceNote?: string;      // e.g. "/ month  per account"
  ctaText: string;
  ctaLink: string;
  ctaVariant?: "gradient" | "dark";
  features: PricingFeature[];
  isPro?: boolean;
  /** billing toggle shown inside Pro card */
  billingOptions?: string[];
  activeBilling?: string;
}

/** Coloured check — gradient circle icon for active features */
function ActiveCheck() {
  return (
    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full gradient-brand">
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M1.5 4l1.8 1.8L6.5 2" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

/** Grey dimmed check for inactive features */
function DimCheck() {
  return (
    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#2A2A2A]">
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M1.5 4l1.8 1.8L6.5 2" stroke="#555" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

export default function PricingCard({
  title, subtitle, price, priceNote, ctaText, ctaLink,
  ctaVariant = "dark", features, isPro = false,
  billingOptions, activeBilling,
}: PricingCardProps) {
  return (
    <article
      className={cn(
        "relative flex flex-col rounded-2xl p-6",
        isPro
          ? "pro-glow bg-gradient-to-b from-[#1E1212] to-[#1A1020]"
          : "border border-[#2A2A2A] bg-[#161616]"
      )}
    >
      {/* Pro badge */}
      {isPro && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full gradient-brand px-3 py-0.5 text-xs font-bold text-white shadow">
            Most Popular
          </span>
        </div>
      )}

      {/* Title row */}
      <div className="mb-1 flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {/* Billing pills inside Pro card */}
        {billingOptions && (
          <div className="flex gap-1 rounded-full bg-[#2A1A1A] p-0.5">
            {billingOptions.map((opt) => (
              <span
                key={opt}
                className={cn(
                  "rounded-full px-2.5 py-0.5 text-[10px] font-semibold transition-colors cursor-pointer",
                  opt === activeBilling
                    ? "gradient-brand text-white"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {opt}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Subtitle */}
      <p className="mb-4 text-xs text-gray-400 leading-relaxed">{subtitle}</p>

      {/* Price */}
      {price && (
        <div className="mb-5 flex items-baseline gap-2">
          <span className="text-4xl font-bold text-white">{price}</span>
          {priceNote && (
            <span className="text-xs text-gray-400 leading-tight">{priceNote}</span>
          )}
        </div>
      )}

      {/* CTA */}
      <Button href={ctaLink} variant={ctaVariant} fullWidth className="mb-5">
        {ctaText}
      </Button>

      {/* Divider */}
      <div className="mb-4 border-t border-[#2A2A2A]" />

      {/* Features */}
      <p className="mb-3 text-sm font-semibold text-white">Features :</p>
      <ul className="flex flex-col gap-2.5">
        {features.map((f) => (
          <li key={f.label} className="flex items-start gap-2.5">
            {f.active ? <ActiveCheck /> : <DimCheck />}
            <span
              className={cn(
                "text-sm",
                f.active
                  ? f.comingSoon ? "text-gray-400" : "text-gray-200"
                  : "text-gray-500"
              )}
            >
              {f.label}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
