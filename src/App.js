import React, { Component, Suspense } from 'react';
import './styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faFilm, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Footer from './components/Footer';
import { getSearchResults, getMovieDetails } from './fetch/movies';
const MovieSearchNavBar = React.lazy(() => import('./components/MovieSearchNavBar'));
const MovieSearchResults = React.lazy(() => import('./components/MovieSearchResults.js'));
const MovieDetails = React.lazy(() => import('./components/MovieDetails.js'));

library.add(fab, faSearch, faFilm, faEnvelope);

class App extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this);
    this.fetchSearchResults = this.fetchSearchResults.bind(this);
    this.fetchDetails = this.fetchDetails.bind(this);
    this.state = {
      input: '',
      movieSearchData: [],
      movieDetailsData: [],
    }
  }
  onChange = event => {
    this.setState({input: event.target.value});
  }

  //search for specific details using IMBDID
  async fetchDetails(imdbID) {
    const response = await getMovieDetails( imdbID )
    this.setState({ movieDetailsData: response });
    
    //Display movie details and hide search results/tip
    //document.getElementById("movieDetailsContainer").style.display = "block";
    //document.getElementById("searchResultsContainer").style.display = "none";
    //document.getElementById("searchTip").style.display = "none";
  }

  //search for movies using user input
  async fetchSearchResults() {
    const response = await getSearchResults( this.state.input );
    this.setState({ movieSearchData: response });
    //console.log(response.Search);
    
    //Display search results and hide movie details if needed
    document.getElementById("movieDetailsContainer").style.display = "none";
    document.getElementById("searchResultsContainer").style.display = "flex";
    document.getElementById("searchTip").style.display = "none";
  }

  
  render() {
    return (
      <div className="bg-dark">
        <div className="wrapper">
        <Suspense fallback={<div>Loading...</div>}>
          <MovieSearchNavBar 
            input={this.state.input}
            onChange={this.onChange}
            fetchSearchResults={this.fetchSearchResults}
          />
        </Suspense>
          <h1 id="searchTip" className="text-white text-center pt-3">Go on... search for a movie</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <MovieSearchResults 
              searchResults={this.state.movieSearchData} 
              details={this.state.movieDetailsData} 
              fetchDetails={this.fetchDetails}
            /> 
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <MovieDetails 
              data={this.state.movieDetailsData} 
            /> 
          </Suspense>
        </div>
        <footer><Footer /></footer>
      </div>
    );
  }
}

export default App;