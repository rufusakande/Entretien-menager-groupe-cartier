import React, { useState, useEffect } from 'react';
import { ChevronDown, Award, Users, TrendingUp, Phone, Mail, MapPin } from 'lucide-react';
import './FranchiseHeros.css';

const FranchiseHeros = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Animation d'entrée
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Carrousel automatique pour les avantages
    const slideTimer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(slideTimer);
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#franchise-details');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const advantages = [
    {
      icon: Award,
      title: "Modèle Éprouvé",
      description: "Un concept testé et validé avec plus de 15 ans d'expérience"
    },
    {
      icon: Users,
      title: "Support Complet",
      description: "Formation, marketing et accompagnement personnalisé"
    },
    {
      icon: TrendingUp,
      title: "Marché Porteur",
      description: "Secteur en croissance constante avec forte demande"
    }
  ];

  return (
    <section id="FranchiseHeros" className={isVisible ? 'visible' : ''}>
      <div className="hero-background">
        <div className="background-overlay"></div>
        <div className="animated-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <Award className="badge-icon" />
              <span>Opportunité d'Investissement</span>
            </div>
            
            <h1 className="hero-title">
              Franchise de Ménage 
              <span className="title-highlight">à Vendre</span>
            </h1>
            
            <p className="hero-subtitle">
              Devenez franchisé (modèle d'affaire éprouvé)
            </p>
            
            <p className="hero-description">
              Rejoignez le réseau Entretien Ménager Groupe Cartier et lancez votre 
              entreprise dans un secteur en pleine croissance. Bénéficiez de notre 
              expertise, de notre formation complète et de notre support continu.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Années d'expérience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Taux de satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Partenaires actifs</div>
              </div>
            </div>

            <div className="hero-actions">
              <a href="contact">
                <button className="btn btn-primary cta-button">
                  <Phone className="btn-icon" />
                  Nous Contacter
              </button>
              </a>
              <a href="contact">
                  <button className="btn btn-secondary info-button">
                    <Mail className="btn-icon" />
                    Recevoir la Documentation
                  </button>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="advantages-carousel">
              {advantages.map((advantage, index) => (
                <div 
                  key={index}
                  className={`advantage-card ${currentSlide === index ? 'active' : ''}`}
                >
                  <div className="advantage-icon">
                    <advantage.icon />
                  </div>
                  <h3 className="advantage-title">{advantage.title}</h3>
                  <p className="advantage-description">{advantage.description}</p>
                </div>
              ))}
            </div>
            
            <div className="carousel-indicators">
              {advantages.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Avantage ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="contact-info">
            <div className="contact-item">
              <Phone className="contact-icon" />
              <span>+1 450 999 0513</span>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" />
              <span>franchise@groupecartier.com</span>
            </div>
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <span>Québec, Canada</span>
            </div>
          </div>
          
          {/* <button className="scroll-indicator" onClick={scrollToNextSection} aria-label="Défiler vers le bas">
            <ChevronDown className="scroll-icon" />
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default FranchiseHeros;