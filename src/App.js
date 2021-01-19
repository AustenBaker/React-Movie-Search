import React, { Component, Suspense } from 'react';
import './styles.css';

//fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faFilm, faEnvelope } from "@fortawesome/free-solid-svg-icons";


import Footer from './components/Footer';
import MovieSearchNavBar from './components/MovieSearchNavBar';
import { fetchSearchResults, fetchMovieDetails } from './fetch/movies';

//lazy loading compenents
const MovieSearchResults = React.lazy(() => import('./components/MovieSearchResults.js'));
const MovieDetails = React.lazy(() => import('./components/MovieDetails.js'));

library.add(fab, faSearch, faFilm, faEnvelope);

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
  async getSearchResults() {
    const response = await fetchSearchResults( this.state.input );
    this.setState({ searchResultsData: response });
    //console.log(this.state.searchResultsData);
    document.getElementById("movieDetailsContainer").style.display = "none";
    document.getElementById("searchResultsContainer").style.display = "flex";
    document.getElementById("searchTip").style.display = "none";
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
        </Suspense>

          <h2 id="searchTip" className="text-white text-center pt-3">Go on... search for a movie</h2>
          
          <Suspense fallback={<div>Loading...</div>}>
            <MovieSearchResults 
              searchResults={this.state.searchResultsData} 
              movieDetails={this.state.movieDetailsData}

              getMovieDetails={this.getMovieDetails}
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