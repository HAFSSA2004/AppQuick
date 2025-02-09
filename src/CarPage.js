import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const CarPage = () => {
  const ads = [
    {
      id: 1,
      image: "car.jpg",
      title: "Toyota Corolla",
      location: "Tanger",
      description: "Voiture économique et fiable, idéale pour la ville.",
      price: "$15,000",
    },
    {
      id: 2,
      image: "dacia.png",
      title: "Dacia Duster",
      location: "Rabat",
      description: "SUV robuste avec excellent rapport qualité-prix.",
      price: "$18,500",
    },
    {
      id: 3,
      image: "car2.jpg",
      title: "Mercedes",
      location: "Casablanca",
      description: "Voiture premium alliant luxe et performance.",
      price: "$32,000",
    },
    {
      id: 4,
      image: "dacia3.jpg",
      title: "Peugeot 208",
      location: "Fès",
      description: "Citadine moderne et économique, parfaite pour le quotidien.",
      price: "$14,500",
    },
    {
      id: 5,
      image: "dacia2.jpg",
      title: "Volkswagen Golf",
      location: "Tanger",
      description: "Compacte dynamique avec un moteur performant.",
      price: "$22,000",
    },
    {
      id: 6,
      image: "4x4.jpg",
      title: "Toyota Land Cruiser",
      location: "Casablanca",
      description: "4x4 puissant conçu pour les terrains difficiles.",
      price: "$45,000",
    },
    {
      id: 7,
      image: "4x4blanc.jpg",
      title: "Range Rover Evoque",
      location: "Oujda",
      description: "SUV élégant et moderne avec intérieur luxueux.",
      price: "$50,000",
    },
    {
      id: 8,
      image: "mercedes.jpg",
      title: "Mercedes-Benz C-Class",
      location: "Tétouan",
      description: "Voiture de luxe avec confort et haute technologie.",
      price: "$40,000",
    },
  ];

  return (
    <div className="container mt-5">
      {/* Titre stylisé et centré */}
      <h3 
  className="text-center fw-bold mb-4"
  style={{ 
    color: "#4A00E0", 
    backgroundColor:"black",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "2rem",
    fontWeight: "bold",
    letterSpacing: "2px",
    textTransform: "uppercase",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"
  }}
>
Découvrez Nos Meilleures Offres Auto ! 
</h3>


      {/* Première ligne d'annonces */}
      <div className="row justify-content-center">
        {ads.slice(0, 4).map((ad) => (
          <div className="col-md-3 mb-4" key={ad.id}>
            <div className="card shadow-sm">
              <img src={ad.image} className="card-img-top" alt={ad.title} />
              <div className="card-body">
                <div className="title d-flex justify-content-between align-items-center">
                  <h5 className="card-title">{ad.title}</h5>
                  <span className="location text-danger">
                    <i className="bi bi-geo-alt-fill"></i> {ad.location}
                  </span>
                </div>
                <p className="card-text">{ad.description}</p>
                <p className="card-text price">
                  <strong>Price:</strong> {ad.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Espace entre les groupes d'annonces */}
      <div className="my-4"></div>

      {/* Deuxième ligne d'annonces */}
      <div className="row justify-content-center">
        {ads.slice(4, 8).map((ad) => (
          <div className="col-md-3 mb-4" key={ad.id}>
            <div className="card shadow-sm">
              <img src={ad.image} className="card-img-top" alt={ad.title} />
              <div className="card-body">
                <div className="title d-flex justify-content-between align-items-center">
                  <h5 className="card-title">{ad.title}</h5>
                  <span className="location text-danger">
                    <i className="bi bi-geo-alt-fill"></i> {ad.location}
                  </span>
                </div>
                <p className="card-text">{ad.description}</p>
                <p className="card-text price">
                  <strong>Price:</strong> {ad.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarPage;
