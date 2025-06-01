import React from "react";
import "./buttons.css"

export default function SortButtons({ movies, setMovies }) {
    const sortByTitle = () => {
        const sorted = [...movies].sort((a, b) =>
            a.title.localeCompare(b.title, "sv", { sensitivity: "base" })
        );
        setMovies(sorted);
    };

    const sortByRating = () => {
        const sorted = [...movies].sort((a, b) => b.rating - a.rating);
        setMovies(sorted);
    };

    return (
        <div className="sort-btn">
            <button type="button" onClick={sortByTitle}>Sortera filmer (alfabetisk)</button>
            <br></br>
            <button type="button" onClick={sortByRating}>Sortera filmer (betyg)</button>
        </div>
    );
}
