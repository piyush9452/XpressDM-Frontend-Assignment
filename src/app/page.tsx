import { redirect } from "next/navigation";

/**
 * Root route redirects to the pricing page since this is a
 * single-purpose pricing page project.
 */
export default function HomePage() {
  redirect("/pricing");
}
