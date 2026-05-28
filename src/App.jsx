import { useState } from "react"

import Footer from "./components/Footer"
import Header from "./components/Header"
import MovieList from "./components/MovieList"

import movies from "./data/movies.json"


function App() {

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
      <Header numberOfMovies={moviesToDisplay.length} />
      <MovieList moviesArr={moviesToDisplay} onDelete={deleteMovie} />
      <Footer />
    </>
  )
}

export default App
