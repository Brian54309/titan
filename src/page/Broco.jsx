import { useState, useEffect } from "react";
import { broco } from "../data/broco";
import brocoLogo from "/broco.png";

function Broco() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("galleo");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filtered = broco.filter((item) => {
      const matchCategory =
        item.category.toLowerCase() === category.toLowerCase();
      const matchSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.type.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
    setFilteredData(filtered);
  }, [category, searchTerm]);

  return (
    <div className="container mt-4">
      <section className="text-center mb-4">
        <img
          src={brocoLogo}
          alt="Broco logo"
          style={{
            width: "220px",
            height: "180px",
            objectFit: "contain",
          }}
        />
      </section>

      <section>
        <div className="row g-2 justify-content-center align-items-center mb-4">
          <div className="col-auto">
            <input
              type="text"
              placeholder="Search products..."
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ minWidth: "220px" }}
            />
          </div>
          <div className="col-auto">
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="galleo">Galleo</option>
              <option value="standard">Standard / NewGee</option>
              <option value="gracio">Gracio</option>
              <option value="atlantic">Atlantic</option>
              <option value="multisocket">Multisocket</option>
            </select>
          </div>
        </div>
      </section>

      <section>
        <div className="row g-4 justify-content-center">
          {filteredData.length > 0 ? (
            filteredData.map((data, key) => (
              <div key={key} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div
                  className="card shadow-sm h-100 text-center border-0"
                  style={{ borderRadius: "12px" }}
                >
                  <img
                    src={data.image}
                    alt={data.name}
                    loading="lazy"
                    style={{
                      width: "140px",
                      height: "140px",
                      objectFit: "contain",
                    }}
                    className="mx-auto mt-3"
                  />
                  <div className="card-body p-2">
                    <h6 className="mb-1">{data.name}</h6>
                    <small className="text-muted">{data.type}</small>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center mt-4">No matching items found.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Broco;
