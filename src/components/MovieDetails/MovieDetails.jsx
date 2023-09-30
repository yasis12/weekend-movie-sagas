//stylilng
import './MovieDetials.css'
//imports
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useHistory, useParams } from 'react-router-dom';


function movieDetails () {
// React hooks
const dispatch = useDispatch();
const history = useHistory();
// Store of all the movies
const movie = useSelector(store => store.movies);
// useParams targets the id passthrough the route
const thisID = useParams();
console.log("this ID", thisID);
// This part finds what movie has the id that is equal to the useParams ID
const thisMovie = movie.find(
    (movie) => movie.id === Number(thisID.id)
  );

  console.log("THIS MOVIE",thisMovie);
// Button for routing back to movie List
const backToMovieList = (event) => {
    history.push('/');
}
// Need this use effect so we can call the DB for all the movies
useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
}, []);

return (
    <div>
        <section className="movies-details">
            <h1 className='Movie-title'>{thisMovie.title}</h1>
            <img className='movie-image' src={thisMovie.poster} alt={thisMovie.title}/>
        </section>
        <section className='description'>
            <h3 className='movie-description'>{thisMovie.description}</h3>
        </section>
        <button onClick={backToMovieList}>Back to Movie List</button>
    </div>
    
)
};

export default movieDetails;