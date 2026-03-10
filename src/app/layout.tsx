import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "XpressDM – Pricing",
  description:
    "Simple, transparent pricing for XpressDM. Choose the plan that fits your team's DM workflow.",
  openGraph: {
    title: "XpressDM – Pricing",
    description: "Simple, transparent pricing for XpressDM.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-nacelle bg-brand-bg text-brand-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
