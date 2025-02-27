import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaPhone, FaEnvelope } from 'react-icons/fa';
//import { INITIAL_STATE } from './path_to_initial_state'; // Make sure to import the INITIAL_STATE
//import { INITIAL_STATE } from ''
import { INITIAL_STATE } from './Reducers/Filter';
function ItemInformation() {
    const { id } = useParams();
    const navigate = useNavigate(); // Initialize navigate function
    const [annonce, setAnnonce] = useState(null);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Find the annonce based on the id from the profiles
        const annonceData = INITIAL_STATE.profils.find(ad => ad.id === parseInt(id));

        if (annonceData) {
            setAnnonce(annonceData);
        } else {
            setError('Annonce not found');
        }
    }, [id]);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        navigate('/'); // Redirect to homepage
    };

    if (error) return <div>{error}</div>;
    if (!annonce) return <div>Loading...</div>;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', fontFamily: "'Roboto', sans-serif", backgroundColor: '#f9f9f9' }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px' }}>
                    <img src={`${process.env.PUBLIC_URL}/${annonce.image}`}  alt={annonce.title} style={{ width: '100%', maxWidth: '300px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
                </div>
                <div style={{ flex: '1 1 300px', maxWidth: '500px', textAlign: 'start' }}>
                    <h2 style={{ fontSize: '26px', color: '#2b2b2b', textAlign: 'center', fontWeight: 'bold' }}>{annonce.title}</h2>
                    <h4 style={{ fontSize: '20px', color: '#d79128', marginBottom: '10px' }}>ABOUT PRODUCT</h4>
                    <p style={{ fontSize: '16px', color: '#555', marginBottom: '20px' }}>{annonce.description}</p>
                    <ul style={{ listStyleType: 'none', padding: '0', lineHeight: '1.6' }}>
                        <li><strong>Price:</strong> {annonce.price}</li>
                        <li><strong>Location:</strong> {annonce.location}</li>
                        <li><strong>Category:</strong> {annonce.categorie}</li>
                        <li><strong>Date Posted:</strong> {annonce.datePoster}</li>
                    </ul>

                    <h4 style={{ fontSize: '20px', color: '#d79128', marginTop: '20px', marginBottom: '15px' }}>ABOUT SELLER</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <img  src={`${process.env.PUBLIC_URL}/avatar.png`}  alt="Seller Avatar" style={{ width: '35px', borderRadius: '50%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
                        <p style={{ fontSize: '18px', color: '#333', margin: '0' }}>Kristen Wasten</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <FaPhone style={{ color: 'black' }} />
                        <p style={{ margin: '0', fontSize: '18px', color: '#555' }}>(+33) 70055551</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                        <FaEnvelope style={{ color: 'black' }} />
                        <p style={{ margin: '0', fontSize: '18px', color: '#555' }}>kristenwasten@example.com</p>
                    </div>

                    {/* Contact Button */}
                    <button
                        style={{ padding: '12px 24px', borderRadius: '8px', backgroundColor: 'grey', color: 'white', border: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}
                        onClick={handleModalOpen}
                    >
                        Contact the Seller
                    </button>

                    {/* Success Modal */}
                    {isModalOpen && (
                        <div style={{ position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '9999' }}>
                            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '400px', textAlign: 'center' }}>
                                <h3 style={{ color: '#4CAF50' }}>Success</h3>
                                <p>Your message has been sent successfully to the seller!</p>
                                <button
                                    style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#d32f2f', color: 'white', border: 'none', cursor: 'pointer' }}
                                    onClick={handleModalClose}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ItemInformation;
