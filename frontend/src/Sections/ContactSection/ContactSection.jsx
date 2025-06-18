import React, { useState, useEffect } from 'react';
import { Send, Phone, Mail, MapPin, User, MessageSquare } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('ContactSection');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi de formulaire
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 1500);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section id="ContactSection" className={`contact-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="contact-content">
          <div className="contact-header">
            <h2 className="section-title">
              Vous avez des questions pour notre équipe ?
            </h2>
            <div className="contact-info">
              <div className="phone-info">
                <Phone size={20} />
                <span>+1 450 999 0513</span>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="contact-form" role="form">
              <div className="form-group">
                <label htmlFor="name" className="sr-only">Nom complet</label>
                <div className="input-wrapper">
                  <User className="input-icon" size={18} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nom complet"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    aria-label="Votre nom complet"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="sr-only">Adresse e-mail</label>
                <div className="input-wrapper">
                  <Mail className="input-icon" size={18} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    aria-label="Votre adresse e-mail"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="sr-only">Numéro de téléphone</label>
                <div className="input-wrapper">
                  <Phone className="input-icon" size={18} />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Téléphone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    aria-label="Votre numéro de téléphone"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="sr-only">Votre message</label>
                <div className="input-wrapper textarea-wrapper">
                  <MessageSquare className="input-icon" size={18} />
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Votre message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    aria-label="Votre message"
                  ></textarea>
                </div>
              </div>

                <div
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${submitStatus === 'success' ? 'success' : ''}`}
                  onClick={handleSubmit}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                  style={{ 
                    opacity: !isFormValid || isSubmitting ? 0.6 : 1,
                    pointerEvents: !isFormValid || isSubmitting ? 'none' : 'auto'
                  }}
                  aria-label="Envoyer le message"
                >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Envoi en cours...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <span className="success-icon">✓</span>
                    Message envoyé !
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Envoyer
                  </>
                )}
                </div>

              {submitStatus === 'success' && (
                <div className="success-message" role="alert">
                  Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;