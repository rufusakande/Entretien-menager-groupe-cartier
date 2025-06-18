import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  AlertCircle,
  Loader2,
  Star,
  Shield,
  Award,
  Users
} from 'lucide-react';
import './HomeHeros.css';

const HomeHeros = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [touched, setTouched] = useState({});

  // Validation patterns
  const patterns = {
    phone: /^(\+?1[-.\s]?)?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    name: /^[a-zA-ZÀ-ÿ\s-']{2,30}$/
  };

  // Validation function
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!value.trim()) {
          error = `${name === 'firstName' ? 'Le prénom' : 'Le nom'} est requis`;
        } else if (!patterns.name.test(value.trim())) {
          error = `${name === 'firstName' ? 'Le prénom' : 'Le nom'} doit contenir entre 2 et 30 caractères (lettres uniquement)`;
        }
        break;

      case 'phone':
        if (!value.trim()) {
          error = 'Le numéro de téléphone est requis';
        } else if (!patterns.phone.test(value.trim())) {
          error = 'Format de téléphone invalide (ex: 514-123-4567)';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'L\'adresse email est requise';
        } else if (!patterns.email.test(value.trim())) {
          error = 'Format d\'email invalide';
        }
        break;

      case 'address':
        if (!value.trim()) {
          error = 'L\'adresse est requise';
        } else if (value.trim().length < 5) {
          error = 'L\'adresse doit contenir au moins 5 caractères';
        }
        break;

      case 'message':
        if (value.trim().length > 500) {
          error = 'Le message ne peut pas dépasser 500 caractères';
        }
        break;

      default:
        break;
    }

    return error;
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Format phone number
    let formattedValue = value;
    if (name === 'phone') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));

    // Validate field if it has been touched
    if (touched[name]) {
      const error = validateField(name, formattedValue);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  // Handle field blur
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  // Validate entire form
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'message') { // Message is optional
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length > 0) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('loading');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          address: '',
          message: ''
        });
        setErrors({});
        setTouched({});
        setSubmitStatus(null);
      }, 3000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = Object.keys(validateForm()).length === 0;

  return (
    <section id="HomeHeros">
      <div className="hero-background">
        <div className="background-overlay"></div>
        <div className="background-pattern"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          {/* Section Gauche - Contenu */}
          <div className="hero-left">
            <div className="hero-badges">
              <div className="badge">
                <Shield size={16} />
                <span>Assuré & Certifié</span>
              </div>
              <div className="badge">
                <Award size={16} />
                <span>15+ ans d'expérience</span>
              </div>
              <div className="badge">
                <Users size={16} />
                <span>500+ clients satisfaits</span>
              </div>
            </div>

            <h1 className="hero-title">
              Votre spécialiste en
              <span className="title-highlight">entretien ménager</span>
            </h1>
            
            <p className="hero-subtitle">
              Femme de Ménage spécialisée en entretien ménager
              <br />
              sur la Rive-Sud de Montréal
            </p>

            <div className="hero-features">
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Nettoyage résidentiel</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Service commercial</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Équipe qualifiée</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Satisfaction garantie</span>
              </div>
            </div>

            <div className="hero-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <span className="rating-text">4.9/5 sur Google Reviews</span>
            </div>

            <div className="hero-cta">
              <a href="contact">
                <button className="btn btn-primary">
                  Devis Gratuit
                </button>
              </a>
              <div className="phone-cta">
                <Phone size={18} />
                <span>+1 450 999 0513</span>
              </div>
            </div>
          </div>

          {/* Section Droite - Formulaire */}
          <div className="hero-right">
            <div className="contact-form-container">
              <div className="form-header">
                <div className="form-phone">
                  <Phone size={18} />
                  <span>+1 450 999 0513</span>
                </div>
                <h3>Évaluation Gratuite</h3>
              </div>

              <div className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Prénom"
                      className={`form-input ${errors.firstName ? 'error' : ''} ${touched.firstName && !errors.firstName ? 'valid' : ''}`}
                      disabled={isSubmitting}
                    />
                    {errors.firstName && (
                      <div className="error-message">
                        <AlertCircle size={14} />
                        <span>{errors.firstName}</span>
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Nom"
                      className={`form-input ${errors.lastName ? 'error' : ''} ${touched.lastName && !errors.lastName ? 'valid' : ''}`}
                      disabled={isSubmitting}
                    />
                    {errors.lastName && (
                      <div className="error-message">
                        <AlertCircle size={14} />
                        <span>{errors.lastName}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Téléphone"
                    className={`form-input ${errors.phone ? 'error' : ''} ${touched.phone && !errors.phone ? 'valid' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <div className="error-message">
                      <AlertCircle size={14} />
                      <span>{errors.phone}</span>
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Email"
                    className={`form-input ${errors.email ? 'error' : ''} ${touched.email && !errors.email ? 'valid' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <div className="error-message">
                      <AlertCircle size={14} />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Adresse"
                    className={`form-input ${errors.address ? 'error' : ''} ${touched.address && !errors.address ? 'valid' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.address && (
                    <div className="error-message">
                      <AlertCircle size={14} />
                      <span>{errors.address}</span>
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Message (optionnel)"
                    rows="4"
                    className={`form-input ${errors.message ? 'error' : ''}`}
                    disabled={isSubmitting}
                  />
                  <div className="char-count">
                    {formData.message.length}/500 caractères
                  </div>
                  {errors.message && (
                    <div className="error-message">
                      <AlertCircle size={14} />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                <button 
                  onClick={handleSubmit}
                  className={`submit-btn ${submitStatus === 'success' ? 'success' : ''} ${submitStatus === 'error' ? 'error' : ''}`}
                  disabled={isSubmitting || !isFormValid}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle size={18} />
                      <span>Message envoyé !</span>
                    </>
                  ) : (
                    <span>Envoyer</span>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    <CheckCircle size={16} />
                    <span>Merci ! Nous vous contacterons sous 24h.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeros;