import React, { useState, useEffect } from 'react';
import { CheckCircle, Sparkles, Clock, Shield, Star } from 'lucide-react';
import './ResidentielHeros.css';

const ResidentielHeros = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    { icon: CheckCircle, text: "Nettoyage complet" },
    { icon: Sparkles, text: "Entretien régulier" },
    { icon: Clock, text: "Ponctualité garantie" },
    { icon: Shield, text: "Assurance complète" }
  ];

  return (
    <section id="ResidentielHeros" className={`hero-section ${isVisible ? 'visible' : ''}`}>
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <Star className="badge-icon" />
              <span>Service Premium</span>
            </div>
            
            <h1 className="hero-title">
              Entretien Ménager
              <span className="title-highlight">Résidentiel</span>
            </h1>
            
            <p className="hero-description">
              Transformez votre maison en un havre de propreté avec nos services 
              d'entretien ménager professionnel. Une équipe experte, des produits 
              écologiques et une satisfaction garantie.
            </p>
            
            <div className="hero-features">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="feature-item"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <service.icon className="feature-icon" />
                  <span>{service.text}</span>
                </div>
              ))}
            </div>
            
            <div className="hero-actions">
              <a href="contact">
                <button className="btn btn-primary hero-cta">
                  Demander un Devis Gratuit
                </button>
              </a>
              <a href="contact">
                <button className="btn btn-secondary hero-secondary">
                  Nos Services
                </button>
              </a>
            </div>
            
            <div className="hero-trust">
              <div className="trust-stats">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Clients satisfaits</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">4.9⭐</span>
                  <span className="stat-label">Note moyenne</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Disponibilité</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="visual-container">
              <div className="floating-card card-1">
                <Sparkles className="card-icon" />
                <span>Nettoyage Écologique</span>
              </div>
              <div className="floating-card card-2">
                <Shield className="card-icon" />
                <span>Assurance Complète</span>
              </div>
              <div className="floating-card card-3">
                <Clock className="card-icon" />
                <span>Ponctualité</span>
              </div>
              <div className="main-visual">
                <div className="visual-circle"></div>
                <div className="visual-content">
                  <CheckCircle className="main-icon" />
                  <span className="visual-text">Service Premium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentielHeros;