import { NavLink } from "react-router-dom"
import "./Header.css"

function Header(props) {
    return (
        <div className="Header">

            <nav>
                <NavLink to="/">Home</NavLink> | 
                <NavLink to="/about">About</NavLink> | 
                <NavLink to="/contact">Contact</NavLink>
            </nav>

            <header>
                <h1>Welcome to Popcorn-Time</h1>
                <h2>Number of movies: {props.numberOfMovies}</h2>
            </header>
        </div>
    )
}

export default Header
