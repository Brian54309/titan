import { kvision } from "../data/kvision";
import kvisionLogo from "/kvision-logo.jpg";
import { useState, useEffect } from "react";

function Kvision() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(kvision);

  useEffect(() => {
    const query = searchTerm.trim().toLowerCase();
    const filtered = kvision.filter((item) => {
      return (
        item.name.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query)
      );
    });
    setFilteredData(filtered);
  }, [searchTerm]); 

  return (
    <div className="container mt-4">
      <section className="text-center mb-4">
        <img
          src={kvisionLogo}
          alt="Kvision logo"
          className="img-fluid"
          style={{
            width: "250px",
            height: "200px",
            objectFit: "contain",
          }}
        />
      </section>

      <section className="mb-5">
        <div className="row justify-content-center g-2">
          <div className="col-md-4 col-sm-8">
            <input
              type="text"
              placeholder="Search..."
              className="form-control shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="row g-4 justify-content-center">
          {filteredData.length > 0 ? (
            filteredData.map((data, key) => (
              <div key={key} className="col-lg-3 col-md-4 col-sm-6">
                <div className="card h-100 text-center shadow-sm border-0 rounded-3 hover-shadow">
                  <img
                    src={data.image}
                    alt={data.name}
                    loading="lazy"
                    className="card-img-top p-3"
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "contain",
                      margin: "0 auto",
                    }}
                  />
                  <div className="card-body">
                    <h6 className="card-title mb-1" style={{ fontSize: "20px" }}>
                      {data.name}
                    </h6>
                    <p className="text-muted small mb-0">{data.type}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center mt-4 text-muted">
              <i className="bi bi-search fs-3 d-block mb-2"></i>
              No matching items found.
            </div>
          )}
        </div>
      </section>

      <style>{`
        .hover-shadow:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
          transform: translateY(-3px);
          transition: 0.3s ease;
        }
      `}</style>
    </div>
  );
}

export default Kvision;
