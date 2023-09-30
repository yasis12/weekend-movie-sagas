import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails.jsx';
import AddMovie from '../AddMovie/AddMovie.jsx'

function App() {
  return (
    <div className="App">
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        {/* Details page */}
        <Route path="/details/:id" exact>
          <MovieDetails />
        </Route>
        {/* Add Movie page */}
        <Route path="/AddMovie" exact>
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
