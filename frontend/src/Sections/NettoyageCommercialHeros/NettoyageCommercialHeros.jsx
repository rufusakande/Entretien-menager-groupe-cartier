import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, Star } from 'lucide-react';
import './NettoyageCommercialHeros.css';

const NettoyageCommercialHeros = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    "Nettoyage de bureaux",
    "Entretien d'espaces commerciaux",
    "Désinfection professionnelle",
    "Maintenance quotidienne"
  ];

  return (
    <section id="NettoyageCommercialHeros" className={`hero-section ${isVisible ? 'visible' : ''}`}>
      <div className="hero-overlay"></div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <Star className="badge-icon" />
              <span>Service Professionnel Premium</span>
            </div>
            
            <h1 className="hero-title">
              Service Professionnel de 
              <span className="highlight"> Nettoyage Commercial</span>
              <br />à Prix Imbattable
            </h1>
            
            <p className="hero-description">
              Entretien Ménager Groupe Cartier vous offre un service de nettoyage commercial 
              de qualité supérieure avec des tarifs compétitifs. Faites confiance à notre 
              expertise pour maintenir vos espaces professionnels dans un état impeccable.
            </p>
            
            <div className="services-list">
              {services.map((service, index) => (
                <div key={index} className="service-item">
                  <CheckCircle className="check-icon" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
            
            <div className="hero-actions">
              <a href="contact">
                <button className="btn btn-primary cta-button">
                  <Phone className="btn-icon" />
                  Devis Gratuit
                  <ArrowRight className="arrow-icon" />
                </button>
              </a>

              <a href="contact">
                <button className="btn btn-secondary contact-button">
                  <Mail className="btn-icon" />
                  Nous Contacter
                </button>
              </a>
            </div>
            
            <div className="hero-info">
              <div className="info-item">
                <MapPin className="info-icon" />
                <span>Service disponible à Québec, Canada et environ</span>
              </div>
              <div className="info-item">
                <Phone className="info-icon" />
                <span>Intervention rapide 24h/7j</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="cleaning-illustration">
              <div className="cleaning-person">
                <div className="person-body"></div>
                <div className="cleaning-equipment"></div>
                <div className="cleaning-bucket"></div>
              </div>
              <div className="sparkles">
                <div className="sparkle sparkle-1"></div>
                <div className="sparkle sparkle-2"></div>
                <div className="sparkle sparkle-3"></div>
                <div className="sparkle sparkle-4"></div>
              </div>
            </div>
            
            <div className="stats-cards">
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Clients Satisfaits</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4.9★</div>
                <div className="stat-label">Note Moyenne</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Disponibilité</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className="hero-wave">
        <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="var(--secondary-color)"/>
        </svg>
      </div> */}
    </section>
  );
};

export default NettoyageCommercialHeros;