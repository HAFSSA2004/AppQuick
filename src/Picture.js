import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdsContext } from "./AdsContext";
import { FaUpload } from "react-icons/fa";

function Picture() {
  const { ads, addAd } = useContext(AdsContext);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedImage(file);
    }
  };

  const uploadToImgur = async () => {
    if (!uploadedImage) {
      alert("Please select an image first.");
      return;
    }
  
    setLoading(true);
    const formData = new FormData();
    formData.append("image", uploadedImage);
  
    try {
      const response = await fetch("https://api.imgur.com/3/image", {
        method: "POST",
        headers: {
          Authorization: "Client-ID 8628f5da4573712" // Make sure your Client ID is correct
        },
        body: formData,
      });
  
      const data = await response.json();
      console.log("Imgur Response:", data); // Debugging
  
      if (response.ok) {
        setImageUrl(data.data.link);
        alert("Image uploaded successfully!");
      } else {
        alert(`Error uploading image: ${data.data.error}`);
      }
    } catch (error) {
      console.error("Upload Error:", error);
      alert("An error occurred while uploading.");
    } finally {
      setLoading(false);
    }
  };
  
  const handleNext = () => {
    if (!imageUrl) {
      alert("Please upload the image before proceeding.");
      return;
    }

    const lastAd = ads[ads.length - 1];
    const updatedAd = { ...lastAd, image: imageUrl };
    addAd(updatedAd);
    navigate("/seller-info");
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Add ADS</h1>

      <div className="d-flex justify-content-center align-items-center">
        <div className="tab bg-secondary text-white px-4 py-2 me-2 border rounded">1. Product Info</div>
        <div className="tab bg-white text-dark px-4 py-2 me-2 border rounded shadow">2. Product Pictures</div>
        <div className="tab bg-secondary text-white px-4 py-2 border rounded">3. Seller Info</div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <input type="file" onChange={handleFileChange} />
        <button className="btn btn-primary ms-2" onClick={uploadToImgur} disabled={loading}>
          {loading ? "Uploading..." : <FaUpload />}
        </button>
      </div>

      <div className="text-center mt-3">
        <button onClick={handleNext} className="btn btn-warning">Next</button>
      </div>
    </div>
  );
}

export default Picture;
