import { useState, useEffect } from 'react';
import { Phone, Mail, Clock, Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState('accueil');
  const [isCommercialOpen, setIsCommercialOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    setIsMenuOpen(false);
    setIsCommercialOpen(false);
  };

  const toggleCommercialMenu = () => {
    setIsCommercialOpen(!isCommercialOpen);
  };

  return (
    <header id="Header" className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={16} />
              <span>info@entretienmenagercartier.com</span>
            </div>
            <div className="contact-item">
              <Phone size={16} />
              <span>+1 450 999 0513</span>
            </div>
            <div className="contact-item">
              <Clock size={16} />
              <span>Heures d'ouverture: 9:30AM - 5:30PM</span>
            </div>
          </div>
          
            <a href="contact">
              <button className="submission-btn">
                Soumission
              </button>
            </a>
          
        </div>
      </div>
             
      <nav className="main-nav">
        <div className="container">
          <div className="logo" onClick={() => handleMenuClick('accueil')}>
            <div className="logo-icon">
              <div className="logo-circle">
                <div className="logo-symbol">EM</div>
              </div>
            </div>
            <div className="logo-text">
              <span className="company-name">ENTRETIEN</span>
              <span className="company-name">MÉNAGER</span>
              <span className="company-subtitle">GROUPE CARTIER</span>
            </div>
          </div>
                     
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a 
              href="/" 
              className={`nav-link ${activeMenu === 'accueil' ? 'active' : ''}`}
              onClick={() => handleMenuClick('accueil')}
            >
              ACCUEIL
            </a>
            <a 
              href="apropos" 
              className={`nav-link ${activeMenu === 'apropos' ? 'active' : ''}`}
              onClick={() => handleMenuClick('apropos')}
            >
              À PROPOS
            </a>
            <a 
              href="grand-menage" 
              className={`nav-link ${activeMenu === 'grand-menage' ? 'active' : ''}`}
              onClick={() => handleMenuClick('grand-menage')}
            >
              GRAND MÉNAGE
            </a>
            <a 
              href="residentiel" 
              className={`nav-link ${activeMenu === 'residentiel' ? 'active' : ''}`}
              onClick={() => handleMenuClick('residentiel')}
            >
              RÉSIDENTIEL
            </a>
            
            {/* Menu Commercial avec sous-menu */}
            <div className="nav-dropdown">
              <button 
                className={`nav-link dropdown-toggle ${activeMenu === 'commercial' || activeMenu === 'nettoyage-commercial' || activeMenu === 'nettoyage-bureau' ? 'active' : ''}`}
                onClick={toggleCommercialMenu}
              >
                COMMERCIAL
                <ChevronDown 
                  size={16} 
                  className={`dropdown-icon ${isCommercialOpen ? 'rotated' : ''}`}
                />
              </button>
              <div className={`dropdown-menu ${isCommercialOpen ? 'show' : ''}`}>
                <a 
                  href="nettoyage-commercial" 
                  className={`dropdown-item ${activeMenu === 'nettoyage-commercial' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('nettoyage-commercial')}
                >
                  Nettoyage Commercial
                </a>
                <a 
                  href="nettoyage-bureau" 
                  className={`dropdown-item ${activeMenu === 'nettoyage-bureau' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('nettoyage-bureau')}
                >
                  Nettoyage de Bureau
                </a>
              </div>
            </div>
            
            <a 
              href="franchise" 
              className={`nav-link ${activeMenu === 'franchise' ? 'active' : ''}`}
              onClick={() => handleMenuClick('franchise')}
            >
              FRANCHISE
            </a>
            <a 
              href="contact" 
              className={`nav-link ${activeMenu === 'contact' ? 'active' : ''}`}
              onClick={() => handleMenuClick('contact')}
            >
              CONTACT
            </a>
          </div>
                     
          <button 
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;