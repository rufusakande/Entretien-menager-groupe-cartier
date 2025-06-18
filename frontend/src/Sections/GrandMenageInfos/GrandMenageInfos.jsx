import React, { useEffect, useRef, useState } from 'react';
import { 
  CheckCircle, 
  Home, 
  Building, 
  Sparkles, 
  Clock, 
  Shield,
  Star,
  ArrowRight,
  Leaf
} from 'lucide-react';
import './GrandMenageInfos.css';

const GrandMenageInfos = () => {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.cardIndex);
            setVisibleCards(prev => new Set([...prev, cardIndex]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('[data-card-index]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      title: "Grand ménage du printemps",
      description: "Un nettoyage complet de votre maison pour bien commencer la saison. Nous nettoyons en profondeur chaque recoin de votre domicile, des plafonds aux sols, en passant par tous les espaces oubliés.",
      features: [
        "Dépoussiérage complet de tous les meubles",
        "Nettoyage approfondi des surfaces",
        "Entretien des appareils électroménagers",
        "Lavage des vitres intérieures et extérieures"
      ],
      icon: <Sparkles size={32} />,
      image: "cleaning-supplies",
      color: "primary"
    },
    {
      id: 2,
      title: "Ménage après rénovation/construction",
      description: "Remettez votre espace à neuf après des travaux de rénovation ou de construction. Notre équipe spécialisée élimine tous les résidus et la poussière de chantier.",
      features: [
        "Élimination de la poussière de construction",
        "Nettoyage des résidus de peinture et colle",
        "Dégraissage des surfaces",
        "Polissage et finition"
      ],
      icon: <Building size={32} />,
      image: "renovation",
      color: "secondary"
    },
    {
      id: 3,
      title: "Ménage avant et après déménagement",
      description: "Facilitez votre déménagement avec notre service de nettoyage complet. Nous préparons votre ancien logement et accueillons le nouveau dans les meilleures conditions.",
      features: [
        "Nettoyage complet avant départ",
        "Préparation du nouveau logement",
        "Désinfection des espaces",
        "Remise en état impeccable"
      ],
      icon: <Home size={32} />,
      image: "moving",
      color: "accent"
    },
    {
      id: 4,
      title: "Nettoyage de tapis commercial et résidentiel",
      description: "Redonnez vie à vos tapis et moquettes avec nos techniques professionnelles. Nous utilisons des produits spécialisés pour un résultat optimal et durable.",
      features: [
        "Techniques de nettoyage à sec et humide",
        "Élimination des taches tenaces",
        "Désodorisation complète",
        "Protection anti-taches"
      ],
      icon: <Shield size={32} />,
      image: "carpet",
      color: "primary"
    },
    {
      id: 5,
      title: "Nettoyage de meubles résidentiel et commercial",
      description: "Entretenez vos meubles avec notre service professionnel. Nous prenons soin de vos investissements avec des produits adaptés à chaque matériau.",
      features: [
        "Nettoyage adapté à chaque matériau",
        "Traitement des cuirs et tissus",
        "Désinfection et protection",
        "Restauration de l'éclat d'origine"
      ],
      icon: <Star size={32} />,
      image: "furniture",
      color: "secondary"
    }
  ];

  return (
    <section 
      id="GrandMenageInfos" 
      ref={sectionRef}
      role="main"
      aria-labelledby="services-title"
    >
      <div className="container">
        {/* En-tête de section */}
        <div className="section-header">
          <div className="header-badge">
            <Leaf size={20} aria-hidden="true" />
            <span>Services Professionnels</span>
          </div>
          <h2 id="services-title" className="section-title">
            Le printemps est arrivé... C'est l'heure du grand ménage!
          </h2>
          <p className="section-subtitle">
            Découvrez notre gamme complète de services de nettoyage professionnel. 
            Chaque service est conçu pour répondre à vos besoins spécifiques avec 
            l'excellence et la qualité que vous méritez.
          </p>
        </div>

        {/* Grille des services */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-card-index={index}
              className={`service-card ${service.color} ${
                visibleCards.has(index) ? 'animate-in' : ''
              }`}
            >
              <div className="card-visual">
                <div className={`service-image ${service.image}`}>
                  <div className="image-overlay">
                    <div className="service-icon">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features" role="list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <CheckCircle size={16} aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="card-actions">
                  <a href="contact">
                    <button 
                      className="btn btn-primary service-btn"
                      aria-label={`En savoir plus sur ${service.title}`}
                    >
                      En savoir plus
                      <ArrowRight size={18} aria-hidden="true" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section de confiance */}
        <div className="trust-section">
          <div className="trust-content">
            <div className="trust-stats">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Clients satisfaits</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4.9★</div>
                <div className="stat-label">Note moyenne</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Années d'expérience</div>
              </div>
            </div>
            <div className="trust-message">
              <h3>Pourquoi nous choisir ?</h3>
              <p>
                Notre équipe de professionnels expérimentés utilise des produits 
                écologiques et des techniques éprouvées pour vous garantir un 
                résultat impeccable. Satisfaction garantie à 100%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrandMenageInfos;