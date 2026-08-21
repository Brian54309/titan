// src/components/OrganizationSchema.jsx
import { Helmet } from "react-helmet-async";

/*
  Mount this ONCE, sitewide -- e.g. directly in App.jsx near the top level
  (not per-page like Seo.jsx). This is different from LocalBusinessSchema.jsx
  (which describes the 3 physical branches, and only lives on Contact):
  this describes the COMPANY as a single entity, which is what helps Google
  connect the domain to the exact name "PT Titan Agung Persada" for brand-
  name searches, and is a prerequisite for a Knowledge Panel / logo-in-
  search-results treatment.

  sameAs: add any official social profiles you actually have (Instagram,
  Facebook, LinkedIn, YouTube). Each verified link here is a signal that
  strengthens the same-entity connection. Leave the array empty/remove
  entries you don't have -- a broken or unrelated link here does more harm
  than no link at all.
*/

const SITE_URL = "https://titan.id";

export default function OrganizationSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PT Titan Agung Persada",
    alternateName: "Titan Agung Persada",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    foundingDate: "2009",
    description:
      "Distributor resmi K-Vision, Nex Parabola, Matrix, dan Broco, melayani ribuan mitra di seluruh Indonesia.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ruko Mangga Dua Square Blok F29, Jl. Gunung Sahari Raya No.1",
      addressLocality: "Jakarta Utara",
      addressRegion: "DKI Jakarta",
      postalCode: "14420",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-21-62312401",
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["id", "en"],
    },
    sameAs: [
      // "https://www.instagram.com/titanagungpersada",
      // "https://www.facebook.com/titanagungpersada",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}