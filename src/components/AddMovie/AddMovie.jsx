import {  useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './AddMovie.css'

function AddMovie () {

    const history = useHistory();
    const [newMovieTitle, setNewMovieTitle] = useState('');
    const [newMovieURL, setNewMovieURL] = useState('');
    const [newMovieDescription, setNewMovieDescription] = useState('');
    const [newMovieGenre, setNewMovieGenre] = useState('');

    function submitForm(){
        const formData = {
            newMovieTitle,
            newMovieURL,
            newMovieDescription,
            newMovieGenre
        };
        axios.post('/api/movie/', formData)
        .then(response => {
            console.log(`data submitted successfully`);
            
        }).catch(error => {
            console.log('Error submitting data', error);
        });
        history.push('/')
    } //end Submit Form

    return (
       <div className='addMovieContainer'>
            <div className='addMovieDiv'>
                <h1 className='addMovieHeader'>What Movie Would You Like to Add?</h1>
                    <form className='' onSubmit={submitForm}>
                        <label>Movie Title</label>
                        <input id='movie-title' type="text" placeholder="Movie Title" onChange={event => setNewMovieTitle(event.target.value)}/>
                        <label>Movie URL</label>
                        <input id='movie-URL' type="text" placeholder="Movie poster image URL" onChange={event => setNewMovieURL(event.target.value)}/>
                        <label>Description</label>
                        <input id='description' type="text" placeholder="Description" onChange={event => setNewMovieDescription(event.target.value)}/>
                        <label>Genre</label>
                        <select name="genre" id="genre" onChange={event => setNewMovieGenre(event.target.value)}>
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