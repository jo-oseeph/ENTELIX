import Privacy from "@/views/Privacy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Entelix Technologies privacy policy detailing our data collection, security, and privacy commitments.",
  alternates: {
    canonical: "https://entelix.co.ke/privacy",
  },
};

export default function PrivacyPage() {
  return <Privacy />;
}
