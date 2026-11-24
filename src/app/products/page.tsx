import React from "react";
import type { Metadata } from "next";
import ProductsSection from "@/components/home/ProductsSection";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Proprietary Enterprise Software Products - Entelix POS & Entelwork",
  description:
    "Explore Entelix Technologies proprietary enterprise software products: Entelix POS for retail and multi-branch intelligence, and Entelwork for modern leave and workforce governance.",
  alternates: {
    canonical: "https://entelix.co.ke/products",
  },
};

export default function ProductsPage() {
  return (
    <div className="pt-10">
      <ProductsSection />
      <ContactCTA />
    </div>
  );
}

