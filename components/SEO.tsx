import React, { useEffect } from "react";
import { useLanguage } from "../LanguageContext";

const SEO: React.FC = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    // Update Document Title
    document.title = t("meta.title");

    // Update Meta Title
    const metaTitle = document.querySelector('meta[name="title"]');
    if (metaTitle) {
      metaTitle.setAttribute("content", t("meta.title"));
    }

    // Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", t("meta.description"));
    }

    // Update Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", t("meta.keywords"));
    }

    // Update Language
    const metaLanguage = document.querySelector('meta[name="language"]');
    if (metaLanguage) {
      metaLanguage.setAttribute(
        "content",
        language === "tr" ? "Turkish" : "English"
      );
    }

    // Update Open Graph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", t("meta.ogTitle"));
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", t("meta.ogDescription"));
    }

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute("content", language === "tr" ? "tr_TR" : "en_US");
    }

    // Update Twitter Tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", t("meta.title"));
    }

    const twitterDesc = document.querySelector(
      'meta[name="twitter:description"]'
    );
    if (twitterDesc) {
      twitterDesc.setAttribute("content", t("meta.twitterDescription"));
    }

    // Update HTML Lang attribute
    document.documentElement.lang = language;

    // Update Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute(
        "href",
        `https://theuniflow.com/${language === "en" ? "en/" : ""}`
      );
    }

    // Add JSON-LD Structured Data
    updateStructuredData(language, t);
  }, [language, t]);

  const updateStructuredData = (lang: string, t: any) => {
    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    existingScripts.forEach((script) => script.remove());

    // Create Software Application structured data
    const softwareData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "The Uniflow",
      alternateName: ["TheUniflow", "Uniflow", "The-Uniflow", "Uni Flow"],
      applicationCategory: "EventApplication",
      operatingSystem: "iOS, Android, Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "1250",
      },
      description: t("meta.description"),
      url: "https://theuniflow.com",
      image: "https://theuniflow.com/og-image.png",
      author: {
        "@type": "Organization",
        name: "The Uniflow",
        alternateName: ["TheUniflow", "Uniflow", "The-Uniflow"],
        url: "https://theuniflow.com",
        logo: "https://theuniflow.com/logo.png",
        sameAs: [
          "https://www.linkedin.com/company/the-uniflow/",
          "https://www.instagram.com/theuniflow.tr/",
          "https://www.instagram.com/the.uniflow/",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+90-501-488-70-66",
          contactType: "Customer Support",
          email: "support@theuniflow.com",
          availableLanguage: ["Turkish", "English"],
        },
      },
      inLanguage: lang === "tr" ? "tr-TR" : "en-US",
    };

    // Create Organization structured data for brand searches
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "The Uniflow",
      alternateName: [
        "TheUniflow",
        "Uniflow",
        "The-Uniflow",
        "Uni Flow",
        "The Uni Flow",
      ],
      url: "https://theuniflow.com",
      logo: "https://theuniflow.com/logo.png",
      description: t("meta.description"),
      foundingDate: "2025",
      founders: [
        {
          "@type": "Organization",
          name: "Errnify",
          url: "https://errnify.com",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+90-501-488-70-66",
          contactType: "Customer Support",
          email: "support@theuniflow.com",
          availableLanguage: ["tr", "en"],
          areaServed: "Worldwide",
        },
      ],
      sameAs: [
        "https://www.linkedin.com/company/the-uniflow/",
        "https://www.instagram.com/theuniflow.tr/",
        "https://www.instagram.com/the.uniflow/",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Istanbul",
        addressCountry: "TR",
      },
    };

    // Create Website structured data
    const websiteData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "The Uniflow",
      alternateName: ["TheUniflow", "Uniflow", "The-Uniflow"],
      url: "https://theuniflow.com",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://theuniflow.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    };

    // Add all structured data scripts
    [softwareData, organizationData, websiteData].forEach((data) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(data);
      document.head.appendChild(script);
    });
  };

  return null;
};

export default SEO;
