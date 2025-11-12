import "./Movie.css";
function Movie({ title,star }) {
    return (

        <>
            <div>
                <h1> Fan Favorites</h1>
                <p> This week's top TV and Movies </p>
            </div>
            <div className="root">
                <div className="star">
                 {star}
                </div>
                <div className="add"> 
                    
                 </div>
                <div className="Scroller">
                <img src="image.png" alt="movie png" />
                <h3> {title}</h3>
                <p> Movie cast</p>
                <button>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path d="M3 12h18M3 6h18M3 18h18" />
                    </svg>
                    Watchlist
                </button>

                <button>
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
           
        </>
    );
}
export default Movie;
