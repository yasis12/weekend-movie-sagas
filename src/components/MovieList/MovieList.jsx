import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { Link, useHistory } from 'react-router-dom';

function MovieList() {

    const history = useHistory(); //this is for pushing link on click
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleClick = (event) => {
        history.push('/Movie-Details')
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} onClick={handleClick}>
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>

            <Link to="/Movie-Details">Movie Detials</Link>

            <br /><br />
        </main>

    );
}

export default MovieList;