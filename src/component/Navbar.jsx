import logo from "/logo.png";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/*
  Same palette as HomePage.jsx, sampled from logo.png:
  --brand-purple: #61268B   (wordmark purple — link text)
  --flare-orange: #FB7B0F
  --flare-pink:   #C82386
  --flare-blue:   #2753B1
  --ink:          #170B2E

  IMPORTANT: this navbar is always a solid light bar (white -> very light
  lavender), on every route and at every scroll position. An earlier version
  went transparent with white text to sit on top of the homepage hero, but
  that meant white-on-white on any page (or scroll position) without a dark
  hero behind it -- effectively an invisible navbar. Solid background avoids
  that class of bug entirely; the scroll state now only adds a shadow +
  slightly tighter padding, nothing that affects visibility.
*/

const PRODUCTS = [
  { path: "/kvision", name: "KVision" },
  { path: "/nex", name: "Nex" },
  { path: "/matrix", name: "Matrix" },
  { path: "/broco", name: "Broco" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation ? useLocation() : { pathname: "/" };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        .kt-navbar {
          position: sticky;
          top: 0;
          z-index: 1030;
          background: #FCFAFE;
          padding-top: .75rem;
          padding-bottom: .75rem;
          transition: box-shadow .25s ease, padding .25s ease;
        }
        .kt-navbar.is-scrolled {
          box-shadow: 0 4px 20px rgba(23,11,46,.10);
          padding-top: .45rem;
          padding-bottom: .45rem;
        }
        .kt-navbar::after {
          content: "";
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 2px;
          background: linear-gradient(90deg, #FB7B0F, #C82386 45%, #2753B1);
          opacity: .6;
        }

        .kt-navbar .navbar-brand img {
          height: 44px;
        }

        .kt-nav-link {
          color: #2B2140 !important;
          font-weight: 500;
          position: relative;
          padding: .5rem .9rem !important;
          transition: color .2s ease;
        }
        .kt-nav-link:hover { color: #C82386 !important; }
        .kt-nav-link::after {
          content: "";
          position: absolute;
          left: .9rem; right: .9rem; bottom: .1rem;
          height: 2px;
          background: linear-gradient(90deg, #FB7B0F, #C82386, #2753B1);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .2s ease;
        }
        .kt-nav-link:hover::after,
        .kt-nav-link.active::after { transform: scaleX(1); }
        .kt-nav-link.active { color: #61268B !important; font-weight: 600; }

        .kt-dropdown-menu {
          border: 1px solid #EEE7F5;
          border-radius: 14px;
          box-shadow: 0 16px 34px rgba(23,11,46,.14);
          padding: .5rem;
          margin-top: .5rem;
        }
        .kt-dropdown-item {
          border-radius: 9px;
          padding: .55rem .8rem;
          color: #2B2140;
          font-weight: 500;
          transition: background .15s ease, color .15s ease, padding-left .15s ease;
        }
        .kt-dropdown-item:hover {
          background: linear-gradient(90deg, rgba(251,123,15,.10), rgba(200,35,134,.10));
          color: #61268B;
          padding-left: 1.05rem;
        }

        .kt-cta-link {
          background: linear-gradient(135deg, #FB7B0F, #C82386 55%, #2753B1);
          color: #fff !important;
          border-radius: 10px;
          padding: .5rem 1.2rem !important;
          margin-left: .25rem;
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .kt-cta-link::after { display: none; }
        .kt-cta-link:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 22px rgba(200,35,134,.32);
          color: #fff !important;
        }

        .kt-navbar .navbar-toggler {
          border: none;
          padding: .25rem .5rem;
        }
        .kt-navbar .navbar-toggler:focus { box-shadow: 0 0 0 3px rgba(200,35,134,.25); }
        .kt-navbar .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(43,33,64,0.85)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
        }

        @media (max-width: 991.98px) {
          .kt-dropdown-menu { box-shadow: none; border: none; padding-left: .75rem; }
          .kt-cta-link { display: inline-block; margin-top: .5rem; }
        }
      `}</style>

      <nav className={`kt-navbar navbar navbar-expand-lg position-relative ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="PT Titan Agung Persada" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <Link className={`nav-link kt-nav-link ${isActive("/") ? "active" : ""}`} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link kt-nav-link ${isActive("/about") ? "active" : ""}`} to="/about">
                  About Us
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link kt-nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </a>
                <ul className="dropdown-menu kt-dropdown-menu" aria-labelledby="productDropdown">
                  {PRODUCTS.map((p) => (
                    <li key={p.path}>
                      <Link className="dropdown-item kt-dropdown-item" to={p.path}>
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link kt-nav-link kt-cta-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
