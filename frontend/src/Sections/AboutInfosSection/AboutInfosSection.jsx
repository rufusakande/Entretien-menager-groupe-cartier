import React, { useEffect, useRef } from 'react';
import { CheckCircle, Leaf, Phone, Mail } from 'lucide-react';
import './AboutInfosSection.css';

const AboutInfosSection = () => {
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (leftContentRef.current) observer.observe(leftContentRef.current);
    if (rightContentRef.current) observer.observe(rightContentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about-infos-section" 
      ref={sectionRef}
      role="region" 
      aria-label="Nos valeurs et engagement environnemental"
    >
      <div className="container">
        <div className="infos-grid">
          {/* Section Perfectionnisme */}
          <div className="infos-block perfectionism-block" ref={leftContentRef}>
            <div className="block-header">
              <h2 className="block-title">Perfectionnisme et dynamisme</h2>
            </div>
            
            <div className="block-content">
              <ul className="features-list" role="list">
                <li className="feature-item" role="listitem">
                  <div className="feature-icon" aria-hidden="true">
                    <CheckCircle size={20} />
                  </div>
                  <span className="feature-text">
                    Prendre la charge complète d'entretien ménager des lieux
                  </span>
                </li>
                
                <li className="feature-item" role="listitem">
                  <div className="feature-icon" aria-hidden="true">
                    <CheckCircle size={20} />
                  </div>
                  <span className="feature-text">
                    Maintenir une régularité dans la qualité du travail exécuté
                  </span>
                </li>
                
                <li className="feature-item" role="listitem">
                  <div className="feature-icon" aria-hidden="true">
                    <CheckCircle size={20} />
                  </div>
                  <span className="feature-text">
                    Offrir un service hors pair
                  </span>
                </li>
                
                <li className="feature-item" role="listitem">
                  <div className="feature-icon" aria-hidden="true">
                    <CheckCircle size={20} />
                  </div>
                  <span className="feature-text">
                    Proposer les meilleures solutions pour les besoins immédiats et futurs de notre clientèle
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section Environnement */}
          <div className="infos-block environment-block" ref={rightContentRef}>
            <div className="block-header">
              <div className="title-with-icon">
                <Leaf className="header-icon" size={32} aria-hidden="true" />
                <h2 className="block-title">En harmonie avec l'environnement</h2>
              </div>
            </div>
            
            <div className="block-content">
              <p className="block-description">
                Nous nous soucions de la santé de nos employés, de nos clients et de l'environnement, 
                et c'est pourquoi nous travaillons avec une gamme complète de produits biodégradables 
                qui satisferont tous vos besoins.
              </p>
              
              <div className="cta-section">
                <p className="cta-text">
                  Contactez-nous dès maintenant pour une évaluation gratuite!
                </p>
                
                <div className="cta-buttons">
                  <a 
                    href="tel:+14509990513" 
                    className="btn btn-primary cta-btn"
                    aria-label="Nous appeler pour une évaluation gratuite"
                  >
                    <Phone size={18} aria-hidden="true" />
                    Appeler maintenant
                  </a>
                  
                  <a 
                    href="contact" 
                    className="btn btn-secondary cta-btn"
                    aria-label="Nous écrire par email"
                  >
                    <Mail size={18} aria-hidden="true" />
                    Nous écrire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfosSection;