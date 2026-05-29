import { useState } from "react"
import { Route, Routes } from "react-router-dom"

import Footer from "./components/Footer"
import Header from "./components/Header"
import MovieList from "./pages/MovieList"
import About from "./pages/About"
import Contact from "./pages/Contact"

import movies from "./data/movies.json"
import MovieDetails from "./pages/MovieDetails"


function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies)

  const [title, setTitle] = useState("")


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


  const handleSubmit = (e) => {
    e.preventDefault()

    const newMovie = {
      title: title,
      year: 1999,
      rating: 10
    }

    // prepare an array with the new list of movies
    const newList = [newMovie, ...moviesToDisplay]

    // update the list of movies
    setMoviesToDisplay(newList)

    // clear form
    setTitle("")
  }


  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />

      <section>
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="title"
            placeholder="The Godfather"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />

          <button>Create movie</button>
        </form>
      </section>


      <Routes>
        <Route path="/" element={<MovieList moviesArr={moviesToDisplay} onDelete={deleteMovie} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movies/:movieId" element={<MovieDetails moviesArr={moviesToDisplay} />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
