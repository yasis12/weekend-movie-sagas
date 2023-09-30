import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useHistory, useParams } from 'react-router-dom';


function movieDetails () {
// React hooks
const dispatch = useDispatch();
const history = useHistory();
const movie = useSelector(store => store.movies);
const thisID = useParams();
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
        <section className="movies">
            <h1>{thisMovie.title}</h1>
            <br />
            <br />
            <img src={thisMovie.poster} alt={thisMovie.title}/>
            <h3>{thisMovie.description}</h3>
          
            </section>
        <button onClick={backToMovieList}>Back to Movie List</button>
    </div>
    
)
};

export default movieDetails;