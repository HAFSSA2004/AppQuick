import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardsCategories from "./Cards";
import { useLanguage } from "./LanguageContext"; // Import Language Context
import './List.css';
import Categories from './Categories';
import Page from "./Page";
import InfoCards from "./InfoCards";
function ListeCard() {
    const heroStyle = {
        backgroundImage: `url('./back2.jpg')`, 
        /** backgroundImage: `url('/bac.png')`,  */
         /** backgroundImage: `url('/im.png')`,  */
        backgroundSize: "cover",
        width: "100%",
        height: "410px",
        color: "white", 
        display: "flex",
        marginTop: "15px", 
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "flex-start",
        textAlign: "start",
        backgroundPosition: "center",
        position: "relative", // Ajout pour éviter des problèmes d'affichage
      };
    
    
    const { city, category, profils } = useSelector((state) => state);
    const dispatch = useDispatch();
    const { language, toggleLanguage } = useLanguage(); // Get language and toggle function

    // Define translations
    const translations = {
        en: {
            banner: "Exclusive deals, premium finds your perfect marketplace awaits",
            filterBy: "Filter By",
            categories: {
                electronique: "Electronics",
                skincare: "Skincare",
                clothes: "Clothes"
            },
            cities: {
                Tangier: "Tangier",
                Casablanca: "Casablanca",
                Agadir: "Agadir",
                Marrakech: "Marrakech"
            }
        },
        fr: {
            banner: "Offres exclusives, trouvailles premium—votre marché parfait vous attend",
            filterBy: "Filtrer Par",
            categories: {
                electronique: "Électronique",
                skincare: "Soins de la peau",
                clothes: "Vêtements"
            },
            cities: {
                Tangier: "Tanger",
                Casablanca: "Casablanca",
                Agadir: "Agadir",
                Marrakech: "Marrakech"
            }
        },
        es: {
            banner: "Ofertas exclusivas, hallazgos premium—tu mercado perfecto te espera",
            filterBy: "Filtrar Por",
            categories: {
                electronique: "Electrónica",
                skincare: "Cuidado de la piel",
                clothes: "Ropa"
            },
            cities: {
                Tangier: "Tánger",
                Casablanca: "Casablanca",
                Agadir: "Agadir",
                Marrakech: "Marrakech"
            }
        }
    };

    const t = translations[language]; // Get translations for the current language

    // Filtering profiles based on selected city & category
    const filteredProfiles = profils.filter((profil) => {
        return (
            (city ? profil.location?.toLowerCase() === city.toLowerCase() : true) &&
            (category ? profil.categorie?.toLowerCase().includes(category.toLowerCase()) : true)
        );
    });

    return (
        <div>
            
            {/* { <div className="banner">
                <img src="/metting.jpg" alt="" className="banner-image" />
                <p className="banner-text"></p>
            </div>} */}
            <section className="hero-section" style={heroStyle}>
      <h3 className="hero-subtitle">
      {t.banner} </h3>
     
      </section>
            <Page />
            <Categories />

            {/* Language Toggle with Flags */}
            <div className="language-toggle" onClick={toggleLanguage} style={{ cursor: 'pointer', textAlign: 'center', margin: '10px 0' }}>
                <img
                    src={language === 'fr' ? 'france.png' : language === 'es' ? 'spain.png' : 'eng.png'}
                    alt="Language Toggle"
                    style={{ width: '50px', height: 'auto' }}
                />
            </div>

            {/* Filters */}
            <div className="fil">
                <div className="select-container">
                    <i className="fas fa-map-marker-alt select-icon"></i>
                    <select
                        name="city"
                        className="form-selectc styled-select"
                        onChange={(e) => dispatch({ type: "SET_CITY", payload: e.target.value })}
                    >

                        <option value="">{t.filterBy}</option>
                        <option value="Tangier">{t.cities.Tangier}</option>
                        <option value="Casablanca">{t.cities.Casablanca}</option>
                        <option value="Agadir">{t.cities.Agadir}</option>
                        <option value="Marrakech">{t.cities.Marrakech}</option>
                    </select>
                </div>

                <div className="select-container">
                    <i className="fas fa-tags select-icon"></i>
                    <select
                        name="category"
                        className="form-selectc styled-select"
                        onChange={(e) => dispatch({ type: "SET_CATEGORY", payload: e.target.value })}
                    >

                        <option value="">{t.filterBy}</option>
                        <option value="Electronique">{t.categories.electronique}</option>
                        <option value="skincare">{t.categories.skincare}</option>
                        <option value="clothes">{t.categories.clothes}</option>
                    </select>
                </div>
            </div>

            {/* Cards Section */}
            <h2 className="ms-5" style={{ borderBottom: '2px solid black' ,width:'210px'}}>All Categories</h2>

            <div className="cards-container">
                {filteredProfiles.map((profil, index) => (
                    <CardsCategories
                        key={index}
                        id={profil.id}  // Ensure this is the correct field for the ID
                        image={profil.image}
                        title={profil.title}
                        location={profil.location}
                        description={profil.description}
                        price={profil.price}
                    />
                ))}
            </div>
            <InfoCards/>
        </div>
    );
}

export default ListeCard;