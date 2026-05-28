import { Link, useParams } from "react-router-dom"


function MovieDetails(props) {

    const { movieId } = useParams()

    const movie = props.moviesArr.find((movieObj) => {
        return movieObj.id === parseInt(movieId)
    })

    return (
        <>
            <h1>{movie.title}</h1>
            {movie.imgURL && <img src={movie.imgURL} alt="Movie poster" />}
            <p>{movie.year}</p>
            <p>{movie.rating}</p>

            <p>
                <Link to="/" className="btn btn-primary">Back</Link>
            </p>
        </>
    )
}

export default MovieDetails