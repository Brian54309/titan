// src/components/Seo.jsx
import { Helmet } from "react-helmet-async";

/*
  Usage (inside any page component, anywhere in its JSX):

    <Seo
      title="Tentang Kami"
      description="PT Titan Agung Persada — distributor resmi K-Vision, Nex Parabola, Matrix, dan Broco di seluruh Indonesia."
      path="/about"
    />

  Notes:
  - `title` gets " | PT Titan Agung Persada" appended automatically.
  - `path` should be the route path (e.g. "/", "/about", "/contact") — used
    to build the canonical URL.
  - This covers <title>, meta description, and canonical for search engines
    (Google executes JS, so this works for Google). It deliberately does NOT
    set og:* tags -- those live only in index.html as static fallbacks,
    because non-JS crawlers (WhatsApp, Facebook, LinkedIn, Twitter) never
    see anything Helmet renders. Duplicating og:title/og:description here
    used to produce two competing sets of OG tags in the rendered head;
    index.html is now the single source of truth for those.
*/

const SITE_URL = "https://titan.id";
const SITE_NAME = "PT Titan Agung Persada";
const DEFAULT_DESCRIPTION =
  "Distributor resmi K-Vision, Nex Parabola, Matrix, dan Broco. Melayani ribuan mitra di seluruh Indonesia dengan sistem logistik yang efisien.";

export default function Seo({ title, description = DEFAULT_DESCRIPTION, path = "/" }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
}