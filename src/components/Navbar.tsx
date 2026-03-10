"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/placeholder" },
  { label: "Features", href: "/placeholder" },
  { label: "Pricing", href: "/pricing" },
  { label: "Use Cases", href: "/placeholder" },
  { label: "Login / Signup", href: "/placeholder" },
];

/** Orange→Pink→Purple gradient CTA button */
function GradientButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity whitespace-nowrap"
    >
      {children}
    </Link>
  );
}

/** XpressDM logo mark */
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1.5">
      {/* Simple D-shape logo icon matching the design */}
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M4 4h10c5.523 0 10 4.477 10 10v0c0 5.523-4.477 10-10 10H4V4z"
          fill="url(#logo-grad)" />
        <path d="M4 4h5v20H4V4z" fill="url(#logo-grad2)" opacity="0.6"/>
        <defs>
          <linearGradient id="logo-grad" x1="4" y1="4" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F97316"/>
            <stop offset="0.5" stopColor="#EC4899"/>
            <stop offset="1" stopColor="#8B5CF6"/>
          </linearGradient>
          <linearGradient id="logo-grad2" x1="4" y1="4" x2="9" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F97316"/>
            <stop offset="1" stopColor="#EC4899"/>
          </linearGradient>
        </defs>
      </svg>
      <span className="text-base font-semibold tracking-tight text-white">
        xpressdm<span className="text-gray-400">™</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 py-4">
        {/* Desktop: centered pill nav */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-[#1C1C1C] px-2 py-1.5 shadow-lg">
          {/* Logo inside nav pill */}
          <Link href="/" className="flex items-center gap-1.5 px-3 py-1">
            <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
              <path d="M4 4h10c5.523 0 10 4.477 10 10v0c0 5.523-4.477 10-10 10H4V4z" fill="url(#ln1)"/>
              <defs>
                <linearGradient id="ln1" x1="4" y1="4" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F97316"/><stop offset="0.5" stopColor="#EC4899"/><stop offset="1" stopColor="#8B5CF6"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="text-sm font-semibold text-white">xpressdm™</span>
          </Link>

          <div className="mx-1 h-4 w-px bg-white/10" />

          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                link.label === "Pricing"
                  ? "bg-white/10 text-white font-medium"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="mx-1 h-4 w-px bg-white/10" />

          <div className="pl-1">
            <GradientButton href="/placeholder">Start Free Trial</GradientButton>
          </div>
        </nav>

        {/* Mobile: logo + CTA + hamburger */}
        <div className="flex md:hidden w-full items-center justify-between bg-[#1A1A1A] rounded-xl px-4 py-2.5">
          <Logo />
          <div className="flex items-center gap-3">
            <GradientButton href="/placeholder">Start Free Trial</GradientButton>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="text-white p-1"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          {/* White slide-in panel — matching Figma exactly */}
          <div
            className="absolute inset-x-4 top-4 bottom-4 rounded-2xl bg-white text-black flex flex-col p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close + logo */}
            <div className="flex items-center justify-between mb-6">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-1.5">
                <svg width="28" height="28" viewBox="0 0 26 26" fill="none">
                  <path d="M4 4h10c5.523 0 10 4.477 10 10v0c0 5.523-4.477 10-10 10H4V4z" fill="url(#mo1)"/>
                  <defs>
                    <linearGradient id="mo1" x1="4" y1="4" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F97316"/><stop offset="0.5" stopColor="#EC4899"/><stop offset="1" stopColor="#8B5CF6"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-base font-semibold text-black">xpressdm™</span>
              </Link>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4l12 12M16 4L4 16" stroke="#111" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* CTA + sign in */}
            <div className="flex flex-col items-center gap-2 mb-8">
              <GradientButton href="/placeholder">Start Free Trial</GradientButton>
              <button className="text-sm text-gray-600 hover:text-black transition-colors">
                Sign in
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-1">
              {[
                { label: "Features", href: "/placeholder" },
                { label: "Pricing", href: "/pricing" },
                { label: "Use Cases", href: "/placeholder" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between rounded-xl bg-[#FFF5F3] px-4 py-3.5 text-sm font-medium text-black hover:bg-orange-50 transition-colors"
                >
                  {link.label}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4l4 4-4 4" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
