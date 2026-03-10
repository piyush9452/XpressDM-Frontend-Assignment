import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Pricing – XpressDM",
  description: "Simple, transparent pricing for XpressDM. Start free, scale as you grow.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
