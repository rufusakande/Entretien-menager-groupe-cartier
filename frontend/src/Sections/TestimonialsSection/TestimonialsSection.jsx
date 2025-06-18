import React, { useState, useEffect } from 'react';
import { Star, User, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './TestimonialsSection.css';
import clientImg1 from '../../assets/Images/him.webp'
import clientImg2 from '../../assets/Images/mia-ber.webp'

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      rating: 5,
      text: "Service exceptionnel ! Mon bureau n'a jamais été aussi propre. L'équipe est professionnelle et ponctuelle.",
      img: clientImg2,
      role: "Directrice Marketing"
    },
    {
      id: 2,
      name: "Jean Martin",
      rating: 5,
      text: "Je recommande vivement leurs services. Un travail de qualité et des tarifs très compétitifs.",
      img: clientImg1,
      role: "Gérant d'entreprise"
    }
  ];

  // Observation pour l'animation d'entrée
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('TestimonialsSection');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Défilement automatique
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      handleSlideChange((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  // Gestion des transitions
  const handleSlideChange = (newIndex) => {
    if (typeof newIndex === 'function') {
      newIndex = newIndex(currentTestimonial);
    }
    
    if (newIndex === currentTestimonial) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTestimonial(newIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  // Navigation
  const goToNext = () => {
    const nextIndex = (currentTestimonial + 1) % testimonials.length;
    handleSlideChange(nextIndex);
  };

  const goToPrevious = () => {
    const prevIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    handleSlideChange(prevIndex);
  };

  const goToSlide = (index) => {
    handleSlideChange(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`star ${index < rating ? 'filled' : ''}`}
        size={20}
      />
    ));
  };

  return (
    <section 
      id="TestimonialsSection" 
      className={`testimonials-section ${isVisible ? 'visible' : ''}`}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Ce que nos clients disent de nous</h2>
          <div className="title-underline"></div>
        </div>

        {/* Navigation Buttons */}
        <div className="carousel-navigation">
          <button
            className="nav-button nav-button-prev"
            onClick={goToPrevious}
            aria-label="Avis précédent"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="nav-button nav-button-next"
            onClick={goToNext}
            aria-label="Avis suivant"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="testimonials-carousel">
          <div className="testimonials-track">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${index === currentTestimonial ? 'active' : ''} ${isTransitioning ? 'transitioning' : ''}`}
                style={{ 
                  transform: `translateX(${(index - currentTestimonial) * 100}%)`,
                  opacity: index === currentTestimonial ? 1 : 0,
                  visibility: Math.abs(index - currentTestimonial) <= 1 ? 'visible' : 'hidden'
                }}
              >
                <div className="quote-icon">
                  <Quote size={24} />
                </div>
                
                <div className="testimonial-content">
                  <p className="testimonial-text">{testimonial.text}</p>
                  
                  <div className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img className="avatar-emoji" src={testimonial.img} alt="Entretien menager groupe cartier" />
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <span className="author-role">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="carousel-progress">
          <div 
            className="progress-bar"
            style={{ width: `${((currentTestimonial + 1) / testimonials.length) * 100}%` }}
          ></div>
        </div>

        {/* Dots Navigation */}
        {/* <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentTestimonial ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Voir l'avis ${index + 1}`}
            />
          ))}
        </div> */}

        {/* Auto-play Indicator */}
        {/* <div className="autoplay-indicator">
          <span className={`indicator-text ${isAutoPlaying ? 'playing' : 'paused'}`}>
            {isAutoPlaying ? 'Défilement automatique • Survolez pour mettre en pause' : 'Défilement en pause • Quittez pour reprendre'}
          </span>
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;