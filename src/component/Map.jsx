import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

/*
  Same palette as HomePage/Navbar/About, sampled from logo.png.
  This component no longer carries its own page background (the old
  "linear-gradient(#E7F3FF, #fff)" would clash with whatever section it's
  dropped into -- in About.jsx it now sits on a dark ink-plum band). It's
  designed as a glass panel meant to sit on a dark surface. If you use it
  somewhere with a light background, swap `.kt-loc-*` text colors to dark
  and drop the bg-opacity-10 glass treatment for a solid white card.
*/

const PIN_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M12 22s7-7.58 7-13A7 7 0 0 0 5 9c0 5.42 7 13 7 13Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
    <circle cx="12" cy="9" r="2.4" stroke="white" strokeWidth="1.8" />
  </svg>
);

const PHONE_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M6.6 10.8c1.3 2.7 3.9 5.3 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z"
      stroke="white"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Locations() {
  const [activeTab, setActiveTab] = useState("jakarta");

  const locations = {
    jakarta: {
      title: "Jakarta",
      fullTitle: "Cabang Jakarta",
      address: "Ruko Mangga Dua Square Blok F29 Jl. Gunung Sahari Raya No.1",
      phone: "021-62312401",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d495.8664597787237!2d106.8312484663721!3d-6.13988066534472!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5f7371bce11%3A0xc4b3ae9e8958f1af!2sJl.%20Gn.%20Sahari%20No.1%2C%20RT.12%2FRW.6%2C%20Ancol%2C%20Kec.%20Pademangan%2C%20Jkt%20Utara%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2014420!5e0!3m2!1sen!2sid!4v1755227892641!5m2!1sen!2sid.",
    },
    surabaya: {
      title: "Surabaya",
      fullTitle: "Cabang Surabaya",
      address: "ITC Surabaya Mega Grosir Lantai 2 Blok L6 N0.5-6",
      phone: "0856-3211-657",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.9937486824365!2d112.74349457590264!3d-7.2415486711286485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f911623bd455%3A0x13126f6f6481985d!2sITC%20Mega%20Grosir%20Surabaya!5e0!3m2!1sen!2sid!4v1755228042572!5m2!1sen!2sid",
    },
    bali: {
      title: "Bali",
      fullTitle: "Cabang Bali",
      address: "Jln Gunung Salak, Perum Bali Arum No.66, Krobokan, Kuta Utara, Badung",
      phone: "+6287861337257",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3944.352787637434!2d115.17491047501458!3d-8.657958291389315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMzknMjguNyJTIDExNcKwMTAnMzkuMCJF!5e0!3m2!1sen!2sid!4v1755230272892!5m2!1sen!2sid",
    },
  };

  const location = locations[activeTab];

  return (
    <div className="container-fluid px-0">
      <style>{`
        .kt-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; letter-spacing: .06em; }

        .kt-loc-tabs {
          display: inline-flex;
          gap: .25rem;
          padding: .3rem;
          border-radius: 999px;
          background: rgba(255,255,255,.1);
          border: 1px solid rgba(255,255,255,.2);
        }
        .kt-loc-tab {
          border: none;
          background: transparent;
          color: rgba(255,255,255,.78);
          font-weight: 500;
          font-size: .9rem;
          padding: .5rem 1.15rem;
          border-radius: 999px;
          transition: color .2s ease, background .2s ease;
        }
        .kt-loc-tab:hover { color: #fff; }
        .kt-loc-tab.active {
          color: #fff;
          background: linear-gradient(135deg, #FF9328, #F0399E 55%, #3E74E0);
        }

        .kt-loc-card {
          border-radius: 20px;
          background: rgba(255,255,255,.1);
          border: 1px solid rgba(255,255,255,.2);
          backdrop-filter: blur(8px);
          padding: 1.75rem;
        }
        .kt-loc-row {
          display: flex;
          gap: .85rem;
          align-items: flex-start;
        }
        .kt-loc-icon {
          width: 38px; height: 38px; border-radius: 11px;
          background: linear-gradient(135deg, #FF9328, #F0399E 55%, #3E74E0);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .kt-map-glow {
          position: absolute;
          inset: -8%;
          background: radial-gradient(closest-side, rgba(240,57,158,.4), rgba(62,116,224,.22) 50%, transparent 75%);
          filter: blur(24px);
          z-index: 0;
        }
        .kt-map-panel {
          position: relative;
          z-index: 1;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.22);
          box-shadow: 0 20px 40px rgba(0,0,0,.35);
        }
        .kt-map-panel iframe { display: block; }
      `}</style>

      <div className="d-flex justify-content-center mb-4">
        <div className="kt-loc-tabs">
          {Object.keys(locations).map((key) => (
            <button
              key={key}
              className={`kt-loc-tab ${activeTab === key ? "active" : ""}`}
              onClick={() => setActiveTab(key)}
            >
              {locations[key].title}
            </button>
          ))}
        </div>
      </div>

      <div className="row g-4 align-items-stretch justify-content-center">
        <div className="col-md-5 col-lg-4">
          <div className="kt-loc-card h-100">
            <span className="kt-mono d-block mb-2" style={{ color: "#FFB3DE", fontSize: ".68rem" }}>
              CABANG
            </span>
            <h5 className="fw-bold text-white mb-4">{location.fullTitle}</h5>

            <div className="kt-loc-row mb-3">
              <div className="kt-loc-icon">{PIN_ICON}</div>
              <p className="mb-0" style={{ color: "rgba(255,255,255,.85)", lineHeight: 1.6 }}>
                {location.address}
              </p>
            </div>

            <div className="kt-loc-row">
              <div className="kt-loc-icon">{PHONE_ICON}</div>
              <p className="mb-0" style={{ color: "rgba(255,255,255,.85)" }}>
                {location.phone}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-7 col-lg-7">
          <div className="position-relative h-100" style={{ minHeight: "300px" }}>
            <div className="kt-map-glow" />
            <div className="kt-map-panel h-100">
              <iframe
                key={activeTab}
                src={location.mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen=""
                loading="lazy"
                title={location.fullTitle}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}