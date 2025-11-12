// Movie.jsx - REVISED
import "./Movie.css";

function Movie({ title, star, imageUrl, description }) { // Added imageUrl and description props
    return (
        <>
            <div className="root">
                <div className="poster-container"> 
                    <img src={imageUrl} alt={`${title} poster`} /> {/* Use imageUrl prop */}
                    <div className="star-rating">
                        {star}
                    </div>
                    <div className="add-button"> 
                        +
                    </div>
                </div>

                <div className="info-section">
                    <h3> {title}</h3>
                    <p> {description}</p> {/* Use description prop instead of hardcoded "Movie cast" */}

                    <div className="button-group"> 
                        <button className="watchlist-button">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M3 12h18M3 6h18M3 18h18" />
                            </svg>
                            Watch options
                        </button>

                        <button className="trailer-button">
                            <svg
                                viewBox="0 0 24 24" 
                                fill="currentColor"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            Trailer
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Movie;