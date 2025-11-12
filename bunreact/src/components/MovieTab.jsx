import Movie from "./Movie.jsx"
import './Movie.css'

function MovieTab(){
    return(
        
        <div className="tab">
        <Movie title="Kantara A Legend: Chapter 1" star="8.4"/>
        <Movie title="Lokah Chapter One: Chandra" star="7.8" />
        <Movie title="The Great Pre-Wedding Show" star="8.9" />
        <Movie title="Frankenstein" star="7.6"/>
        <Movie title="Predator: Badlands" star="7.6"/>
        <Movie title="The Fantastic Four: First Steps" star="7.0" />
        
       </div>

    )
}

export default MovieTab