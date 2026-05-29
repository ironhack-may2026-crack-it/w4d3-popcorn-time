import { Link } from "react-router-dom"

function MovieSummary(props) {
    return (
        <section className="card">
            <h3>{props.movieDetails.title}</h3>

            {props.movieDetails.imgURL
                && <img src={props.movieDetails.imgURL} alt="Movie poster" />}

            <p>Year: {props.movieDetails.year}</p>
            <p>Rating: {props.movieDetails.rating}</p>

            <button onClick={() => { props.onDelete(props.movieDetails.id) }}>Delete</button>

            <Link to={`/movies/${props.movieDetails.id}`}>
                <button>More details</button>
            </Link>
        </section>
    )
}

export default MovieSummary