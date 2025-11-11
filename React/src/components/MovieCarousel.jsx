import { useRef } from 'react';
import { MovieCard } from './MovieCard';
import './MovieCarousel.css';

const movies = [
  { 
    title: "Kantara A Legend: Chapter 1", 
    rating: 8.4, 
    sub: "Chapter 1", 
    poster: "https://media-cache.cinematerial.com/p/500x/fc5l9mx4/kantara-2-indian-movie-poster.jpg?v=1751876601", 
    trailerUrl: "https://www.imdb.com/video/vi1292159001/?ref_=ext_shr_lnk" 
  },
  { 
    title: "Lokah Chapter One: Chandra", 
    rating: 7.8, 
    sub: "Chandra", 
    poster: "https://m.media-amazon.com/images/M/MV5BZThiYjY3ODUtOGM4Yy00OGE0LTliM2UtYjFlNDY0Mzg3OWJlXkEyXkFqcGc@._V1_.jpg", 
    trailerUrl: "https://www.imdb.com/video/vi941934617/?ref_=ext_shr_lnk" 
  },
  { 
    title: "The Great Pre-Wedding Show", 
    rating: 8.9, 
    sub: "Show", 
    poster: "https://m.media-amazon.com/images/M/MV5BMjIxYjYwNmQtM2I5Zi00ODViLTgxZTYtY2IxNTM3NDRmMmUzXkEyXkFqcGc@._V1_.jpg", 
    trailerUrl: "https://www.imdb.com/video/vi2438055961/?ref_=ext_shr_lnk" 
  },
  { 
    title: "Frankenstein", 
    rating: 7.6, 
    sub: "", 
    poster: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=800&auto=format&fit=crop", 
    trailerUrl: "" 
  },
  { 
    title: "Predator: Badlands", 
    rating: 7.6, 
    sub: "", 
    poster: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop", 
    trailerUrl: "" 
  },
  { 
    title: "The Fantastic Four: First Steps", 
    rating: 7.0, 
    sub: "First Steps", 
    poster: "https://images.unsplash.com/photo-1542178243-bc20204b769f?q=80&w=800&auto=format&fit=crop", 
    trailerUrl: "" 
  },
];

export const MovieCarousel = () => {
  const scrollerRef = useRef(null);

  const scrollByCard = (direction) => {
    if (!scrollerRef.current) return;
    
    const scroller = scrollerRef.current;
    const card = scroller.firstElementChild;
    if (!card) return;
    
    const gap = parseFloat(getComputedStyle(scroller).gap) || 16;
    const scrollAmount = (card.getBoundingClientRect().width + gap) * 1.2;
    
    scroller.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="wrap">
      <a href="#" className="sr-only">Back to top</a>
      <header>
        <div className="chev" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </div>
        <h1>Fan favorites</h1>
      </header>
      <p className="subtitle">This week&apos;s top TV and movies</p>

      <div className="nav" aria-hidden="true">
        <button 
          className="arrow left" 
          onClick={() => scrollByCard('left')}
          title="Scroll left"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button 
          className="arrow right" 
          onClick={() => scrollByCard('right')}
          title="Scroll right"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6"/>
          </svg>
        </button>
      </div>

      <section 
        className="scroller" 
        ref={scrollerRef}
        aria-label="Fan favorites carousel"
      >
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} index={index} />
        ))}
      </section>
    </div>
  );
};
