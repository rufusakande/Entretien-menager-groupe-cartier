import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  Users, 
  TrendingUp, 
  DollarSign, 
  CheckCircle, 
  Shield,
  Clock,
  Handshake,
  Star,
  Building2,
  Phone,
  Mail
} from 'lucide-react';
import './FranchiseInfos.css';

const FranchiseInfos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('contrats');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const advantages = [
    {
      icon: <Award className="icon" />,
      title: "Formation complète",
      description: "Programme de formation approfondi pour maîtriser tous les aspects du métier"
    },
    {
      icon: <TrendingUp className="icon" />,
      title: "Croissance assurée",
      description: "Secteur en pleine expansion avec une demande croissante"
    },
    {
      icon: <Shield className="icon" />,
      title: "Support continu",
      description: "Accompagnement permanent de notre équipe d'experts"
    },
    {
      icon: <DollarSign className="icon" />,
      title: "Rentabilité optimale",
      description: "Modèle économique éprouvé avec retour sur investissement rapide"
    }
  ];

  const contracts = [
    {
      icon: <Building2 className="icon" />,
      title: "Secteur résidentiel",
      description: "Contrats stables avec les particuliers et résidences"
    },
    {
      icon: <Users className="icon" />,
      title: "Secteur commercial",
      description: "Partenariats avec entreprises et bureaux"
    },
    {
      icon: <Clock className="icon" />,
      title: "Contrats récurrents",
      description: "Revenus prévisibles grâce aux abonnements mensuels"
    }
  ];

  return (
    <section id="FranchiseInfos" ref={sectionRef} className={isVisible ? 'visible' : ''}>
      <div className="container">
        <div className="franchise-hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Devenez Votre Propre Patron
              </h1>
              <p className="hero-subtitle">
                Rejoignez le réseau d'experts en entretien ménager le plus dynamique et 
                développez votre entreprise avec notre accompagnement personnalisé.
              </p>
              
              <div className="hero-features">
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <span>Formation professionnelle</span>
                </div>
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <span>Support marketing</span>
                </div>
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <span>Outils de gestion</span>
                </div>
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <span>Accompagnement personnalisé</span>
                </div>
              </div>

              <div className="hero-cta">
                <a href="contact">
                  <button className="btn btn-primary">
                    Demander des informations
                  </button>
                </a>
                <div className="contact-info">
                  <div className="contact-item">
                    <Phone className="contact-icon" />
                    <span>+1 450 999 0513</span>
                  </div>
                  <div className="contact-item">
                    <Mail className="contact-icon" />
                    <span>franchise@groupecartier.com</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hero-image">
              <div className="image-container">
                <div className="businessman-silhouette">
                  <div className="suit-body"></div>
                  <div className="tie"></div>
                  <div className="collar"></div>
                  <div className="cleaning-tools">
                    <div className="tool tool-1"></div>
                    <div className="tool tool-2"></div>
                    <div className="tool tool-3"></div>
                  </div>
                </div>
                <div className="floating-elements">
                  <div className="floating-element element-1">
                    <Star className="star-icon" />
                  </div>
                  <div className="floating-element element-2">
                    <Award className="award-icon" />
                  </div>
                  <div className="floating-element element-3">
                    <TrendingUp className="trend-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="franchise-content">
          <div className="content-tabs">
            <button 
              className={`tab-button ${activeTab === 'contrats' ? 'active' : ''}`}
              onClick={() => setActiveTab('contrats')}
            >
              Des contrats stables et rentables
            </button>
            <button 
              className={`tab-button ${activeTab === 'avantages' ? 'active' : ''}`}
              onClick={() => setActiveTab('avantages')}
            >
              Avantages offerts à nos franchisés
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'contrats' && (
              <div className="contracts-grid">
                {contracts.map((contract, index) => (
                  <div key={index} className="contract-card" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="card-icon">
                      {contract.icon}
                    </div>
                    <h3 className="card-title">{contract.title}</h3>
                    <p className="card-description">{contract.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'avantages' && (
              <div className="advantages-grid">
                {advantages.map((advantage, index) => (
                  <div key={index} className="advantage-card" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="card-icon">
                      {advantage.icon}
                    </div>
                    <h3 className="card-title">{advantage.title}</h3>
                    <p className="card-description">{advantage.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="cleaning-scene">
          <div className="scene-content">
            <div className="scene-text">
              <h2 className="scene-title">Une Formation Manager QUALITÉ</h2>
              <p className="scene-description">
                Notre programme de formation vous prépare à exceller dans tous les aspects 
                de l'entretien ménager professionnel. De la gestion d'équipe aux techniques 
                de nettoyage spécialisées, nous vous donnons toutes les clés du succès.
              </p>
              <div className="quality-features">
                <div className="quality-item">
                  <Handshake className="quality-icon" />
                  <span>Accompagnement personnalisé</span>
                </div>
                <div className="quality-item">
                  <Shield className="quality-icon" />
                  <span>Standards de qualité élevés</span>
                </div>
              </div>
              <a href="contact">
                <button className="btn btn-primary">
                  Découvrir la formation
                </button>
              </a>
              
            </div>
            
            <div className="scene-image">
              <div className="cleaning-team">
                <div className="cleaner cleaner-1">
                  <div className="person-body"></div>
                  <div className="cleaning-equipment vacuum"></div>
                </div>
                <div className="cleaner cleaner-2">
                  <div className="person-body"></div>
                  <div className="cleaning-equipment spray"></div>
                </div>
                <div className="cleaner cleaner-3">
                  <div className="person-body"></div>
                  <div className="cleaning-equipment cloth"></div>
                </div>
                <div className="cleaning-bubbles">
                  <div className="bubble bubble-1"></div>
                  <div className="bubble bubble-2"></div>
                  <div className="bubble bubble-3"></div>
                  <div className="bubble bubble-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseInfos;