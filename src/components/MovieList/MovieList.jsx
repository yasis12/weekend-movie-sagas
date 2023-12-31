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

    const addMovieRoute = () => {
        history.push('/AddMovie')
    }

    return (
        <main>
            <br />
            <h1 className='movieListTitle'>MovieList</h1>
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
            <br /><br />
            <h4>Don't see your favorite movie here? Add one yourself!</h4>
            <button onClick={addMovieRoute}>ADD MOVIE</button>
            <br /><br /><br /><br /><br />
            
        </main>

    );
}

export default MovieList;