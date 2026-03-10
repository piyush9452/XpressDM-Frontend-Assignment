import Link from "next/link";

const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "/placeholder" },
    { label: "Pricing", href: "/pricing" },
    { label: "Changelog", href: "/placeholder" },
    { label: "Roadmap", href: "/placeholder" },
  ],
  Company: [
    { label: "About", href: "/placeholder" },
    { label: "Blog", href: "/placeholder" },
    { label: "Careers", href: "/placeholder" },
    { label: "Press", href: "/placeholder" },
  ],
  Resources: [
    { label: "Documentation", href: "/placeholder" },
    { label: "API Reference", href: "/placeholder" },
    { label: "Status", href: "/placeholder" },
    { label: "Support", href: "/placeholder" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/placeholder" },
    { label: "Terms of Service", href: "/placeholder" },
    { label: "Cookie Policy", href: "/placeholder" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border bg-brand-bg">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top row: logo + tagline */}
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-gradient shadow-accent-glow">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M2 14L6 10M6 10L2 6M6 10H16M10 2L14 6M14 6L10 10M14 6H2"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                XpressDM
              </span>
            </Link>
            <p className="mt-3 text-sm text-brand-text-secondary leading-relaxed">
              The fastest direct-messaging platform built for modern teams.
            </p>
          </div>

          {/* Newsletter */}
          <div className="max-w-sm">
            <p className="mb-2 text-sm font-semibold text-white">
              Stay up to date
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 rounded-lg border border-brand-border bg-brand-card px-4 py-2 text-sm text-white placeholder:text-brand-text-muted outline-none focus:border-brand-accent transition-colors"
                aria-label="Email address"
              />
              <button className="rounded-lg bg-brand-accent px-4 py-2 text-sm font-semibold text-white hover:bg-brand-accent-hover transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <nav
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
          aria-label="Footer navigation"
        >
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-text-muted">
                {category}
              </h4>
              <ul className="flex flex-col gap-3" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-text-secondary hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-brand-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-brand-text-muted">
            © {currentYear} XpressDM, Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social icons */}
            {[
              {
                label: "Twitter / X",
                href: "https://x.com",
                icon: (
                  <path
                    d="M13 3L9.5 7.5M9.5 7.5L3 13M9.5 7.5L13 13M9.5 7.5L3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                ),
              },
              {
                label: "GitHub",
                href: "https://github.com",
                icon: (
                  <path
                    d="M8 2C4.686 2 2 4.686 2 8c0 2.655 1.723 4.908 4.11 5.702.3.055.41-.13.41-.29v-1.016c-1.67.363-2.02-.803-2.02-.803-.273-.693-.667-.878-.667-.878-.545-.372.04-.365.04-.365.603.042.92.619.92.619.535.917 1.403.652 1.745.499.055-.388.21-.652.38-.802-1.332-.152-2.733-.666-2.733-2.966 0-.655.233-1.19.617-1.61-.062-.152-.268-.762.058-1.588 0 0 .504-.162 1.65.615A5.75 5.75 0 018 5.068c.51.002 1.023.069 1.502.202 1.145-.777 1.648-.615 1.648-.615.327.826.121 1.436.06 1.588.384.42.616.955.616 1.61 0 2.307-1.404 2.812-2.74 2.96.215.187.408.555.408 1.118v1.658c0 .161.108.349.413.29C12.279 12.906 14 10.654 14 8c0-3.314-2.686-6-6-6z"
                    fill="currentColor"
                  />
                ),
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com",
                icon: (
                  <>
                    <rect
                      x="2"
                      y="2"
                      width="12"
                      height="12"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M5 6.5v5M5 5v.5M7.5 11.5V9a1.5 1.5 0 013 0v2.5M7.5 8v3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </>
                ),
              },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-brand-border text-brand-text-muted hover:border-brand-accent hover:text-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  {icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
