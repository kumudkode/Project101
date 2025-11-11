import { useState } from 'react';
import './MovieCard.css';

export const MovieCard = ({ movie, index }) => {
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const [inView, setInView] = useState(false);

  const handleWatchlistToggle = () => {
    setIsInWatchlist(!isInWatchlist);
  };

  const handleButtonClick = (e, action) => {
    e.preventDefault();
    
    // Create ripple effect
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 520);

    // Handle actions
    if (action === 'watch') {
      alert(`Show providers for:\n${movie.title}`);
    } else if (action === 'trailer') {
      if (movie.trailerUrl) {
        window.open(movie.trailerUrl, '_blank');
      } else {
        alert(`Trailer coming soon for:\n${movie.title}`);
      }
    }
  };

  return (
    <article 
      className={`card ${inView ? 'in' : ''}`}
      style={{ transitionDelay: `${index * 70}ms` }}
      ref={(el) => {
        if (el && !inView) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  setInView(true);
                }
              });
            },
            { threshold: 0.2 }
          );
          observer.observe(el);
          return () => observer.disconnect();
        }
      }}
    >
      <div className="poster">
        <img src={movie.poster} alt={`${movie.title} poster`} />
        <div className="badge" aria-label="rating">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
          <span className="score">{movie.rating.toFixed(1)}</span>
        </div>
        <button 
          className="pin" 
          title={isInWatchlist ? "In Watchlist" : "Add to Watchlist"}
          aria-pressed={isInWatchlist}
          onClick={handleWatchlistToggle}
        >
          <svg className="plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14"/>
          </svg>
          <svg className="check" viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </button>
      </div>
      <div className="body">
        <h3 className="title">{movie.title}</h3>
        <p className="meta">{movie.sub}</p>
        <div className="actions">
          <a 
            className="btn" 
            href="#" 
            role="button"
            onClick={(e) => handleButtonClick(e, 'watch')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
            Watch options
          </a>
          <a 
            className="btn primary" 
            href="#" 
            role="button"
            onClick={(e) => handleButtonClick(e, 'trailer')}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Trailer
          </a>
        </div>
      </div>
    </article>
  );
};
