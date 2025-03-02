import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdsContext } from "./AdsContext"; // Context for managing ads
import { useAuth } from "./AuthContext"; // Authentication hook

function AddAds() {
  const { addAd } = useContext(AdsContext);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [productN, setProductN] = useState("");
  const [category, setCategory] = useState("");
  const [aboutP, setAboutP] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      alert("You need to log in first!");
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleNext = async (e) => {
    e.preventDefault();
    if (!productN || !category || !aboutP || !price || !location) {
      setError(true);
      return;
    }
    setError(false);

    const newAd = {
      title: productN,
      category,
      description: aboutP,
      price,
      location,
      datePoster: new Date().toISOString(),
    };

    addAd(newAd); // Save to context
    navigate("/picture"); // Go to image upload step
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Add ADS</h1>

      {/* Step Tabs */}
      <div className="d-flex justify-content-center align-items-center">
        <div className="tab bg-white text-dark px-4 py-2 me-2 border rounded shadow">
          1. Product Info
        </div>
        <div className="tab text-white bg-secondary px-4 py-2 me-2 border rounded">
          2. Product Pictures
        </div>
        <div className="tab text-white bg-secondary px-4 py-2 border rounded">
          3. Seller Info
        </div>
      </div>

      {/* Form */}
      <form className="container pt-4" style={{ width: "70%", marginTop: "20px", border: "2px solid #ddd", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <div className="form-group">
          <label>Product Name</label>
          <input type="text" className="form-control" placeholder="Enter product name" value={productN} onChange={(e) => setProductN(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Product Category</label>
          <select className="form-control" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Choose Category</option>
            <option value="clothes">Clothes</option>
            <option value="books">Books</option>
            <option value="el">Electronics</option>
            <option value="children">Children</option>
            <option value="sport">Sports</option>
          </select>
        </div>
        <div className="form-group">
          <label>About Product</label>
          <textarea className="form-control" placeholder="Product description ..." value={aboutP} onChange={(e) => setAboutP(e.target.value)}></textarea>
        </div>
        <div className="form-group">
          <label>Price</label>
          <input type="number" className="form-control" placeholder="Enter the Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Location</label>
          <select className="form-control" value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">Choose Region</option>
            <option value="tanger">Tanger</option>
            <option value="rabat">Rabat</option>
            <option value="casablanca">Casablanca</option>
            <option value="agadir">Agadir</option>
          </select>
        </div>
        {error && <div className="text-danger text-center my-3">Please fill out all fields before proceeding.</div>}
        <div className="text-center">
          <button onClick={handleNext} className="btn btn-warning">Next</button>
        </div>
      </form>
    </div>
  );
}

export default AddAds;
