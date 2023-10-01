import {  useHistory } from 'react-router-dom';
import './AddMovie.css'

function AddMovie () {

    const history = useHistory();

    function submitForm(){


        history.push('/')
    } //end Submit Form

    return (
       <div className='addMovieContainer'>
            <div className='addMovieDiv'>
                <h1 className='addMovieHeader'>What Movie Would You Like to Add?</h1>
                    <form className='' onSubmit={submitForm}>
                        <label>Movie Title</label>
                        <input id='movie-title' type="text" placeholder="Movie Title"/>
                        <label>Movie URL</label>
                        <input id='movie-URL' type="text" placeholder="Movie poster image URL"/>
                        <label>Description</label>
                        <input id='description' type="text" placeholder="Description"/>
                        <label>Genre</label>
                        <select name="genre" id="genre">
                            <option value="Adventure">Adventure</option>
                            <option value="Animated">Animated</option>
                            <option value="Biographical">Biographical</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Disaster">Disaster</option>
                            <option value="Drama">Drama</option>
                            <option value="Epic">Epic</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Musical">Musical</option>
                            <option value="Romantic">Romantic</option>
                            <option value="Science-Fiction">Science Fiction</option>
                            <option value="Space-Opera">Space-Opera</option>
                            <option value="Superhero">Superhero</option>
                        </select>
                        <button id='submit-button' type='submit'>Submit</button>
                    </form>
                </div>
       </div> 
        
        
        
    );

      
}

export default AddMovie;