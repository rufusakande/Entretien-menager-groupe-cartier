import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Shield, Clock, Star, Sparkles } from 'lucide-react';
import './GrandMenageHeros.css';

const GrandMenageHeros = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="GrandMenageHeros" 
      ref={heroRef}
      className={`hero-section ${isVisible ? 'animate-in' : ''}`}
      role="banner"
      aria-labelledby="hero-title"
    >
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="floating-elements">
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
          <div className="bubble bubble-4"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="content-left">
            <div className="badge">
              <Sparkles size={16} aria-hidden="true" />
              <span>Service Premium</span>
            </div>

            <h1 id="hero-title" className="hero-title">
              Grand Ménage de
              <span className="highlight"> Printemps</span>
            </h1>

            <p className="hero-description">
              Redonnez vie à votre espace avec notre service de grand ménage professionnel. 
              Une équipe expérimentée, des produits écologiques et un résultat impeccable 
              pour votre tranquillité d'esprit.
            </p>

            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <Shield size={20} aria-hidden="true" />
                </div>
                <span>100% Garanti</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Clock size={20} aria-hidden="true" />
                </div>
                <span>Service Rapide</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Star size={20} aria-hidden="true" />
                </div>
                <span>Équipe Experte</span>
              </div>
            </div>

            <div className="hero-actions">
              <a href="contact">
                <button 
                  className="btn btn-primary cta-button"
                  aria-label="Demander un devis gratuit"
                >
                  Devis Gratuit
                  <ArrowRight size={20} aria-hidden="true" />
                </button>
              </a>
              <a href="contact">
                <button 
                  className="btn btn-primary"
                  aria-label="Nous appeler maintenant"
                >
                  Contactez-nous
                </button>
              </a>
            </div>

            <div className="trust-indicators">
              <div className="rating">
                <div className="stars" aria-label="Note 5 étoiles sur 5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
                <span>4.9/5 - Plus de 500 clients satisfaits</span>
              </div>
            </div>
          </div>

          <div className="content-right">
            <div className="hero-image-container">
              <div className="image-background"></div>
              <div className="cleaning-visual">
                <div className="cleaning-supplies">
                  <div className="supply-item supply-1"></div>
                  <div className="supply-item supply-2"></div>
                  <div className="supply-item supply-3"></div>
                </div>
                <div className="sparkle-effects">
                  <div className="sparkle sparkle-1"></div>
                  <div className="sparkle sparkle-2"></div>
                  <div className="sparkle sparkle-3"></div>
                  <div className="sparkle sparkle-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrandMenageHeros;