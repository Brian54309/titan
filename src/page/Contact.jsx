import React from "react";
import location from "/location.png";
import email from "/email.png";
import phone from "/phone.png";

/*
  Same system as HomePage/About/Map/Navbar, sampled from logo.png.
  Light section uses the same cloud/purple tokens as the rest of the site;
  the WhatsApp section is a dark band (matching the Home CTA and the About
  map section) using the brightened dark palette from that pass:
  --ink-1: #591F94 / --ink-2: #2A1150 / --ink-3: #1C0B38
  --flare-orange: #FF9328  --flare-pink: #F0399E  --flare-blue: #3E74E0
  WhatsApp green (#25D366/#128C7E) is kept as-is since that's a recognized
  brand color for the channel itself, not part of Titan's palette.
*/

function Contact() {
  const phoneNumber = "6281547533299";
  const waLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

  const cards = [
    {
      img: location,
      title: "Cabang Utama",
      body: (
        <>
          Ruko Mangga Dua Square Blok F29
          <br />
          Jl. Gunung Sahari Raya No.1
          <br />
          Ancol - Pademangan Jakarta 14430
        </>
      ),
    },
    {
      img: email,
      title: "Email Address",
      body: (
        <a href="mailto:Cs@titan.co.id" className="kt-contact-link">
          Cs@titan.co.id
        </a>
      ),
    },
    {
      img: phone,
      title: "Phone Number",
      body: (
        <a href="tel:02162312401" className="kt-contact-link">
          021-62312401
        </a>
      ),
    },
  ];

  return (
    <>
      <style>{`
        .kt-display { font-family: 'Space Grotesk', system-ui, sans-serif; }
        .kt-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; letter-spacing: .06em; }

        .kt-contact-hero {
          background: radial-gradient(140% 160% at 15% 0%, #F6ECFA 0%, #FBF8FC 55%, #FBF8FC 100%);
        }

        .kt-contact-card {
          border: 1px solid #EEE7F5;
          border-radius: 20px;
          background: rgba(255,255,255,.85);
          backdrop-filter: blur(6px);
          padding: 2rem 1.5rem;
          transition: transform .25s ease, box-shadow .25s ease;
          max-width: 320px;
        }
        .kt-contact-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 34px rgba(97, 38, 139, .14);
        }
        .kt-contact-icon {
          width: 72px; height: 72px; border-radius: 18px;
          background: linear-gradient(135deg, rgba(251,123,15,.14), rgba(200,35,134,.14), rgba(39,83,177,.14));
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 1.25rem;
        }
        .kt-contact-link {
          color: #61268B;
          text-decoration: none;
          font-weight: 600;
          transition: color .2s ease;
        }
        .kt-contact-link:hover { color: #C82386; }

        .kt-wa-section {
          position: relative;
          overflow: hidden;
          background: radial-gradient(120% 160% at 80% 0%, #591F94 0%, #2A1150 55%, #1C0B38 100%);
        }
        .kt-wa-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(37, 211, 102, .3);
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          animation: kt-wa-pulse 3.2s ease-out infinite;
        }
        .kt-wa-ring:nth-child(2) { animation-delay: 1.1s; }
        .kt-wa-ring:nth-child(3) { animation-delay: 2.2s; }
        @keyframes kt-wa-pulse {
          0%   { width: 60px;  height: 60px;  opacity: .8; }
          100% { width: 420px; height: 420px; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .kt-wa-ring { animation: none; opacity: .15; }
        }

        .kt-wa-btn {
          background: linear-gradient(45deg, #25D366, #128C7E);
          border: none;
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .kt-wa-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 30px rgba(37, 211, 102, .4);
        }
      `}</style>

      {/* CONTACT CARDS */}
      <section className="kt-contact-hero py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="kt-mono d-block mb-2" style={{ color: "#C82386", fontSize: ".72rem" }}>
              HUBUNGI KAMI
            </span>
            <h1 className="kt-display display-5 fw-bold" style={{ color: "#61268B" }}>
              Hubungi Kami
            </h1>
          </div>

          <div className="row justify-content-center g-4">
            {cards.map((c, i) => (
              <div key={i} className="col-md-4 d-flex justify-content-center">
                <div className="kt-contact-card text-center w-100">
                  <div className="kt-contact-icon">
                    <img src={c.img} alt="" loading="lazy" style={{ height: "34px", width: "34px" }} />
                  </div>
                  <h5 className="kt-display fw-bold mb-3" style={{ color: "#61268B" }}>
                    {c.title}
                  </h5>
                  <p className="mb-0" style={{ color: "#5B5470", fontSize: "1.05rem", lineHeight: 1.7 }}>
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="kt-wa-section py-5 text-center">
        <span className="kt-wa-ring d-none d-md-block" />
        <span className="kt-wa-ring d-none d-md-block" />
        <span className="kt-wa-ring d-none d-md-block" />

        <div className="container position-relative py-4" style={{ zIndex: 2 }}>
          <h3 className="kt-display fw-bold text-white mb-3">Ngobrol langsung, lebih cepat</h3>
          <p className="mb-5 mx-auto" style={{ color: "rgba(255,255,255,.8)", maxWidth: "480px" }}>
            Kami siap melayani Anda. Klik tombol di bawah untuk menghubungi
            kami langsung melalui WhatsApp.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg kt-wa-btn d-inline-flex align-items-center gap-2 px-4 py-3 rounded-pill text-white"
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
      </section>
    </>
  );
}

export default Contact;