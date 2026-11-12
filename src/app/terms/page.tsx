import Terms from "@/pages/Terms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Entelix Technologies terms of service, payment milestones, and engagement terms.",
  alternates: {
    canonical: "https://entelix.co.ke/terms",
  },
};

export default function TermsPage() {
  return <Terms />;
}
