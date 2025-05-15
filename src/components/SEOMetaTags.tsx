
import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  article?: boolean;
}

export const SEOMetaTags: React.FC<SEOProps> = ({
  title = "Web3 Use Cases Catalog - 700+ Blockchain, DAO, NFT & AI Examples",
  description = "Explore 700+ real-world use cases of blockchain, smart contracts, DAOs, NFTs and AI across various industries with verified sources and research references.",
  keywords = "blockchain, smart contracts, DAO, NFT, AI, Web3, use cases, decentralized, crypto, technology",
  image = "/og-image.png",
  article = false,
}) => {
  const { pathname } = useLocation();
  const siteUrl = "https://yourwebsite.com";
  const canonical = siteUrl + pathname;

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
      <meta property="og:image" content={`${siteUrl}${image}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Helmet>
  );
};

export default SEOMetaTags;
