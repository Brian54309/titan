import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Locations() {
  const [activeTab, setActiveTab] = useState("jakarta");

  const locations = {
    jakarta: {
      title: "Cabang Jakarta",
      address: "Ruko Mangga Dua Square Blok F29 Jl. Gunung Sahari Raya No.1",
      phone: "021-62312401",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d495.8664597787237!2d106.8312484663721!3d-6.13988066534472!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5f7371bce11%3A0xc4b3ae9e8958f1af!2sJl.%20Gn.%20Sahari%20No.1%2C%20RT.12%2FRW.6%2C%20Ancol%2C%20Kec.%20Pademangan%2C%20Jkt%20Utara%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2014420!5e0!3m2!1sen!2sid!4v1755227892641!5m2!1sen!2sid."
    },
    surabaya: {
      title: "Cabang Surabaya",
      address: "ITC Surabaya Mega Grosir Lantai 2 Blok L6 N0.5-6",
      phone: "0856-3211-657",

      mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.9937486824365!2d112.74349457590264!3d-7.2415486711286485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f911623bd455%3A0x13126f6f6481985d!2sITC%20Mega%20Grosir%20Surabaya!5e0!3m2!1sen!2sid!4v1755228042572!5m2!1sen!2sid" 
    },
      bali: {
      title: "Cabang Bali",
      address: "Jln Gunung Salak, Perum Bali Arum No.66, Krobokan, Kuta Utara, Badung",
      phone: "+6287861337257",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3944.352787637434!2d115.17491047501458!3d-8.657958291389315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMzknMjguNyJTIDExNcKwMTAnMzkuMCJF!5e0!3m2!1sen!2sid!4v1755230272892!5m2!1sen!2sid"
    },
  };
  const location = locations[activeTab];

  return (
    <div className="container-fluid pt-4 px-5" style={{ background: "linear-gradient(to bottom, #E7F3FF, #ffffff)"}}>
      <h3 className="mb-3">Our Location</h3>


      <ul className="nav nav-tabs mb-3">
        {Object.keys(locations).map((key) => (
          <li className="nav-item" key={key}>
            <button
              className={`nav-link ${activeTab === key ? "active" : ""}`}
              onClick={() => setActiveTab(key)}
            >
              {locations[key].title}
            </button>
          </li>
        ))}
      </ul>


      <div className="row">
        <div className="col-md-5">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{location.title}</h5>
              <p className="mb-2">{location.address}</p>
              <p className="mb-2">
                <strong>Phone Number:</strong> {location.phone}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <iframe
            src={location.mapSrc}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
