import WebHero from "@/components/webdevelopment/WebHero";
import WebDevServices from "@/components/webdevelopment/WebDevServices";
import WebDevCta from "@/components/webdevelopment/WebDevCta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services",
  description:
    "Fast, modern, and scalable web applications designed to perform, convert, and deliver seamless digital experiences.",
  alternates: {
    canonical: "https://entelix.co.ke/web-development",
  },
};

export default function WebDevelopmentPage() {
  return (
    <div>
      <WebHero />
      <WebDevServices />
      <WebDevCta />
    </div>
  );
}
