import movies from "../data/movies.json"


function MovieList() {
    return (
        <>
            {movies.map((movieObj, i, arr) => {
                return (
                    <div key={movieObj.id} className="card">
                        <h3>{movieObj.title}</h3>

                        {movieObj.imgURL
                            && <img src={movieObj.imgURL} alt="Movie poster" />}

                        <p>Year: {movieObj.year}</p>
                        <p>Rating: {movieObj.rating}</p>
                    </div>
                )
            })}
        </>
    )
}

export default MovieList
