import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle, 
  Home, 
  Sparkles, 
  Clock, 
  Shield, 
  Users, 
  Star,
  ClipboardList,
  Zap,
  Heart,
  Award,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import './ResidentielInfos.css';

const ResidentielInfos = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [expandedCard, setExpandedCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section');
            setVisibleSections(prev => new Set([...prev, sectionId]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = sectionRef.current?.querySelectorAll('[data-section]');
    sections?.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const workPlan = {
    title: "Plan de travail d'une visite d'entretien ménager",
    icon: ClipboardList,
    sections: [
      {
        title: "Cuisine",
        icon: Home,
        items: [
          "Nettoyage et désinfection des surfaces de travail",
          "Nettoyage de l'évier et des robinets (calcaire, graisse...)",
          "Nettoyage des façades des meubles bas et hauts, micro-ondes, hotte aspirante et autres électroménagers",
          "Nettoyage du réfrigérateur (intérieur/extérieur) selon demande",
          "Balayage/aspirateur et lavage du sol",
          "Vider la poubelle et changer le sac"
        ]
      },
      {
        title: "Salle de bain/WC",
        icon: Sparkles,
        items: [
          "Nettoyage et désinfection des sanitaires",
          "Nettoyage des miroirs",
          "Désinfection des sols et plinthes",
          "Vider les poubelles et changer les sacs"
        ]
      },
      {
        title: "Salon/Salle à manger",
        icon: Users,
        items: [
          "Nettoyage du mobilier (dépoussiérage selon accessibilité et sans déplacement)",
          "Aspirer les canapés, fauteuils et coussins (selon matière et accessibilité)",
          "Nettoyage des vitres intérieures (fenêtres, baies vitrées) - hauteur d'homme seulement",
          "Vider les poubelles et changer les sacs",
          "Balayage/aspirateur et lavage du sol"
        ]
      },
      {
        title: "Chambre(s)/Bureau/Couloir",
        icon: Heart,
        items: [
          "Dépoussiérage du mobilier selon accessibilité et sans déplacement (bibliothèque, bureau, etc.)",
          "Nettoyage des vitres intérieures - hauteur d'homme",
          "Dépoussiérage plinthes si nécessaire",
          "Ranger selon les directives du client",
          "Balayage/aspirateur et lavage du sol",
          "Vider les poubelles et changer les sacs"
        ]
      },
      {
        title: "Tâches diverses",
        icon: Star,
        items: [
          "Dépoussiérage des luminaires selon accessibilité",
          "Cirage des meubles si demandé par le client",
          "Vider les poubelles et changer les sacs"
        ]
      }
    ]
  };

  const specialTasks = {
    title: "Travaux spéciaux d'entretien ménager",
    icon: Award,
    items: [
      "Nettoyage après travaux/rénovation",
      "Nettoyage avant/après déménagement",
      "Nettoyage des locaux techniques (garages...)",
      "Nettoyage en profondeur (grand ménage saisonnier)",
      "Nettoyage des vitres extérieures (selon accessibilité)",
      "Nettoyage de l'argenterie",
      "Nettoyage des tapis",
      "Nettoyage des meubles en cuir"
    ]
  };

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section id="ResidentielInfos" ref={sectionRef}>
      <div className="container">
        <div 
          className={`section-header ${visibleSections.has('header') ? 'visible' : ''}`}
          data-section="header"
        >
          <div className="header-badge">
            <Shield className="badge-icon" />
            <span>Service Professionnel</span>
          </div>
          <h2 className="section-title">Nettoyage Résidentiel</h2>
          <p className="section-subtitle">
            Un service complet et personnalisé pour maintenir votre domicile dans un état impeccable
          </p>
        </div>

        <div className="infos-grid">
          {/* Plan de travail */}
          <div 
            className={`main-card ${visibleSections.has('workplan') ? 'visible' : ''}`}
            data-section="workplan"
          >
            <div className="card-header">
              <div className="card-icon-wrapper">
                <workPlan.icon className="card-icon" />
              </div>
              <h3 className="card-title">{workPlan.title}</h3>
            </div>
            
            <div className="rooms-grid">
              {workPlan.sections.map((room, index) => (
                <div key={index} className="room-card">
                  <div 
                    className="room-header"
                    onClick={() => toggleCard(`room-${index}`)}
                  >
                    <div className="room-icon-wrapper">
                      <room.icon className="room-icon" />
                    </div>
                    <h4 className="room-title">{room.title}</h4>
                    <div className="expand-icon">
                      {expandedCard === `room-${index}` ? <ChevronUp /> : <ChevronDown />}
                    </div>
                  </div>
                  
                  <div className={`room-content ${expandedCard === `room-${index}` ? 'expanded' : ''}`}>
                    <ul className="task-list">
                      {room.items.map((task, taskIndex) => (
                        <li key={taskIndex} className="task-item">
                          <CheckCircle className="task-icon" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Travaux spéciaux */}
          <div 
            className={`special-card ${visibleSections.has('special') ? 'visible' : ''}`}
            data-section="special"
          >
            <div className="card-header">
              <div className="card-icon-wrapper special">
                <specialTasks.icon className="card-icon" />
              </div>
              <h3 className="card-title">{specialTasks.title}</h3>
            </div>
            
            <div className="special-grid">
              {specialTasks.items.map((task, index) => (
                <div key={index} className="special-item">
                  <Zap className="special-icon" />
                  <span>{task}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className={`cta-section ${visibleSections.has('cta') ? 'visible' : ''}`}
          data-section="cta"
        >
          <div className="cta-content">
            <h3 className="cta-title">Prêt à transformer votre domicile ?</h3>
            <p className="cta-text">
              Contactez-nous pour un devis personnalisé et découvrez la différence 
              d'un service d'entretien professionnel.
            </p>
            <div className="cta-buttons">
              <a href="contact">
                <button className="btn btn-primary cta-primary">
                  Demander un Devis
                </button>
              </a>
              <a href="contact">
                <button className="btn btn-secondary cta-secondary">
                  Nos Tarifs
                </button>
              </a>
            </div>
          </div>
          
          <div className="cta-features">
            <div className="feature-badge">
              <Clock className="feature-icon" />
              <span>Ponctualité garantie</span>
            </div>
            <div className="feature-badge">
              <Shield className="feature-icon" />
              <span>Assurance complète</span>
            </div>
            <div className="feature-badge">
              <Star className="feature-icon" />
              <span>Satisfaction 100%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentielInfos;