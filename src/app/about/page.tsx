import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/MajorAbout";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import AboutCTA from "@/components/about/AboutCTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Entelix Technologies, a premier software development agency building modern web platforms, custom software, and scalable technology systems.",
  alternates: {
    canonical: "https://entelix.co.ke/about",
  },
};

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutIntro />
      <WhyChooseUs />
      <AboutCTA />
    </div>
  );
}

