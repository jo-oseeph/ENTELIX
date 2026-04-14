import { Helmet } from "react-helmet-async";

const SEO = ({ 
  title = "ENTELIX - Digital Solutions & Software Development Company",
  description = "Transform your business with ENTELIX's expert digital solutions. We specialize in web development, cloud solutions, mobile apps, graphic design, and digital marketing.",
  keywords = "software development, web development, mobile app development, cloud solutions, digital marketing, graphic design",
  image = "/og-image.jpg",
  url = "https://entelix.com", 
}) => {
  const siteTitle = "ENTELIX";
  const fullTitle = title.includes(siteTitle)
    ? title
    : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${url}${image}`} />
    </Helmet>
  );
};

export default SEO;
