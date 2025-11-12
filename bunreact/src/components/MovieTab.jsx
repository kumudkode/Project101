// MovieTab.jsx - REVISED
import Movie from "./Movie.jsx"
import './Movie.css'

function MovieTab(){
    return(
        <>
            <div className="header-section">
                <span className="back-arrow">&lt;</span> 
                <div>
                    <h1>Fan Favorites</h1>
                    <p>This week's top TV and movies</p>
                </div>
            </div>

            <div className="tab">
                <Movie 
                    title="Kantara A Legend: Chapter 1" 
                    star="8.4" 
                    imageUrl="image.png" // REPLACE WITH ACTUAL PATH
                    description="Chapter 1" // Example description
                />
                <Movie 
                    title="Lokah Chapter One: Chandra" 
                    star="7.8" 
                    imageUrl="image.png"// REPLACE WITH ACTUAL PATH
                    description="Chandra" // Example description
                />
                <Movie 
                    title="The Great Pre-Wedding Show" 
                    star="8.9" 
                     imageUrl="image.png" // REPLACE WITH ACTUAL PATH
                    description="Show" // Example description
                />
                <Movie 
                    title="Frankenstein" 
                    star="7.6" 
                     imageUrl="image.png" // REPLACE WITH ACTUAL PATH
                    description="Movie cast" // Example description
                />
                <Movie 
                    title="Predator: Badlands" 
                    star="7.6" 
                     imageUrl="image.png"// REPLACE WITH ACTUAL PATH
                    description="Movie cast" // Example description
                />
                <Movie 
                    title="The Fantastic Four: First Steps" 
                    star="7.0" 
                     imageUrl="image.png" // REPLACE WITH ACTUAL PATH
                    description="Movie cast" // Example description
                />
            </div>
        </>
    )
}

export default MovieTab