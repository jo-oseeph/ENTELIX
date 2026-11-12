import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BackToTop from "@/components/BackToTop";

export const viewport: Viewport = {
  themeColor: "#0B59ED",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://entelix.co.ke"),
  title: {
    default: "Entelix Technologies - We Build High-Performance Digital Solutions",
    template: "%s | Entelix Technologies",
  },
  description:
    "Entelix Technologies is a premier software development agency delivering high-performance custom software, web applications, mobile apps, and cloud solutions for businesses and organizations.",
  keywords: [
    "software development agency Kenya",
    "custom software development Nairobi",
    "web application development",
    "enterprise software solutions",
    "mobile app development Kenya",
    "cloud solutions East Africa",
    "Entelix Technologies",
  ],
  authors: [{ name: "Entelix Technologies" }],
  creator: "Entelix Technologies",
  publisher: "Entelix Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://entelix.co.ke",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://entelix.co.ke",
    title: "Entelix Technologies - We Build High-Performance Digital Solutions",
    description:
      "Transforming business ideas into powerful, reliable digital solutions through custom software, web applications, and modern cloud technologies.",
    siteName: "Entelix Technologies",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Entelix Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entelix Technologies - We Build High-Performance Digital Solutions",
    description:
      "Premier software development agency delivering high-performance custom software, web applications, and cloud solutions.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans antialiased text-[#101926] bg-[#FFFFFF] selection:bg-[#0B59ED] selection:text-white">
        <Navbar />
        <BackToTop />
        <main className="flex-1 pt-16 md:pt-20">
          {children}
        </main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
