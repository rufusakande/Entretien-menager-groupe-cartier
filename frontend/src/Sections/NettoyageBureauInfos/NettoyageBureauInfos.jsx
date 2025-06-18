import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  CheckCircle, 
  Clock, 
  Shield, 
  Users, 
  Sparkles, 
  MapPin,
  Phone,
  Mail,
  Calendar,
  Award,
  Target,
  Zap
} from 'lucide-react';
import './NettoyageBureauInfos.css';

const NettoyageBureauInfos = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Building2,
      title: "Nettoyage quotidien",
      description: "Entretien régulier de tous vos espaces de travail"
    },
    {
      icon: Shield,
      title: "Désinfection complète",
      description: "Protocoles sanitaires rigoureux pour un environnement sain"
    },
    {
      icon: Sparkles,
      title: "Nettoyage approfondi",
      description: "Services de nettoyage intensif périodique"
    },
    {
      icon: Users,
      title: "Espaces communs",
      description: "Maintenance des zones de réunion et espaces partagés"
    }
  ];

  const detailedServices = [
    "Nettoyage et désinfection des surfaces de travail",
    "Aspiration et nettoyage des sols",
    "Nettoyage des sanitaires et leur désinfection",
    "Vidage des corbeilles et gestion des déchets",
    "Nettoyage des vitres intérieures et extérieures",
    "Entretien des espaces de réception",
    "Nettoyage des cuisines et espaces de restauration",
    "Dépoussiérage du mobilier et équipements",
    "Nettoyage des escaliers et ascenseurs",
    "Maintenance des espaces de stockage",
    "Nettoyage post-travaux et remise en état",
    "Services d'urgence 24h/24"
  ];

  const coverage = [
    "Montréal et région métropolitaine",
    "Longueuil et Rive-Sud",
    "Laval et Rive-Nord",
    "Brossard et environs",
    "Terrebonne et Mascouche",
    "Saint-Jérôme et Laurentides"
  ];

  return (
    <section id="NettoyageBureauInfos">
      <div className="container">
        {/* En-tête de section */}
        <div 
          className={`section-header ${visibleSections.header ? 'visible' : ''}`}
          id="header"
          ref={el => sectionRefs.current.header = el}
        >
          <div className="header-badge">
            <Award className="badge-icon" />
            <span>Services Professionnels</span>
          </div>
          <h2 className="section-title">
            Ménage de bureaux, nettoyage de bureaux Montréal, Longueuil, Brossard et régions
          </h2>
          <p className="section-description">
            Entretien Ménager Groupe Cartier vous propose des services de nettoyage professionnel 
            adaptés à vos besoins. Notre équipe expérimentée garantit un environnement de travail 
            impeccable pour votre entreprise.
          </p>
        </div>

        {/* Services principaux */}
        <div 
          className={`services-grid ${visibleSections.services ? 'visible' : ''}`}
          id="services"
          ref={el => sectionRefs.current.services = el}
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                <service.icon />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Contenu principal */}
        <div className="main-content">
          {/* Plan de service détaillé */}
          <div 
            className={`content-block ${visibleSections.plan ? 'visible' : ''}`}
            id="plan"
            ref={el => sectionRefs.current.plan = el}
          >
            <div className="content-header">
              <div className="content-icon">
                <Target className="icon" />
              </div>
              <h3 className="content-title">
                Plan de Service d'entretien et de nettoyage Commercial sur Montréal, Longueuil, Brossard et régions
              </h3>
            </div>
            
            <div className="content-body">
              <p className="content-intro">
                Nous établissons un plan de service personnalisé pour répondre aux besoins spécifiques 
                de votre entreprise, incluant la fréquence, les zones prioritaires, et les protocoles 
                de qualité adaptés à votre secteur d'activité.
              </p>
              
              <div className="services-detailed">
                <h4 className="subsection-title">Nos services incluent :</h4>
                <div className="services-list">
                  {detailedServices.map((service, index) => (
                    <div key={index} className="service-item">
                      <CheckCircle className="check-icon" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Zone de couverture */}
          <div 
            className={`content-block ${visibleSections.coverage ? 'visible' : ''}`}
            id="coverage"
            ref={el => sectionRefs.current.coverage = el}
          >
            <div className="content-header">
              <div className="content-icon">
                <MapPin className="icon" />
              </div>
              <h3 className="content-title">Zones de service</h3>
            </div>
            
            <div className="content-body">
              <p className="content-intro">
                Nous desservons l'ensemble de la région métropolitaine de Montréal 
                avec des équipes locales pour garantir un service rapide et efficace.
              </p>
              
              <div className="coverage-grid">
                {coverage.map((zone, index) => (
                  <div key={index} className="coverage-item">
                    <MapPin className="location-icon" />
                    <span>{zone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Avantages */}
          <div 
            className={`content-block ${visibleSections.advantages ? 'visible' : ''}`}
            id="advantages"
            ref={el => sectionRefs.current.advantages = el}
          >
            <div className="content-header">
              <div className="content-icon">
                <Zap className="icon" />
              </div>
              <h3 className="content-title">Pourquoi choisir nos services ?</h3>
            </div>
            
            <div className="content-body">
              <div className="advantages-grid">
                <div className="advantage-item">
                  <Clock className="advantage-icon" />
                  <div className="advantage-content">
                    <h4>Flexibilité horaire</h4>
                    <p>Services adaptés à vos horaires de bureau</p>
                  </div>
                </div>
                
                <div className="advantage-item">
                  <Shield className="advantage-icon" />
                  <div className="advantage-content">
                    <h4>Assurance qualité</h4>
                    <p>Protocoles rigoureux et contrôles réguliers</p>
                  </div>
                </div>
                
                <div className="advantage-item">
                  <Users className="advantage-icon" />
                  <div className="advantage-content">
                    <h4>Équipe expérimentée</h4>
                    <p>Personnel formé et professionnel</p>
                  </div>
                </div>
                
                <div className="advantage-item">
                  <Calendar className="advantage-icon" />
                  <div className="advantage-content">
                    <h4>Planification sur mesure</h4>
                    <p>Calendrier adapté à vos besoins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div 
          className={`cta-section ${visibleSections.cta ? 'visible' : ''}`}
          id="cta"
          ref={el => sectionRefs.current.cta = el}
        >
          <div className="cta-content">
            <h3 className="cta-title">Prêt à améliorer votre environnement de travail ?</h3>
            <p className="cta-description">
              Contactez-nous pour un devis personnalisé et découvrez comment nous pouvons 
              vous aider à maintenir un espace de travail impeccable.
            </p>
            <div className="cta-actions">
              <a href="contact">
                <button className="btn btn-primary">
                  <Phone className="btn-icon" />
                  Demander un devis
                </button>
              </a>
              <a href="contact">
                <button className="btn btn-secondary">
                  <Mail className="btn-icon" />
                  Nous contacter
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NettoyageBureauInfos;