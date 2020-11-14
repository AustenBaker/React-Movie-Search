import React from "react";
import $ from 'jquery';

class SearchMovies extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
      input2: '',
      movies: [],
      details: '',
    }
  }

  updateInput = event => {
    this.setState({input: event.target.value})
  }

  searchMovie = () => {
    $.getJSON(`http://www.omdbapi.com/?apikey=a43b7ac2&s=${this.state.input}`)
      .then(this.renderMovies);
      
  }
  renderMovies = (response) => {
    this.setState({movies: response.Search})
    //console.log(response.Search)
  }
  
  getMovieDetails = (id) => {
    
    $.getJSON(`http://www.omdbapi.com/?apikey=a43b7ac2&i=${id}`)
      .then(this.renderDetails);
  }
  renderDetails = (response) => {
    this.setState({details: response})
    console.log(response);
  }

  render(){
    return (
      <div>
        <p className="searchHeader">Movie Search</p>

        <div className="searchContainer">
          <input value={this.state.input}
            onChange={this.updateInput}
            className="searchInput"
            placeholder="Fight Club"
          />
          <button
            className="searchButton"
            onClick={() => {
              this.searchMovie()
              document.getElementById("moviesContainer").style.display = "flex"
              document.getElementById("movieDetailsContainer").style.display = "none"
            }}
          >
            Search
          </button>
        </div>

        <div className="movieDetailsContainer" id="movieDetailsContainer">
          <div className="detailsHeader">
            <img 
              className="detailsImg" 
              src={this.state.details.Poster} 
              alt="movie poster"
            ></img>
            <div className="ratings">
              IMBD: {this.state.details.imdbRating} <br></br>
              Metascore: {this.state.details.Metascore} <br></br>
              Awards: {this.state.details.Awards}
            </div>
          </div>
          <div className="details">
                <b>Runtime:</b> {this.state.details.Runtime} <br></br>
                <b>Genre(s):</b> {this.state.details.Genre} <br></br>
                <b>Director(s):</b> {this.state.details.Director} <br></br>
                <b>Writer(s):</b> {this.state.details.Writer} <br></br>
                <b>Actors:</b> {this.state.details.Actors} <br></br><br></br>
                <b>Plot:</b> {this.state.details.Plot} <br></br>
            </div>
        </div>

        <div className="moviesContainer" id="moviesContainer">
          {
            this.state.movies.map( (movie) =>
              <div 
                key={movie.imdbID}
                className="movieCard"
                onClick= {() => {
                    this.getMovieDetails(movie.imdbID)
                    document.getElementById("moviesContainer").style.display = "none"
                    document.getElementById("movieDetailsContainer").style.display = "flex"
                  }
                }
              >
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