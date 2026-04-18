import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "ENTELIX - Leading Digital Solutions & Software Development Company in Kenya",
  description = "Transform your business with ENTELIX's expert digital solutions in Kenya. We specialize in web development, custom software development, mobile apps, graphic design, cloud solutions, and digital marketing. Get innovative technology solutions that drive growth.",
  keywords = "software development Kenya, web development Nairobi, mobile app development Kenya, cloud solutions East Africa, digital marketing Kenya, graphic design Nairobi, IT consulting Kenya, technology solutions Africa",
  image = "/og-image.jpg",
  url = "https://entelix.co.ke",
  type = "website",
  author = "ENTELIX",
  locale = "en_KE",
  siteName = "ENTELIX"
}) => {
  const siteTitle = "ENTELIX";
  const fullTitle = title.includes(siteTitle)
    ? title
    : `${title} | ${siteTitle}`;

  // Ensure URL is absolute
  const canonicalUrl = url.startsWith('http') ? url : `https://entelix.co.ke${url}`;

  // Structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ENTELIX",
    "url": "https://entelix.co.ke",
    "logo": "https://entelix.co.ke/og-image.jpg",
    "description": "Leading digital solutions and software development company in Kenya",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KE"
    },
    "sameAs": [
      // Add social media URLs if available
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta httpEquiv="content-language" content="en-KE" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://entelix.co.ke${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`https://entelix.co.ke${image}`} />

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#1f2937" />
      <meta name="msapplication-TileColor" content="#1f2937" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
