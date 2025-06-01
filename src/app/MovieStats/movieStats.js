import React from "react";
import "./movieStats.css"

export default function MovieStats({ movies }) {
    if (movies.length === 0) return null;

    const totalMovies = movies.length;
    const averageRating = (movies.reduce((sum, movie) => sum + movie.rating, 0) / totalMovies).toFixed(1);

    return (
        <div className="movie-stats">
            <h3>Statistik</h3>
            <p>Totalt antal filmer: {totalMovies}</p>
            <p className="starz">Genomsnittligt betyg: {averageRating} <img src="/images/star.png"></img></p>
        </div>
    );
}
