import React, { useState, useEffect } from 'react';
import { Star, Award, Users, Clock, CheckCircle, Sparkles } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    experience: 0,
    clients: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startCounters();
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('AboutSection');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const startCounters = () => {
    const targets = { experience: 15, clients: 500, satisfaction: 100 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    Object.keys(targets).forEach(key => {
      const target = targets[key];
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    });
  };

  return (
    <section id="AboutSection" className={`about-section ${isVisible ? 'animate' : ''}`}>
      <div className="container">
        <div className="about-content">
          {/* Section principale avec image et texte */}
          <div className="main-content">
            <div className="text-content">
              <div className="badge">
                <Sparkles size={16} />
                <span>Service Premium</span>
              </div>
              
              <h2 className="title">
                Bienvenue chez
                <span className="highlight"> Entretien Ménager Groupe Cartier</span>
              </h2>
              
              <p className="description">
                Depuis plus de 15 ans, nous transformons votre quotidien avec des services d'entretien 
                ménager de qualité supérieure. Notre équipe d'experts qualifiés utilise des produits 
                écologiques et des techniques modernes pour garantir un environnement impeccable 
                et sain pour votre famille.
              </p>

              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">
                    <Clock size={20} />
                    <span>{counters.experience}</span>
                  </div>
                  <span className="stat-label">ans d'expérience</span>
                </div>
                
                <div className="stat-item">
                  <div className="stat-number">
                    <Users size={20} />
                    <span>{counters.clients}+</span>
                  </div>
                  <span className="stat-label">clients satisfaits</span>
                </div>
                
                <div className="stat-item">
                  <div className="stat-number">
                    <Star size={20} />
                    <span>{counters.satisfaction}%</span>
                  </div>
                  <span className="stat-label">satisfaction</span>
                </div>
              </div>

              <a href="contact">
                <button className="btn btn-primary cta-button">
                  Demander un devis gratuit
                </button>
              </a>
            </div>

            <div className="image-content">
              <div className="image-wrapper">
                <div className="floating-elements">
                  <div className="floating-icon icon-1">
                    <CheckCircle size={24} />
                  </div>
                  <div className="floating-icon icon-2">
                    <Award size={24} />
                  </div>
                  <div className="floating-icon icon-3">
                    <Sparkles size={24} />
                  </div>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Professionnelle du ménage souriante avec ses outils de nettoyage écologiques"
                  className="main-image"
                  loading="lazy"
                />
                
                <div className="experience-badge">
                  <div className="badge-content">
                    <span className="badge-number">15</span>
                    <span className="badge-text">ans d'expérience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section des avantages */}
          <div className="features-section">
            <h3 className="features-title">Pourquoi nous choisir ?</h3>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <CheckCircle size={24} />
                </div>
                <h4>Service Garanti</h4>
                <p>Satisfaction garantie ou service refait gratuitement</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <Sparkles size={24} />
                </div>
                <h4>Produits Écologiques</h4>
                <p>Respectueux de l'environnement et de votre santé</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <Award size={24} />
                </div>
                <h4>Équipe Certifiée</h4>
                <p>Personnel formé et expérimenté avec assurance complète</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <Clock size={24} />
                </div>
                <h4>Ponctualité</h4>
                <p>Respect des horaires convenus et flexibilité</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;