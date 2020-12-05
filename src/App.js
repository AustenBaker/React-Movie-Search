import React, { Component } from 'react';
import './styles.css';
import $ from 'jquery';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MovieSearchBar from './components/MovieSearchBar';
import MovieSearchResults from './components/MovieSearchResults.js';
import MovieDetails from './components/MovieDetails.js';
import Footer from './components/Footer';

library.add(fab, faSearch, faFilm);

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      movieSearchData: [],
      movieDetailsData: [],
    }
  }
  updateInput = event => {
    this.setState({input: event.target.value}, () => {
      this.getMovieSearchResults();
    });
  }
  getMovieSearchResults = () => {
    $.getJSON(`http://www.omdbapi.com/?apikey=a43b7ac2&s=${this.state.input}`)
      .then(this.handleResponse);
  }
  getMovieDetails = (imdbID) => {
    $.getJSON(`http://www.omdbapi.com/?apikey=a43b7ac2&i=${imdbID}`)
      .then(this.handleResponse2);
  }
  handleResponse = (response) => {
    //console.log(response);
    this.setState({ movieSearchData: response });
    document.getElementById("searchResultsContainer").style.display = "flex";
    document.getElementById("movieDetailsContainer").style.display = "none";
    document.getElementById("searchTip").style.display = "none";
  }
  handleResponse2 = (response) => {
    //console.log(response);
    this.setState({ movieDetailsData: response });
    document.getElementById("movieDetailsContainer").style.display = "flex";
    document.getElementById("searchResultsContainer").style.display = "none";
    document.getElementById("searchTip").style.display = "none";
  }

  render() {
    return (
      <div className="bg-dark">
        <div className="wrapper">
          <h1 className="mainHeader text-light">
            React 
            <FontAwesomeIcon icon={['fa', 'film']} color="#f8f9fa" style={{marginLeft: 10, marginRight: 10}} />
            Search
          </h1>
          <MovieSearchBar 
            input={this.state.input}
            updateInput={this.updateInput}
            getMovieSearchResults = {this.getMovieSearchResults}
          />

          <h4 id="searchTip" className="text-danger text-center pt-3">Go on... search for a movie</h4>

          <MovieSearchResults 
            data={this.state.movieSearchData} 
            getMovieDetails={this.getMovieDetails}
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