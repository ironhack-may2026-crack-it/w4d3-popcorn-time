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
  const [year, setYear] = useState("")
  const [rating, setRating] = useState("")


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

    // find the id of the new movie
    const movieIds = moviesToDisplay.map((movieObj) => {
      return movieObj.id;
    });

    const maxId = Math.max(...movieIds);
    const nextId = maxId + 1

    const newMovie = {
      id: nextId,
      title: title,
      year: year,
      rating: rating
    }

    // prepare an array with the new list of movies
    const newList = [newMovie, ...moviesToDisplay]

    // update the list of movies
    setMoviesToDisplay(newList)

    // clear form
    setTitle("")
    setYear("")
    setRating("")
  }


  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />

      <section>
        <form onSubmit={handleSubmit}>

          <label>
            Title:
            <input
              type="text"
              name="title"
              required={true}
              placeholder="The Godfather"
              value={title}
              onChange={(e) => { setTitle(e.target.value) }}
            />
          </label>

          <label>
            Year:
            <input
              type="number"
              name="year"
              min={1950}
              max={2050}
              placeholder="1999"
              value={year}
              onChange={(e) => { setYear(e.target.value) }}
            />
          </label>

          <label>
            Rating:
            <input
              type="number"
              name="rating"
              min={1}
              max={10}
              placeholder="10"
              value={rating}
              onChange={(e) => { setRating(e.target.value) }}
            />
          </label>

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
