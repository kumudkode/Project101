import './Movie.css'
function Movie({title}){
    return(
   <>
        <div className="root">
            <img src="image.png" alt="movie png" />
            <h3> {title}</h3>
            <h4> Movie cast</h4>
            <button>Watchlist</button>
            <button> Trailer </button>
    
        </div>
   </>
    )
}
export default Movie