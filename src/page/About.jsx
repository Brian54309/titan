// src/components/About.jsx
import React from "react";
import pole from "/pole.jpg";
import Locations from "../component/Map";
import vision from "/vision.png";
import target from "/target.png";

/*
  Same palette/system as HomePage.jsx and Navbar.jsx, sampled from logo.png:
  --ink:          #170B2E
  --brand-purple: #61268B
  --flare-orange: #FB7B0F
  --flare-pink:   #C82386
  --flare-blue:   #2753B1
  --cloud:        #FBF8FC
  --slate:        #5B5470

  about.css is gone. The old .pole-img::after gradient overlay was applied
  directly to the <img> element -- browsers don't render ::after content on
  replaced elements like <img>, so that fade never actually painted. Fixed
  here the same way as the homepage hero image: the image sits inside a
  wrapping panel, and the glow/fade are real sibling elements.
*/

function About() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#20233A" }}>
      <style>{`
        .kt-display { font-family: 'Space Grotesk', system-ui, sans-serif; }
        .kt-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; letter-spacing: .06em; }

        .kt-about-hero {
          background: radial-gradient(140% 160% at 15% 0%, #F6ECFA 0%, #FBF8FC 55%, #FBF8FC 100%);
        }

        .kt-pole-glow {
          position: absolute;
          inset: -10%;
          background: radial-gradient(closest-side, rgba(200,35,134,.22), rgba(251,123,15,.12) 45%, transparent 72%);
          filter: blur(26px);
          z-index: 0;
        }
        .kt-pole-panel {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          z-index: 1;
          box-shadow: 0 20px 40px rgba(97, 38, 139, .16);
        }
        .kt-pole-panel img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .kt-pole-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(23,11,46,.55) 0%, transparent 45%);
          pointer-events: none;
        }

        .kt-value-card {
          border: 1px solid #EEE7F5;
          border-radius: 20px;
          backdrop-filter: blur(6px);
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .kt-value-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 34px rgba(97, 38, 139, .12);
        }
        .kt-value-icon {
          width: 64px; height: 64px; border-radius: 16px;
          background: linear-gradient(135deg, rgba(251,123,15,.14), rgba(200,35,134,.14), rgba(39,83,177,.14));
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .kt-check {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px; height: 22px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FB7B0F, #C82386 55%, #2753B1);
          flex-shrink: 0;
        }
        .kt-mission-item {
          display: flex;
          gap: .75rem;
          align-items: flex-start;
        }

        .kt-map-section {
          background: radial-gradient(120% 140% at 25% 0%, #4B1F7A 0%, #2A1150 55%, #1C0B38 100%);
        }
      `}</style>

      {/* INTRO */}
      <section className="kt-about-hero py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="kt-mono d-block mb-2" style={{ color: "#C82386", fontSize: ".72rem" }}>
              PROFIL PERUSAHAAN
            </span>
            <h1 className="kt-display display-5 fw-bold mb-3" style={{ color: "#61268B" }}>
              Tentang Kami
            </h1>
            <p className="lead mx-auto" style={{ color: "#5B5470", maxWidth: "560px" }}>
              PT Titan Agung Persada adalah perusahaan distributor yang
              berkomitmen menghadirkan produk berkualitas.
            </p>
          </div>

          <div className="row align-items-center g-5">
            <div className="col-md-6 order-2 order-md-1">
              <h3 className="kt-display fw-bold mb-3" style={{ color: "#61268B" }}>
                Siapa Kami
              </h3>
              <p style={{ color: "#5B5470", lineHeight: 1.8 }}>
                Sejak berdiri, kami telah menjadi mitra terpercaya bagi
                brand-brand terkemuka seperti K-Vision, Nex Parabola, Matrix,
                dan Broco. Kami mendistribusikan komponen listrik dan perangkat
                elektronik ke berbagai wilayah di Indonesia dengan sistem
                logistik yang efisien dan layanan profesional.
              </p>
            </div>
            <div className="col-md-6 order-1 order-md-2">
              <div className="position-relative" style={{ maxWidth: "460px", margin: "0 auto" }}>
                <div className="kt-pole-glow" />
                <div className="kt-pole-panel" style={{ height: "360px" }}>
                  <img src={pole} alt="Distribusi Produk" loading="lazy" />
                  <div className="kt-pole-fade" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="py-5" style={{ background: "linear-gradient(to bottom, #F6ECFA, #EDF2FC)" }}>
        <div className="container py-3">
          <div className="row justify-content-center g-4">
            <div className="col-md-5 col-lg-4">
              <div className="kt-value-card h-100 p-4 bg-white bg-opacity-75">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="kt-value-icon">
                    <img src={vision} alt="" style={{ width: "34px", height: "34px" }} loading="lazy" />
                  </div>
                  <h4 className="kt-display fw-bold m-0" style={{ color: "#61268B" }}>Visi</h4>
                </div>
                <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#5B5470" }}>
                  Menjadi distributor terpercaya di Indonesia dalam penyediaan
                  perangkat elektronik, set top box, dan komponen listrik yang
                  inovatif, berkualitas, serta mudah dijangkau oleh masyarakat.
                </p>
              </div>
            </div>

            <div className="col-md-5 col-lg-4">
              <div className="kt-value-card h-100 p-4 bg-white bg-opacity-75">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="kt-value-icon">
                    <img src={target} alt="" style={{ width: "34px", height: "34px" }} loading="lazy" />
                  </div>
                  <h4 className="kt-display fw-bold m-0" style={{ color: "#61268B" }}>Misi</h4>
                </div>
                <ul className="list-unstyled m-0" style={{ fontSize: "1rem" }}>
                  <li className="kt-mission-item mb-3">
                    <span className="kt-check mt-1">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8.5L6.2 11.5L13 4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ lineHeight: 1.7, color: "#3A3450" }}>
                      <b>Menyediakan produk berkualitas</b> dari brand terpercaya
                      untuk memenuhi kebutuhan pelanggan di bidang elektronik, STB,
                      dan kelistrikan.
                    </span>
                  </li>
                  <li className="kt-mission-item mb-3">
                    <span className="kt-check mt-1">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8.5L6.2 11.5L13 4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ lineHeight: 1.7, color: "#3A3450" }}>
                      <b>Mengembangkan jaringan distribusi yang luas dan efisien</b>{" "}
                      agar produk mudah diakses di seluruh wilayah Indonesia.
                    </span>
                  </li>
                  <li className="kt-mission-item mb-3">
                    <span className="kt-check mt-1">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8.5L6.2 11.5L13 4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ lineHeight: 1.7, color: "#3A3450" }}>
                      <b>Memberikan layanan pelanggan yang responsif dan profesional</b>{" "}
                      untuk membangun kepercayaan jangka panjang.
                    </span>
                  </li>
                  <li className="kt-mission-item">
                    <span className="kt-check mt-1">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8.5L6.2 11.5L13 4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ lineHeight: 1.7, color: "#3A3450" }}>
                      <b>Mendukung digitalisasi masyarakat</b> dengan menghadirkan
                      solusi hiburan (STB & TV berbayar) serta kebutuhan kelistrikan
                      secara online dan offline.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE MAP */}
      <section className="kt-map-section py-5">
        <div className="container py-3">
          <div className="text-center mb-4">
            <span className="kt-mono d-block mb-2" style={{ color: "#FFB3DE", fontSize: ".72rem" }}>
              JANGKAUAN KAMI
            </span>
            <h2 className="kt-display fw-bold text-white">Lokasi Distribusi</h2>
          </div>
          <Locations />
        </div>
      </section>
    </div>
  );
}

export default About;