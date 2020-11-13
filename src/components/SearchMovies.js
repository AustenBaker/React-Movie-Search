import React from "react";
import $ from 'jquery';

class SearchMovies extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
      movies: []
    }
  }

  onChange = event =>
    this.setState({input: event.target.value})

  searchMovie = () =>
    $.getJSON(`http://www.omdbapi.com/?apikey=a43b7ac2&s=${this.state.input}`)
      .then(this.renderMovies);

  renderMovies = (response) =>
    this.setState({movies: response.Search})
    //console.log(movies)
  
  render(){
    return (
      <div>
        <p className="searchHeader">Movie Search</p>

        <div className="searchContainer">
          <input value={this.state.input}
            onChange={this.onChange}
            className="searchInput"
            placeholder="Movie Title"
          />
          <button
            className="searchButton"
            onClick={this.searchMovie}
          >
            Search
          </button>
        </div>
        <div className="moviesContainer">
          {
            this.state.movies.map( movie =>
            <div className="movieCard">
                <p className="movieTitle">{movie.Title}</p>
                <p className="movieYear">{movie.Year}</p>
                <img className="movieImg" src={movie.Poster} alt="movie poster"></img>
            </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default SearchMovies;