import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useHistory, useParams } from 'react-router-dom';


function movieDetails () {
const dispatch = useDispatch();
const history = useHistory();
const movie = useSelector(store => store.movies);
const thisID = useParams();

const thisMovie = movie.find(
    (movie) => movie.id === Number(thisID.id)
  );
console.log("this Movie", thisMovie);

const backToMovieList = (event) => {
    history.push('/');
}

useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
}, []);

console.log("THE MOVIE IS", movie);

return (
    <div>
        <h1>Movie Details go here</h1>
        <section className="movies">
            <h2>{thisMovie.title}</h2>
     
          
            </section>
        <button onClick={backToMovieList}>Back to Movie List</button>
    </div>
    
)
};

export default movieDetails;