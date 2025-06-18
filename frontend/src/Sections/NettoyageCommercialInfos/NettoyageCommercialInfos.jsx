import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  CheckCircle, 
  Users, 
  Calendar, 
  Clock, 
  Shield, 
  Award, 
  Sparkles,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';
import './NettoyageCommercialInfos.css';

const NettoyageCommercialInfos = () => {
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

    return () => observer.disconnect();
  }, []);

  const leaders = [
    {
      title: "Équipe Formée",
      description: "Personnel qualifié et expérimenté dans le nettoyage commercial",
      icon: Users
    },
    {
      title: "Matériel Professionnel", 
      description: "Équipements de pointe pour un nettoyage efficace et écologique",
      icon: Award
    },
    {
      title: "Techniques Avancées",
      description: "Méthodes innovantes adaptées à chaque type d'espace commercial",
      icon: Sparkles
    },
    {
      title: "Service Personnalisé",
      description: "Solutions sur-mesure selon vos besoins spécifiques",
      icon: Shield
    }
  ];

  const services = [
    "Nettoyage quotidien des bureaux",
    "Entretien des espaces communs", 
    "Désinfection des surfaces de contact",
    "Nettoyage des vitres et façades",
    "Entretien des sols (moquette, carrelage, parquet)",
    "Vidage et nettoyage des poubelles",
    "Nettoyage et désinfection des sanitaires",
    "Entretien des espaces de restauration",
    "Nettoyage après événements",
    "Maintenance préventive des locaux",
    "Service de nettoyage d'urgence",
    "Entretien écologique sur demande"
  ];

  return (
    <section 
      id="NettoyageCommercialInfos" 
      ref={sectionRef}
      className={`infos-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="container">
        <div className="section-header">
          <div className="header-badge">
            <Building2 className="badge-icon" />
            <span>Excellence Professionnelle</span>
          </div>
          
          <h2 className="section-title">
            Leaders en Entretien Ménager Commercial
          </h2>
          
          <p className="section-description">
            Entretien Ménager Groupe Cartier s'impose comme référence dans le nettoyage commercial 
            grâce à une approche professionnelle, des équipes qualifiées et des solutions adaptées 
            à chaque secteur d'activité.
          </p>
        </div>

        <div className="leaders-grid">
          {leaders.map((leader, index) => {
            const IconComponent = leader.icon;
            return (
              <div key={index} className="leader-card">
                <div className="card-icon">
                  <IconComponent />
                </div>
                <h3 className="card-title">{leader.title}</h3>
                <p className="card-description">{leader.description}</p>
                <div className="card-decoration"></div>
              </div>
            );
          })}
        </div>

        <div className="service-plan">
          <div className="plan-header">
            <div className="plan-badge">
              <Calendar className="plan-icon" />
              <span>Plan de Service</span>
            </div>
            
            <h3 className="plan-title">
              Nos Services de Nettoyage Commercial Personnalisés
            </h3>
            
            <p className="plan-description">
              Chaque entreprise étant unique, nous proposons des solutions de nettoyage 
              adaptées à votre secteur d'activité, vos horaires et vos exigences spécifiques.
            </p>
          </div>

          <div className="services-container">
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-item">
                  <CheckCircle className="service-check" />
                  <span className="service-text">{service}</span>
                </div>
              ))}
            </div>

            <div className="service-highlight">
              <div className="highlight-content">
                <div className="highlight-icon">
                  <Clock />
                </div>
                <div className="highlight-info">
                  <h4 className="highlight-title">Disponibilité 24h/7j</h4>
                  <p className="highlight-text">
                    Service d'urgence et interventions flexibles selon vos contraintes
                  </p>
                </div>
              </div>
              
              <div className="highlight-actions">
                <a href="contact">
                  <button className="btn btn-primary contact-btn">
                    <Phone className="btn-icon" />
                    Devis Personnalisé
                    <ArrowRight className="arrow-icon" />
                  </button>
                </a>
                <a href="contact">
                  <button className="btn btn-secondary info-btn">
                    <Mail className="btn-icon" />
                    Plus d'Informations
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NettoyageCommercialInfos;