"use client"
import { useState } from "react";
import "./moviepage.css";
import SortButtons from "../buttons/buttons";
import MovieStats from "../MovieStats/movieStats";

export default function MoviePage() {
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title === "" || rating === "0") {
            alert("Fyll i fälten tack");
            return;
        }

        setMovies([...movies, {
            title: title,
            rating: parseInt(rating),
        }]);
        setTitle("");
        setRating("0");
    };

    const handleDelete = (movieIndex) => {
        setMovies(movies.filter((_, index) => index !== movieIndex));
    };

    const renderStars = (count) => {
        const stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(<img key={i} src="/images/star.png" alt="Star" />);
        }
        return stars;
    };

    return (
        <div className="container">
            <h1>Min filmlista</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Lägg till en film</legend>

                    <label htmlFor="title-field">Titel:</label>
                    <input
                        type="text"
                        id="title-field"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label htmlFor="rating-field">Betyg:</label>
                    <select
                        id="rating-field"
                        className="form-control"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    >
                        <option value="0">Välj betyg här...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input type="submit" className="add-btn" value="Spara film" />

                    <SortButtons movies={movies} setMovies={setMovies} />
                </fieldset>
            </form>

            <hr />

            <MovieStats movies={movies} />

            <h2>Filmer</h2>
            <ul id="movies">
                {movies.map((movie, index) => (
                    <li key={index} data-grade={movie.rating} data-title={movie.title}>
                        {movie.title}
                        {renderStars(movie.rating)}
                        <img
                            src="/images/delete.png"
                            alt="Delete movie"
                            className="delete-movie-icon"
                            onClick={() => handleDelete(index)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
