// src/components/LocalBusinessSchema.jsx
import { Helmet } from "react-helmet-async";

/*
  Structured data for Google's Knowledge Panel / local pack. One entry per
  branch, matching the data already used in Map.jsx and Contact.jsx. If a
  branch address/phone changes there, update it here too -- kept as plain
  data rather than importing from Map.jsx since Map.jsx's data includes
  Google Maps embed strings this schema doesn't need.

  Test after deploying: https://search.google.com/test/rich-results
*/

const SITE_URL = "https://tita.id"// TODO: replace with real domain

const BRANCHES = [
  {
    name: "PT Titan Agung Persada - Cabang Jakarta",
    streetAddress: "Ruko Mangga Dua Square Blok F29, Jl. Gunung Sahari Raya No.1",
    addressLocality: "Jakarta Utara",
    addressRegion: "DKI Jakarta",
    postalCode: "14420",
    telephone: "+62-21-62312401",
  },
  {
    name: "PT Titan Agung Persada - Cabang Surabaya",
    streetAddress: "ITC Surabaya Mega Grosir Lantai 2 Blok L6 No.5-6",
    addressLocality: "Surabaya",
    addressRegion: "Jawa Timur",
    postalCode: "",
    telephone: "+62-856-3211-657",
  },
  {
    name: "PT Titan Agung Persada - Cabang Bali",
    streetAddress: "Jln Gunung Salak, Perum Bali Arum No.66, Krobokan",
    addressLocality: "Kuta Utara, Badung",
    addressRegion: "Bali",
    postalCode: "",
    telephone: "+62-878-6133-7257",
  },
];

export default function LocalBusinessSchema() {
  const jsonLd = BRANCHES.map((b) => ({
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    name: b.name,
    url: SITE_URL,
    telephone: b.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: b.streetAddress,
      addressLocality: b.addressLocality,
      addressRegion: b.addressRegion,
      postalCode: b.postalCode || undefined,
      addressCountry: "ID",
    },
  }));

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}