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
const genre = useSelector(store => store.genres);

console.log('Genre', genre); // this is good

// useParams targets the id passthrough the route
const thisID = useParams();
console.log("this ID", thisID);
// This part finds what movie has the id that is equal to the useParams ID
const thisMovie = movie.find(
    (movie) => movie.id === Number(thisID.id)
  );

    // take all data from the store and filter it 
  const genreNames = genre
  // filter data where movie id = param ID
    .filter(genre => genre.movie_id === Number(thisID.id))
    //loop and map through the genres from above but only the name
    .map(genre => genre.genre_name);

    console.log("genre names", genreNames);

  console.log("THIS MOVIE",thisMovie);
// Button for routing back to movie List
const backToMovieList = (event) => {
    history.push('/');
}

// Need this use effect so we can call the DB for all the movies
useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
    dispatch({ type: 'FETCH_GENRES' })
}, []);

return (
    <div>
        <section className="movies-details">
            <h1 className='Movie-title'>{thisMovie.title}</h1>
            <img className='movie-image' src={thisMovie.poster} alt={thisMovie.title}/>
            <h4>{genreNames.join(', ')}</h4> 
        </section>
        <section className='description'>
            <h3 className='movie-description'>{thisMovie.description}</h3>
        </section>
        <button onClick={backToMovieList}>Back to Movie List</button>
    </div>
    
)
};

export default movieDetails;