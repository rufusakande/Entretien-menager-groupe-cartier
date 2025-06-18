import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, Star } from 'lucide-react';
import './ContactHeros.css';

const ContactHeros = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="ContactHeros" ref={sectionRef} className={isVisible ? 'animate' : ''}>
      <div className="overlay"></div>
      <div className="container">
        <div className="content">
          <div className="hero-content">
            <div className="badge">
              <Star className="icon" />
              <span>Service Premium</span>
            </div>
            
            <h1 className="title">
              Contactez-nous
            </h1>
            
            <p className="subtitle">
              Votre satisfaction est notre priorité. Contactez Entretien Ménager Groupe Cartier 
              pour un service d'entretien professionnel et personnalisé.
            </p>

            <div className="features">
              <div className="feature">
                <CheckCircle className="feature-icon" />
                <span>Devis gratuit sous 24h</span>
              </div>
              <div className="feature">
                <CheckCircle className="feature-icon" />
                <span>Équipe certifiée et assurée</span>
              </div>
              <div className="feature">
                <CheckCircle className="feature-icon" />
                <span>Satisfaction garantie</span>
              </div>
            </div>

            <div className="cta-buttons">
              <a href="tel:+14509990513" className="btn btn-primary">
                <Phone className="btn-icon" />
                Appeler maintenant
              </a>
              <a href="#ContactSection" className="btn btn-secondary">
                Demander un devis
              </a>
            </div>
          </div>

          <div className="contact-cards">
            <div className="contact-card">
              <div className="card-icon">
                <Phone />
              </div>
              <h3>Téléphone</h3>
              <p>+1 450 999 0513</p>
              <span className="availability">Disponible 7j/7</span>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <Mail />
              </div>
              <h3>Email</h3>
              <p>contact@groupecartier.com</p>
              <span className="availability">Réponse sous 2h</span>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <MapPin />
              </div>
              <h3>Zone d'intervention</h3>
              <p>Québec, Canada</p>
              <span className="availability">Déplacement gratuit</span>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <Clock />
              </div>
              <h3>Horaires</h3>
              <p>Lun - Dim : 8h - 20h</p>
              <span className="availability">Urgences 24h/24</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeros;