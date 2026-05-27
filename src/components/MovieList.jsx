import { useState } from "react"

import movies from "../data/movies.json"



function MovieList() {

    const [moviesToDisplay, setMoviesToDisplay] = useState(movies)


    const deleteMovie = (movieId) => {
        // get the new list of movies...
        const newList = moviesToDisplay.filter((movie, i, arr) => {
            if (movie.id !== movieId) {
                return true
            } else {
                return false
            }
        })

        // update state...
        // moviesToDisplay = newList // NEVER, NEVER MODIFY STATE DIRECTLY
        setMoviesToDisplay(newList)
    }


    return (
        <>

            <h2>Number of movies: {moviesToDisplay.length}</h2>

            {moviesToDisplay.map((movieObj, i, arr) => {
                return (
                    <div key={movieObj.id} className="card">
                        <h3>{movieObj.title}</h3>

                        {movieObj.imgURL
                            && <img src={movieObj.imgURL} alt="Movie poster" />}

                        <p>Year: {movieObj.year}</p>
                        <p>Rating: {movieObj.rating}</p>

                        <button onClick={() => { deleteMovie(movieObj.id) }}>Delete</button>
                    </div>
                )
            })}
        </>
    )
}

export default MovieList
