// src/components/HomePage.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import kvision from "/kvision.png";
import nex from "/nex.png";
import broco from "/broco.png";
import matrix from "/matrix.png";
import truck from "/truck.png";
import quality from "/quality.png";
import location from "/location.png";
import tv from "/tv.png";
import { Link } from "react-router-dom";
import "./homepage.css";

function HomePage() {
  const products = [
    { img: nex, path: "/nex", name: "Nex" },
    { img: kvision, path: "/kvision", name: "KVision" },
    { img: matrix, path: "/matrix", name: "Matrix" },
    { img: broco, path: "/broco", name: "Broco" },
  ];

  return (
    <div>
      <section
        className="py-5"
        style={{ background: "linear-gradient(to bottom, #EFEAFF, #F3F1FF)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-5 fw-bold text-primary">
                Distribusi Terpercaya
              </h1>
              <p className="lead text-dark">
                PT Titan Agung Persada memberikan distribusi kualitas terbaik
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src={tv}
                alt="Remote control and TV"
                className="img-fluid image-fade"
                style={{
                  maxHeight: "300px",
                  objectFit: "cover",
                  boxShadow: "0 0 30px rgba(120, 150, 255, 0.3)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="text-center py-5"
        style={{ background: "linear-gradient(to bottom, #F3F1FF, #E7F3FF)" }}
      >
        <div className="container">
          <h1 className="display-5 fw-bold text-primary mb-5">Produk Kami</h1>
          <div className="row justify-content-center align-items-center g-4">
            {products.map((p, i) => (
              <div
                key={i}
                className="col-6 col-md-3 d-flex justify-content-center align-items-center"
              >
                <div
                  style={{ width: "100%", maxWidth: "250px", height: "200px" }}
                  className="p-2"
                >
                  <Link to={p.path}>
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="img-fluid hover-zoom"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-5 text-center"
        style={{ background: "linear-gradient(to bottom, #E7F3FF, #ffffff)" }}
      >
        <div className="container">
          <h2 className="fw-bold text-primary mb-3">Mengapa Memilih Kami?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 bg-white bg-opacity-25">
                <div className="card-body">
                  <img
                    src={truck}
                    alt="Truck Icon"
                    loading="lazy"
                    className="mb-3"
                    style={{ height: "60px" }}
                  />
                  <h5 className="mt-3">Pengiriman Cepat</h5>
                  <p className="text-muted">
                    Kami pastikan produk sampai dengan aman dan tepat waktu.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 bg-white bg-opacity-25">
                <div className="card-body">
                  <img
                    src={quality}
                    alt="Quality Icon"
                    loading="lazy"
                    className="mb-3"
                    style={{ height: "60px" }}
                  />
                  <h5 className="mt-3">Produk Berkualitas</h5>
                  <p className="text-muted">
                    Hanya menjual produk dari brand terpercaya.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 bg-white bg-opacity-25">
                <div className="card-body">
                  <img
                    src={location}
                    alt="Location Icon"
                    loading="lazy"
                    className="mb-3"
                    style={{ height: "60px" }}
                  />
                  <h5 className="mt-3">Distribusi Multi-Lokasi</h5>
                  <p className="text-muted">
                    Kami melayani banyak wilayah strategis di Indonesia, dari
                    Jabodetabek hingga luar Pulau Jawa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-4 bg-white">
        <a href="/contact" className="btn btn-primary btn-lg mt-4">
          Get in Touch
        </a>
      </section>
    </div>
  );
}

export default HomePage;
