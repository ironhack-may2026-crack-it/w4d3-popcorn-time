import { useState } from "react"

import MovieSummary from "../components/MovieSummary"



function MovieList(props) {

    return (
        <>
            {props.moviesArr.map((movieObj, i, arr) => {
                return (
                    <MovieSummary
                        key={movieObj.id}
                        movieDetails={movieObj}
                        onDelete={props.onDelete}
                    />
                )
            })}
        </>
    )
}

export default MovieList
