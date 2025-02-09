  import { Link } from 'react-router-dom';
  import React from 'react';
  import Toggle from './Mode/Toggle';
  import './HeaderN.css'; // Import du fichier CSS
  import { useAuth } from "./AuthContext";
  //import { useNavigate } from "react-router-dom";
  import { FaSignOutAlt } from "react-icons/fa"; // Import logout icon
  function HeaderN() {

    const { isAuthenticated, logout } = useAuth();
    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img 
              src="logo2.png" 
              alt="Logo" 
              className="navbar-logo"
              width="100"
              height="100"
            />
          </Link>

          {/* Bouton de menu responsive */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Contenu de la navbar */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Liens de navigation avec défilement */}
            <div className="navbar-nav">
              <button onClick={() => scrollToSection("aboutus")} className="nav-link-custom">About Us</button>
              <button onClick={() => scrollToSection("services")} className="nav-link-custom">Our Services</button>
              <button onClick={() => scrollToSection("contactus")} className="nav-link-custom">Contact Us</button>
            </div>

            {/* Liens et boutons - centrés sur mobile */}
            <div className="ms-auto d-flex align-items-center flex-column flex-lg-row justify-content-center text-center mt-3 mt-lg-0">
              <div>
                <Link to="/login" className="btn btn-outline-warning mb-2 mb-lg-0 me-lg-2">Login</Link> &nbsp;
                <Link to="/addAds" className="btn btn-warning text-white mb-2 mb-lg-0 me-lg-2">Add Ads</Link>
              </div>
              <Toggle />
              {isAuthenticated && (
        <FaSignOutAlt
          className="logout-icon"
          onClick={logout}
          title="Logout"
          style={{ cursor: "pointer", fontSize: "20px", color: "red" }}
        />
      )}
            </div>
          </div>
        </div>
      </nav>
    );
  }

  export default HeaderN;
