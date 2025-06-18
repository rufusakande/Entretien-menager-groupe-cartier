import React, { useState, useEffect } from 'react';
import { 
  Home, 
  ChefHat, 
  Sparkles, 
  Bath, 
  Monitor, 
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import './ServicesSection.css';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('ServicesSection');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      icon: Home,
      title: "Ménage et nettoyage de maison",
      description: "Service complet de nettoyage résidentiel avec attention aux détails",
      features: ["Nettoyage en profondeur", "Produits écologiques", "Flexible selon vos besoins"]
    },
    {
      id: 2,
      icon: ChefHat,
      title: "Nettoyage de cuisine",
      description: "Dégraissage et désinfection complète de votre espace culinaire",
      features: ["Dégraissage des surfaces", "Nettoyage électroménager", "Désinfection complète"]
    },
    {
      id: 3,
      icon: Sparkles,
      title: "Nettoyage de vitres",
      description: "Vitres impeccables à l'intérieur comme à l'extérieur",
      features: ["Vitres sans traces", "Intérieur et extérieur", "Produits spécialisés"]
    },
    {
      id: 4,
      icon: Bath,
      title: "Nettoyage salle de bain",
      description: "Hygiène parfaite et élimination du calcaire et moisissures",
      features: ["Anti-calcaire efficace", "Désinfection totale", "Joints et carrelages"]
    },
    {
      id: 5,
      icon: Monitor,
      title: "Nettoyage de bureaux",
      description: "Environnement de travail propre et professionnel",
      features: ["Espaces de travail", "Équipements informatiques", "Zones communes"]
    },
    {
      id: 6,
      icon: Zap,
      title: "Nettoyage de tapis",
      description: "Nettoyage en profondeur et élimination des taches tenaces",
      features: ["Nettoyage vapeur", "Élimination des taches", "Séchage rapide"]
    }
  ];

  return (
    <section id="ServicesSection" className={`services-section ${isVisible ? 'animate' : ''}`}>
      <div className="container">
        <div className="services-header">
          <div className="header-badge">
            <Sparkles size={16} />
            <span>Nos Services Premium</span>
          </div>
          
          <h2 className="services-title">
            Votre fournisseur de choix en entretien ménager 
            <span className="location-highlight">sur la Rive-Sud de Montréal</span>
          </h2>
          
          <p className="services-subtitle">
            Des services d'entretien ménager complets et personnalisés pour répondre à tous vos besoins. 
            Notre équipe experte utilise des techniques modernes et des produits respectueux de l'environnement.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className={`service-card ${activeService === service.id ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="service-icon">
                  <IconComponent size={32} />
                </div>
                
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-features">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="service-arrow">
                  <ArrowRight size={20} />
                </div>
                
                <div className="service-overlay"></div>
              </div>
            );
          })}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Prêt à transformer votre espace ?</h3>
            <p>Contactez-nous dès aujourd'hui pour un devis personnalisé et gratuit</p>
            <div className="cta-buttons">
              <a href="contact">
                <button className="btn btn-primary">
                  Demander un devis
                </button>
              </a>
              <a href="contact">
                <button className="btn btn-secondary">
                  Voir nos tarifs
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="background-decoration">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
    </section>
  );
};

export default ServicesSection;