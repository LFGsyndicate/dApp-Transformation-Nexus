
import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  article?: boolean;
  schema?: Record<string, any>;
}

export const SEOMetaTags: React.FC<SEOProps> = ({
  title = "DNT - 700+ Blockchain, DAO & AI Use Cases",
  description = "Explore 700+ real-world use cases of blockchain, smart contracts, DAOs, NFTs and AI across various industries with verified sources and research references.",
  keywords = "blockchain, smart contracts, DAO, NFT, AI, Web3, use cases, decentralized, crypto, technology, DeFi, token, metaverse, digital transformation",
  image = "/lovable-uploads/b44163f8-2a72-4112-b57b-a37d258b660d.png",
  article = false,
  schema,
}) => {
  const { pathname } = useLocation();
  // Use the correct base URL for GitHub Pages
  const basePath = import.meta.env.VITE_BASE_PATH || '/';
  const siteUrl = "https://lfgsyndicate.github.io/dApp-Transformation-Nexus";
  const canonical = siteUrl + pathname;
  const fullImageUrl = `${siteUrl}${basePath}${image.replace(/^\//, '')}`;

  // Default schema (WebSite)
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    "name": "Decentralized Transformation Nexus",
    "alternateName": "DNT",
    "url": siteUrl,
    "logo": `${siteUrl}${basePath}lovable-uploads/122c4587-2b9c-4360-9aea-2df1f25074ee.png`,
    "description": description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/use-cases?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // Merge default schema with custom schema if provided
  const schemaData = schema ? { ...defaultSchema, ...schema } : defaultSchema;

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="DNT Research" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5" />
      <meta name="theme-color" content="#18181b" />
      <meta name="author" content="CL" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />

      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default SEOMetaTags;
