import { useState } from "react"

import MovieSummary from "./MovieSummary"

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
                    <MovieSummary 
                        key={movieObj.id}
                        movieDetails={movieObj}
                        onDelete={deleteMovie}
                    />
                )
            })}
        </>
    )
}

export default MovieList
