import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddMovie(props) {

    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [rating, setRating] = useState("")

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()

        const newMovie = {
            title: title,
            year: year,
            rating: rating
        }

        // invoke function in the parent component
        props.onCreate(newMovie)

        // redirect to the homepage
        navigate("/")
    }

    return (
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
    )
}

export default AddMovie