import { useState, useEffect } from "react";
import { matrix } from "../data/matrix";
import matrixLogo from "/matrix.png";

function Matrix() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [filteredData, setFilteredData] = useState(matrix);

  useEffect(() => {
    const filtered = matrix.filter((item) => {
      const matchCategory =
        category === "all" ||
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
          src={matrixLogo}
          alt="Matrix logo"
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
              <option value="all">All Categories</option>
              <option value="receiver">Receiver</option>
              <option value="aksesoris">Aksesoris TV</option>
              <option value="antena">Antena TV</option>
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
                      width: "150px",
                      height: "150px",
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

export default Matrix;
