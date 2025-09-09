import React from "react";
import location from "/location.png";
import email from "/email.png";
import phone from "/phone.png";

function Contact() {
  const phoneNumber = "6281547533299";
  const waLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

  return (
    <>

      <section>
        <div
          className="text-center py-5"
          style={{
            background: "linear-gradient(to bottom, #F3F1FF, #E7F3FF)",
            paddingLeft: "6rem",
            paddingRight: "6rem",
          }}
        >
          <h1 className="fw-bold text-primary mb-4">Hubungi Kami</h1>
          <div className="row justify-content-around gx-2 pt-4 pb-4">

            <div className="col-md-4 d-flex justify-content-center mb-3">
              <div
                className="card border-1 px-3 py-3 bg-white bg-opacity-50 h-100 w-100"
                style={{ borderRadius: "1rem", maxWidth: "320px" }}
              >
                <img
                  src={location}
                  alt="Office Location"
                  loading="lazy"
                  className="card-img-top mx-auto mb-3 mt-3"
                  style={{ height: "70px", width: "70px" }}
                />
                <h5 className="card-title mt-4">Cabang Utama</h5>
                <p className="card-text mt-4">
                  Ruko Mangga Dua Square Blok F29<br />
                  Jl. Gunung Sahari Raya No.1<br />
                  Ancol - Pademangan Jakarta 14430
                </p>
              </div>
            </div>


            <div className="col-md-4 d-flex justify-content-center mb-3">
              <div
                className="card border-1 px-3 py-3 bg-white bg-opacity-50 h-100 w-100"
                style={{ borderRadius: "1rem", maxWidth: "320px" }}
              >
                <img
                  src={email}
                  alt="Support Email"
                  loading="lazy"
                  className="card-img-top mx-auto mb-3 mt-3"
                  style={{ height: "70px", width: "70px" }}
                />
                <h5 className="card-title mt-4">Email Address</h5>
                <p className="card-text mt-4" style={{ fontSize: "20px" }}>
                  <a href="mailto:Cs@titan.co.id" className="text-decoration-none text-dark">
                    Cs@titan.co.id
                  </a>
                </p>
              </div>
            </div>

            <div className="col-md-4 d-flex justify-content-center mb-3">
              <div
                className="card border-1 px-3 py-3 bg-white bg-opacity-50 h-100 w-100"
                style={{ borderRadius: "1rem", maxWidth: "320px" }}
              >
                <img
                  src={phone}
                  alt="Customer Phone"
                  loading="lazy"
                  className="card-img-top mx-auto mb-3 mt-3"
                  style={{ height: "70px", width: "70px" }}
                />
                <h5 className="card-title mt-4">Phone Number</h5>
                <p className="card-text mt-4" style={{ fontSize: "20px" }}>
                  <a href="tel:02162312401" className="text-decoration-none text-dark">
                    021-62312401
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          className="text-center py-5"
          style={{ background: "linear-gradient(to bottom, #E7F3FF, #ffffff)" }}
        >
          <div className="container">
            <p className="lead text-muted mb-5">
              Kami siap melayani Anda! Klik tombol di bawah ini untuk
              menghubungi kami langsung melalui WhatsApp.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-lg d-inline-flex align-items-center gap-2 px-4 py-2 shadow-lg rounded-pill"
              style={{
                backgroundImage: "linear-gradient(45deg, #25D366, #128C7E)",
                border: "none",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                loading="lazy"
                style={{ width: "24px" }}
              />
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
