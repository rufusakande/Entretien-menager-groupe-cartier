import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Star,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      alert('Merci pour votre inscription !');
    }, 1000);
  };

  const services = [
    'Nettoyage résidentiel',
    'Nettoyage commercial',
    'Entretien de bureaux',
    'Grand ménage',
    'Nettoyage post-construction'
  ];

  const quickLinks = [
    { name: 'À propos', href: 'apropos' },
    { name: 'Grand Ménage', href: 'grand-menage' },
    { name: 'Résidentiel', href: 'residentiel' },
    { name: 'Nettoyage commercial', href: 'nettoyage-commercial' },
    { name: 'Nettoyage bureau', href: 'nettoyage-bureau' },
    { name: 'Franchise', href: 'franchise' },
    { name: 'Contact', href: 'contact' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer id="Footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Section Entreprise */}
            <div className="footer-section company-info">
              <div className="company-logo">
                <h3>Entretien Ménager</h3>
                <span className="brand-accent">Groupe Cartier</span>
              </div>
              <p className="company-description">
                Votre partenaire de confiance pour tous vos besoins d'entretien ménager. 
                Service professionnel, équipe qualifiée et satisfaction garantie depuis plus de 15 ans.
              </p>
              <div className="rating-display">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="rating-text">4.9/5 - Plus de 500 clients satisfaits</span>
              </div>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Section Services */}
            <div className="footer-section services-section">
              <h4 className="section-title">Nos Services</h4>
              <ul className="services-list">
                {services.map((service, index) => (
                  <li key={index} className="service-item">
                    <ChevronRight size={14} />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section Liens Rapides */}
            <div className="footer-section quick-links-section">
              <h4 className="section-title">Liens Rapides</h4>
              <ul className="quick-links">
                {quickLinks.map((link, index) => (
                  <li key={index} className="quick-link-item">
                    <a href={link.href}>
                      <ChevronRight size={14} />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section Contact */}
            <div className="footer-section contact-section">
              <h4 className="section-title">Contactez-nous</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={18} />
                  <div>
                    <span className="contact-label">Adresse</span>
                    <span className="contact-value">3180 chemin chambly bureau, 301 Longueuil, code postal J4L1N6</span>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone size={18} />
                  <div>
                    <span className="contact-label">Téléphone</span>
                    <a href="tel:+14509990513" className="contact-value phone-link">
                      +1 450 999 0513
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail size={18} />
                  <div>
                    <span className="contact-label">Email</span>
                    <a href="mailto:info@groupecartier.com" className="contact-value email-link">
                      info@groupecartier.com
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <Clock size={18} />
                  <div>
                    <span className="contact-label">Horaires</span>
                    <span className="contact-value">Lun-Ven: 8h-18h, Sam: 9h-16h</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Newsletter */}
            <div className="footer-section newsletter-section">
              <h4 className="section-title">Restez Informé</h4>
              <p className="newsletter-description">
                Recevez nos conseils d'entretien et nos offres spéciales directement dans votre boîte email.
              </p>
              <div className="newsletter-form">
                <div className="input-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse email"
                    className="newsletter-input"
                    disabled={isSubmitting}
                  />
                  <button 
                    onClick={handleNewsletterSubmit}
                    className="newsletter-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Envoi...' : 'S\'inscrire'}
                  </button>
                </div>
              </div>
              <div className="trust-badges">
                <div className="badge">
                  <span className="badge-icon">🔒</span>
                  <span className="badge-text">100% Sécurisé</span>
                </div>
                <div className="badge">
                  <span className="badge-icon">✅</span>
                  <span className="badge-text">Assuré & Certifié</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Entretien Ménager Groupe Cartier. Tous droits réservés.</p>
            </div>
            <div className="legal-links">
              <a href="#privacy">Politique de confidentialité</a>
              <span className="separator">|</span>
              <a href="#terms">Conditions d'utilisation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;