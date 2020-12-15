import React, { Component } from 'react';
import './styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faFilm } from "@fortawesome/free-solid-svg-icons";
import MovieSearchBar from './components/MovieSearchBar';
import MovieSearchResults from './components/MovieSearchResults.js';
import MovieDetails from './components/MovieDetails.js';
import Footer from './components/Footer';
import { getSearchResults, getMovieDetails } from './fetch/movies';

library.add(fab, faSearch, faFilm);

class App extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
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

  async fetchDetails(imdbID) {
    //valid console.log(imdbID); 
    const response = await getMovieDetails( imdbID )
    this.setState({ movieDetailsData: response });
    
    //Display movie details and hide search results/tip
    document.getElementById("movieDetailsContainer").style.display = "flex";
    document.getElementById("searchResultsContainer").style.display = "none";
    document.getElementById("searchTip").style.display = "none";
  }

  async fetchMovies() {
    const response = await getSearchResults( this.state.input );
    this.setState({ movieSearchData: response });

    //Display search results and hide movie details if needed
    document.getElementById("movieDetailsContainer").style.display = "none";
    document.getElementById("searchResultsContainer").style.display = "flex";
    //console.log(response.Search);
  }

  async componentDidMount() { }
  render() {
    return (
      <div className="bg-dark">
        <div className="wrapper">
          <MovieSearchBar 
            input={this.state.input}
            onChange={this.onChange}
            fetchMovies={this.fetchMovies}
          />

          <h4 id="searchTip" className="text-danger text-center pt-3">Go on... search for a movie</h4>

          <MovieSearchResults 
            data={this.state.movieSearchData} 
            fetchDetails={this.fetchDetails}
          /> 
          <MovieDetails 
            data={this.state.movieDetailsData} 
          /> 
        </div>
        <footer><Footer /></footer>
      </div>
    );
  }
}

export default App;