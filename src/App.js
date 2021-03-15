import React, { Component, Suspense } from 'react';
import './styles.css';
import { fetchSearchResults, fetchMovieDetails } from './fetch/movies';
//components
import Footer from './components/Footer';
import MovieSearchNavBar from './components/MovieSearchNavBar';
//fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faFilm, faEnvelope, faGhost, faAppleAlt, faPizzaSlice, faHamburger, faKey, faPlane
} from "@fortawesome/free-solid-svg-icons";
library.add(fab, faSearch, faFilm, faEnvelope, faGhost, faAppleAlt, faPizzaSlice, faHamburger, faKey, faPlane);
//lazy loading components
const MovieSearchResults = React.lazy(() => import('./components/MovieSearchResults.js'));
const MovieDetails = React.lazy(() => import('./components/MovieDetails.js'));
const IconSearch = React.lazy (() => import('./components/IconSearch.js'));

class App extends Component {

  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
    this.getMovieDetails = this.getMovieDetails.bind(this);
    this.state = {
      input: '',
      searchResultsData: [],
      movieDetailsData: [],
    }
  }

  //update search input state
  //called by src/components/MovieSearchNavBar.js
  onChange = event => {
    this.setState({input: event.target.value});
  }

  //search for movies using user input
  //called by src/components/MovieSearchNavBar.js
  //when user clicks search
  async getSearchResults(input) {
    const response = await fetchSearchResults( input );
    this.setState({ searchResultsData: response });
    //console.log(this.state.searchResultsData);
    document.getElementById("movieDetailsContainer").style.display = "none";
    document.getElementById("searchResultsContainer").style.display = "flex";
    document.getElementById("quickSearchHeader").style.display = "none";
    document.getElementById("QuickSearchContainer").style.display = "none";
  }

  //search for a specific movie's details using its imdbID
  //called by src/components/MovieSearchResults.js
  async getMovieDetails(imdbID) {
    const response = await fetchMovieDetails( imdbID );
    this.setState({ movieDetailsData: response });
    //console.log(this.state.movieDetailsData);
  }
  
  render() {
    return (
      <div className="bg-dark">
        <div className="wrapper">
        <Suspense fallback={<div>Loading...</div>}>
          <MovieSearchNavBar 
            input={this.state.input}
            onChange={this.onChange}
            getSearchResults={this.getSearchResults}
          />
            <h4 id="quickSearchHeader" className="text-white text-center">Quick Icon Search</h4>
            <IconSearch getSearchResults={this.getSearchResults}/>
            <MovieSearchResults 
              searchResults={this.state.searchResultsData} 
              movieDetails={this.state.movieDetailsData}
              getMovieDetails={this.getMovieDetails}
            /> 
            <MovieDetails 
              data={this.state.movieDetailsData} 
            /> 
          </Suspense>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;