import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { useHistory } from 'react-router-dom';

function MovieList() {

    const history = useHistory(); //this is for pushing link on click
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleClick = (movieId) => {
        history.push(`/details/${movieId}`)
    }

    return (
        <main>
            <h1>The Movies Saga!</h1>
            <br />
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                     return (
                        <div key={movie.id} className="movie-frame" onClick={() => handleClick(movie.id)}>
                          <h3 className="movie-title">{movie.title}</h3>
                          <img className="movie-image" src={movie.poster} alt={movie.title} />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;