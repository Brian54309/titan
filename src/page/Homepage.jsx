// src/components/HomePage.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "/logo.png";
import kvision from "/kvision.png";
import nex from "/nex.png";
import broco from "/broco.png";
import matrix from "/matrix.png";
import truck from "/truck.png";
import quality from "/quality.png";
import location from "/location.png";
import tv from "/tv.png";
import { Link } from "react-router-dom";
import Seo from "../component/Seo"

/*
  Palette — sampled directly from logo.png, no separate stylesheet:
  --ink:          #170B2E  (hero background, near-black plum)
  --brand-purple: #61268B  (solid wordmark purple — headings on light sections)
  --flare-orange: #FB7B0F  (logo top)
  --flare-pink:   #C82386  (logo mid-left)
  --flare-indigo: #4D3394  (logo lower-mid)
  --flare-blue:   #2753B1  (logo bottom)
  --cloud:        #FBF8FC  (light section background, warm-lavender white)
  --slate:        #5B5470  (muted body text, purple-tinted gray)

  The signature gradient (orange -> pink -> indigo -> blue) is the same
  diagonal used in the logo mark itself, reused everywhere as the one
  accent: buttons, rings, coverage dots, icon badges.

  Fonts: Space Grotesk (display) + Inter (body) + IBM Plex Mono (labels/stats).
  Add once in index.html <head>:
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet">

  Note: logo.png needs to live in /public alongside the other brand assets
  for the "/logo.png" import path to resolve.
*/

const REGIONS = [
  "Jabodetabek",
  "Jawa Barat",
  "Jawa Tengah",
  "Jawa Timur",
  "Sumatra",
  "Kalimantan",
  "Sulawesi",
  "Luar Jawa",
];

const PRODUCTS = [
  { img: nex, path: "/nex", name: "Nex" },
  { img: kvision, path: "/kvision", name: "KVision" },
  { img: matrix, path: "/matrix", name: "Matrix" },
  { img: broco, path: "/broco", name: "Broco" },
];

const FEATURES = [
  {
    img: truck,
    title: "Pengiriman Cepat",
    desc: "Kami pastikan produk sampai dengan aman dan tepat waktu.",
  },
  {
    img: quality,
    title: "Produk Berkualitas",
    desc: "Hanya menjual produk dari brand terpercaya.",
  },
  {
    img: location,
    title: "Distribusi Multi-Lokasi",
    desc: "Melayani banyak wilayah strategis, dari Jabodetabek hingga luar Pulau Jawa.",
  },
];

function HomePage() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#20233A" }}>
      <Seo
        title="Distributor K-Vision, Nex Parabola, Matrix & Broco"
        description="PT Titan Agung Persada — distributor resmi perangkat TV berbayar dan komponen elektronik, melayani ribuan mitra di seluruh Indonesia."
        path="/"
      />
      {/* Scoped styles — replaces homepage.css. */}
      <style>{`
        .kt-display { font-family: 'Space Grotesk', system-ui, sans-serif; }
        .kt-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; letter-spacing: .06em; }

        .kt-hero {
          position: relative;
          overflow: hidden;
          background: radial-gradient(120% 140% at 78% 15%, #591F94 0%, #2A1150 55%, #1C0B38 100%);
        }
        .kt-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(240, 57, 158, 0.5);
          top: 50%;
          right: -4%;
          transform: translateY(-50%);
          animation: kt-pulse 3.6s ease-out infinite;
        }
        .kt-ring:nth-child(2) { animation-delay: 1.2s; border-color: rgba(255,147,40,.45); }
        .kt-ring:nth-child(3) { animation-delay: 2.4s; border-color: rgba(62,116,224,.5); }
        @keyframes kt-pulse {
          0%   { width: 80px;  height: 80px;  opacity: .9; }
          100% { width: 620px; height: 620px; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .kt-ring { animation: none; opacity: .2; }
        }

        /* Hero device panel — grounds the TV image instead of floating it */
        .kt-device-glow {
          position: absolute;
          inset: -12%;
          background: radial-gradient(closest-side, rgba(240,57,158,.5), rgba(255,147,40,.28) 45%, transparent 72%);
          filter: blur(30px);
        }
        .kt-device-panel {
          position: relative;
          border-radius: 28px;
          padding: 2.25rem;
          background: linear-gradient(160deg, rgba(255,255,255,.08), rgba(255,255,255,.02));
          border: 1px solid rgba(255,255,255,.14);
          backdrop-filter: blur(6px);
        }
        .kt-device-platform {
          position: absolute;
          left: 50%;
          bottom: 6%;
          transform: translateX(-50%);
          width: 78%;
          height: 34px;
          background: radial-gradient(closest-side, rgba(0,0,0,.45), transparent 70%);
          filter: blur(4px);
        }

        .kt-btn-primary {
          background: linear-gradient(135deg, #FF9328, #F0399E 55%, #3E74E0);
          border: none;
          color: #fff;
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .kt-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(240, 57, 158, .45);
          color: #fff;
        }
        .kt-btn-ghost {
          border: 1px solid rgba(255,255,255,.35);
          color: #fff;
          background: transparent;
          transition: background .2s ease, border-color .2s ease;
        }
        .kt-btn-ghost:hover {
          background: rgba(255,255,255,.08);
          border-color: rgba(255,255,255,.6);
          color: #fff;
        }

        .kt-product-card {
          border: 1px solid #EEE7F5;
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .kt-product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 30px rgba(200, 35, 134, .14);
          border-color: #E6C9E3;
        }

        .kt-feature-card {
          border: 1px solid #EEE7F5;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .kt-feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 26px rgba(97, 38, 139, .10);
        }
        .kt-icon-badge {
          width: 56px; height: 56px; border-radius: 14px;
          background: linear-gradient(135deg, rgba(251,123,15,.14), rgba(200,35,134,.14), rgba(39,83,177,.14));
          display: flex; align-items: center; justify-content: center;
        }

        .kt-coverage {
          background: #2A1150;
          overflow: hidden;
        }
        .kt-coverage-track {
          display: flex;
          gap: 2.5rem;
          width: max-content;
          animation: kt-scroll 22s linear infinite;
        }
        .kt-coverage:hover .kt-coverage-track { animation-play-state: paused; }
        @keyframes kt-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .kt-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #F0399E;
          animation: kt-dot-pulse 2.2s ease-in-out infinite;
        }
        @keyframes kt-dot-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(240,57,158,.6); }
          70%  { box-shadow: 0 0 0 8px rgba(240,57,158,0); }
          100% { box-shadow: 0 0 0 0 rgba(240,57,158,0); }
        }

        .kt-cta {
          background: radial-gradient(120% 160% at 20% 0%, #591F94 0%, #2A1150 60%);
        }

        .kt-text-dim { color: rgba(255,255,255,.78); }
      `}</style>

      {/* HERO */}
      <section className="kt-hero py-5 py-lg-0" style={{ minHeight: "580px" }}>
        <span className="kt-ring d-none d-md-block" />
        <span className="kt-ring d-none d-md-block" />
        <span className="kt-ring d-none d-md-block" />

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="pt-4 pb-2 pb-lg-0">
            <img src={logo} alt="PT Titan Agung Persada" style={{ height: "36px", filter: "brightness(0) invert(1)", opacity: 0.92 }} />
          </div>

          <div className="row align-items-center" style={{ minHeight: "500px" }}>
            <div className="col-lg-7 py-5 py-lg-0 text-center text-lg-start">
              <span
                className="kt-mono badge rounded-pill px-3 py-2 mb-4"
                style={{ background: "rgba(240,57,158,.22)", color: "#FFB3DE", fontSize: ".7rem" }}
              >
                DISTRIBUTOR RESMI &middot; SEJAK 2009
              </span>
              <h1 className="kt-display display-4 fw-bold text-white mb-3">
                Sinyal sampai,<br className="d-none d-lg-block" /> kualitas terjaga.
              </h1>
              <p className="lead mb-4" style={{ color: "rgba(255,255,255,.85)", maxWidth: "480px" }}>
                PT Titan Agung Persada mendistribusikan perangkat TV terpercaya
                ke ribuan mitra di seluruh Indonesia.
              </p>
              <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start mb-5">
                <a href="#produk" className="btn kt-btn-primary btn-lg px-4 rounded-3">
                  Lihat Produk
                </a>
                <a href="/contact" className="btn kt-btn-ghost btn-lg px-4 rounded-3">
                  Hubungi Kami
                </a>
              </div>

              <div className="row kt-mono kt-text-dim g-3" style={{ maxWidth: "420px", margin: "0 auto 0 0" }}>
                <div className="col-4 text-center text-lg-start">
                  <div className="fs-4 fw-bold text-white">15+</div>
                  <div style={{ fontSize: ".68rem" }}>TAHUN BEROPERASI</div>
                </div>
                <div className="col-4 text-center text-lg-start">
                  <div className="fs-4 fw-bold text-white">500+</div>
                  <div style={{ fontSize: ".68rem" }}>MITRA AKTIF</div>
                </div>
                <div className="col-4 text-center text-lg-start">
                  <div className="fs-4 fw-bold text-white">34</div>
                  <div style={{ fontSize: ".68rem" }}>PROVINSI</div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block">
              <div className="position-relative">
                <div className="kt-device-glow" />
                <div className="kt-device-panel">
                  <div className="kt-device-platform" />
                  <img
                    src={tv}
                    alt="Remote control and TV"
                    className="img-fluid position-relative"
                    style={{ maxHeight: "300px", objectFit: "contain", width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="produk" className="py-5" style={{ background: "#FBF8FC" }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="kt-mono" style={{ color: "#C82386", fontSize: ".72rem" }}>
              BRAND YANG KAMI DISTRIBUSIKAN
            </span>
            <h2 className="kt-display fw-bold mt-2" style={{ color: "#61268B" }}>
              Produk Kami
            </h2>
          </div>
          <div className="row justify-content-center g-4">
            {PRODUCTS.map((p, i) => (
              <div key={i} className="col-6 col-md-3">
                <Link to={p.path} className="text-decoration-none">
                  <div className="kt-product-card rounded-4 bg-white p-4 h-100 d-flex align-items-center justify-content-center">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="img-fluid"
                      style={{ maxHeight: "110px", objectFit: "contain" }}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE — signature element: scrolling, pulsing region strip */}
      <section className="kt-coverage py-4">
        <div className="container-fluid px-0">
          <div className="kt-coverage-track">
            {[...REGIONS, ...REGIONS].map((r, i) => (
              <div key={i} className="d-flex align-items-center gap-2 kt-mono kt-text-dim" style={{ fontSize: ".78rem", whiteSpace: "nowrap" }}>
                <span className="kt-dot" />
                {r}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="kt-mono" style={{ color: "#C82386", fontSize: ".72rem" }}>
              KENAPA KAMI
            </span>
            <h2 className="kt-display fw-bold mt-2" style={{ color: "#61268B" }}>
              Mengapa Memilih Kami?
            </h2>
          </div>
          <div className="row g-4">
            {FEATURES.map((f, i) => (
              <div key={i} className="col-md-4">
                <div className="kt-feature-card rounded-4 p-4 h-100 bg-white">
                  <div className="kt-icon-badge mb-3">
                    <img src={f.img} alt="" style={{ height: "28px" }} />
                  </div>
                  <h5 className="kt-display fw-semibold mb-2" style={{ color: "#61268B" }}>
                    {f.title}
                  </h5>
                  <p className="mb-0" style={{ color: "#5B5470" }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="kt-cta py-5 text-center">
        <div className="container py-3">
          <h3 className="kt-display fw-bold text-white mb-3">
            Siap jadi mitra distribusi kami?
          </h3>
          <p className="mb-4" style={{ color: "rgba(255,255,255,.8)" }}>
            Diskusikan kebutuhan produk TV Anda dengan tim kami.
          </p>
          <a href="/contact" className="btn kt-btn-primary btn-lg px-5 rounded-3">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

export default HomePage;