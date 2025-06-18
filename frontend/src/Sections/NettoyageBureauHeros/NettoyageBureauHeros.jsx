import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, Star } from 'lucide-react';
import './NettoyageBureauHeros.css';

const NettoyageBureauHeros = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    "Nettoyage quotidien des bureaux",
    "Désinfection complète",
    "Entretien des espaces communs",
    "Nettoyage des vitres"
  ];

  return (
    <section id="NettoyageBureauHeros" className={`hero-section ${isVisible ? 'visible' : ''}`}>
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge">
              <Star className="badge-icon" />
              <span>Service Premium</span>
            </div>
            
            <h1 className="hero-title">
              <span className="title-highlight">Nettoyage de Bureau</span>
              <span className="title-main">Professionnel</span>
              <span className="title-sub">& Sur Mesure</span>
            </h1>
            
            <p className="hero-description">
              Maintenez un environnement de travail impeccable avec nos services 
              de nettoyage professionnel. Notre équipe experte garantit un espace 
              propre, sain et productif pour vos collaborateurs.
            </p>
            
            <div className="services-list">
              {services.map((service, index) => (
                <div key={index} className="service-item" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
                  <CheckCircle className="service-icon" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
            
            <div className="hero-actions">
              <a href="contact">
                <button className="btn btn-primary hero-cta">
                  Demander un Devis
                  <ArrowRight className="btn-icon" />
                </button>
              </a>
              <div className="contact-quick">
                <Phone className="contact-icon" />
                <div className="contact-info">
                  <span className="contact-label">Appelez-nous</span>
                  <span className="contact-value">+1 450 999 0513</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="hero-image-container">
              <div className="image-background"></div>
              <div className="stats-card card-1">
                <div className="stat-number">500+</div>
                <div className="stat-label">Bureaux Nettoyés</div>
              </div>
              <div className="stats-card card-2">
                <div className="stat-number">99%</div>
                <div className="stat-label">Satisfaction Client</div>
              </div>
              <div className="quality-badge">
                <CheckCircle className="quality-icon" />
                <span>Qualité Garantie</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NettoyageBureauHeros;