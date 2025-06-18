import React, { useEffect, useRef } from 'react';
import { ArrowDown, Shield, Users, Award } from 'lucide-react';
import './AboutHero.css';

const AboutHero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about-hero + section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about-hero" ref={heroRef} role="banner" aria-label="À propos de nous - Section principale">
      <div className="hero-background">
        <div className="overlay"></div>
        <div className="geometric-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content" ref={contentRef}>
          <div className="hero-text">
            <h1 className="hero-title">
              À PROPOS
            </h1>
            <div className="hero-subtitle">
              <h2>Entretien Ménager Groupe Cartier</h2>
            </div>
            <p className="hero-description">
              Depuis plus de 15 ans, nous sommes votre partenaire de confiance pour l'entretien ménager 
              professionnel. Notre expertise et notre engagement envers l'excellence font de nous 
              le choix privilégié des entreprises et particuliers exigeants.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <Shield size={24} aria-hidden="true" />
                </div>
                <div className="stat-content">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Années d'expérience</span>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">
                  <Users size={24} aria-hidden="true" />
                </div>
                <div className="stat-content">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Clients satisfaits</span>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">
                  <Award size={24} aria-hidden="true" />
                </div>
                <div className="stat-content">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Satisfaction garantie</span>
                </div>
              </div>
            </div>

            <div className="hero-actions">
              <a href="contact" className="btn btn-primary" aria-label="Découvrir nos services">
                Nos Services
              </a>
              <a href="contact" className="btn btn-secondary" aria-label="Nous contacter">
                Nous Contacter
              </a>
            </div>
          </div>
        </div>

        {/* <button 
          className="scroll-indicator" 
          onClick={scrollToNext}
          aria-label="Faire défiler vers la section suivante"
          type="button"
        >
          <ArrowDown size={24} aria-hidden="true" />
        </button> */}
      </div>
    </section>
  );
};

export default AboutHero;