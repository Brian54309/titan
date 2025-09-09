// src/components/About.jsx
import React from "react";
import pole from "/pole.jpg";
import Locations from "../component/Map";
import vision from "/vision.png";
import target from "/target.png";
import "./about.css"

function About() {
  return (
    <div>
      <section
        className="text-center py-5"
        style={{ background: "linear-gradient(to bottom, #EFEAFF, #F3F1FF)" }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold text-primary mb-3">Tentang Kami</h1>
          <p className="lead mb-5">
            PT Titan Agung Persada adalah perusahaan distributor yang
            berkomitmen menghadirkan produk berkualitas
          </p>

          <div className="row align-items-center">
            <div className="col-md-6 order-2 order-md-1 mt-4 mt-md-0">
              <h3 className="fw-bold text-primary mb-3">Siapa Kami</h3>
              <p className="text-muted">
                Sejak berdiri, kami telah menjadi mitra terpercaya bagi
                brand-brand terkemuka seperti K-Vision, Nex Parabola, Matrix,
                dan Broco. Kami mendistribusikan komponen listrik dan perangkat
                elektronik ke berbagai wilayah di Indonesia dengan sistem
                logistik yang efisien dan layanan profesional.
              </p>
            </div>
            <div className="col-md-6 order-1 order-md-2 text-center">
              <img
                src={pole}
                alt="Distribusi Produk"
                className="img-fluid pole-img"
                style={{ maxHeight: "400px", objectFit: "cover",
                  boxShadow: "0 0 30px rgba(120, 150, 255, 0.3)" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          className="row justify-content-center g-4 pb-5 text-dark"
          style={{
            background: "linear-gradient(to bottom, #F3F1FF, #E7F3FF)",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <div className="col-md-5 col-lg-4">
            <div
              className="card h-100 shadow-sm p-4 border-0 bg-white bg-opacity-50"
              style={{
                backdropFilter: "blur(6px)",
                borderRadius: "20px",
              }}
            >
              <div className="d-flex align-items-center mb-3">
                <img
                  src={vision}
                  alt="Vision"
                  style={{ width: "80px", height: "80px" }}
                  className="me-3"
                  loading="lazy"
                />
                <h4 className="fw-bold text-primary m-0">Visi</h4>
              </div>
              <p style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                Menjadi distributor terpercaya di Indonesia dalam penyediaan
                perangkat elektronik, set top box, dan komponen listrik yang
                inovatif, berkualitas, serta mudah dijangkau oleh masyarakat.
              </p>
            </div>
          </div>

          <div className="col-md-5 col-lg-4">
            <div
              className="card h-100 shadow-sm p-4 border-0 bg-white bg-opacity-50"
              style={{
                backdropFilter: "blur(6px)",
                borderRadius: "20px",
              }}
            >
              <div className="d-flex align-items-center mb-3">
                <img
                  src={target}
                  alt="Mission"
                  style={{ width: "80px", height: "80px" }}
                  className="me-3"
                  loading="lazy"
                />
                <h4 className="fw-bold text-success m-0">Misi</h4>
              </div>
              <ul
                className="list-unstyled"
                style={{ fontSize: "1rem", lineHeight: "1.7" }}
              >
                <li className="mb-2">
                  ✅ <b>Menyediakan produk berkualitas</b> dari brand terpercaya
                  untuk memenuhi kebutuhan pelanggan di bidang elektronik, STB,
                  dan kelistrikan.
                </li>
                <li className="mb-2">
                  ✅ <b>Mengembangkan jaringan distribusi yang luas dan efisien</b>{" "}
                  agar produk mudah diakses di seluruh wilayah Indonesia.
                </li>
                <li className="mb-2">
                  ✅ <b>Memberikan layanan pelanggan yang responsif dan profesional</b>{" "}
                  untuk membangun kepercayaan jangka panjang.
                </li>
                <li className="mb-2">
                  ✅ <b>Mendukung digitalisasi masyarakat</b> dengan menghadirkan
                  solusi hiburan (STB & TV berbayar) serta kebutuhan kelistrikan
                  secara online dan offline.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Locations />
      </section>
    </div>
  );
}

export default About;
