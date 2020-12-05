import React, { Component } from 'react';
import './styles.css';
import $ from 'jquery';
import MovieSearchBar from './components/MovieSearchBar';
import MovieSearchResults from './components/MovieSearchResults.js';
import MovieDetails from './components/MovieDetails.js';
import Home from './components/Home';

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
    document.getElementById("searchResultsContainer").style.display = "flex"
    document.getElementById("movieDetailsContainer").style.display = "none";
  }
  handleResponse2 = (response) => {
    //console.log(response);
    this.setState({ movieDetailsData: response });
    document.getElementById("movieDetailsContainer").style.display = "flex";
    document.getElementById("searchResultsContainer").style.display = "none"
  }

  render() {
    return (
      <div className="App">
        <p className="mainHeader">Movie Search</p>
        <MovieSearchBar 
          input={this.state.input}
          updateInput={this.updateInput}
          getMovieSearchResults = {this.getMovieSearchResults}
        />
        <MovieSearchResults 
          data={this.state.movieSearchData} 
          getMovieDetails={this.getMovieDetails}
        /> 
        <MovieDetails 
          data={this.state.movieDetailsData} 
        /> 
        <Home />
      </div>
    );
  }
}

export default App;