import {  useHistory } from 'react-router-dom';
import './AddMovie.css'

function AddMovie () {

    const history = useHistory();

    function submitForm(){


        history.push('/')
    } //end Submit Form

    return (
        <div>
            <h1>What Movie Would You Like to Add?</h1>

            <form onSubmit={submitForm}>
                <input id='movie-title' type="text" placeholder="Movie Title"/>
                <input id='movie-URL' type="text" placeholder="Movie poster image URL"/>
                <input id='description' type="text" placeholder="Description"/>
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
        
        
    );
}

export default AddMovie;