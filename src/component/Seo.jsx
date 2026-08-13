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
    to build the canonical URL. Update SITE_URL below to your real domain
    once it's live.
  - This covers <title>, meta description, and canonical for search engines
    (Google executes JS, so this works for Google). It does NOT help
    WhatsApp/Facebook link previews, since those crawlers don't run JS —
    that's handled separately by the static Open Graph tags in index.html.
*/

const SITE_URL = "https://titan.id"; // TODO: replace with real domain
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

      {/* Per-page OG tags -- these won't be seen by non-JS crawlers (see
          index.html for the static fallback), but they DO get picked up
          by anything that renders after JS runs, and don't hurt. */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}