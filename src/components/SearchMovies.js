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
        <p className="mainHeader">Movie Search</p>
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
              document.getElementById("movieResultsContainer").style.display = "flex"
              document.getElementById("detailsContainer").style.display = "none"
            }}
          >
            Search
          </button>
        </div>

        <div 
          className="detailsContainer" 
          id="detailsContainer"
          onClick= {() => { 
            document.getElementById("movieResultsContainer").style.display = "flex"
            document.getElementById("detailsContainer").style.display = "none"
          }}
        >
          <img 
            id="detailsImg" 
            src={this.state.details.Poster} 
            alt="movie poster"
          >
          </img>


          <div id="detailsText">
            IMBD: <b>{this.state.details.imdbRating} / 10</b> <br></br>
            Metascore: <b>{this.state.details.Metascore} / 100</b> <br></br>
            <b>Awards: {this.state.details.Awards}</b> <br></br> <br></br>

            Runtime: {this.state.details.Runtime}utes <br></br>
            Director(s): {this.state.details.Director} <br></br>
            Actors: {this.state.details.Actors} <br></br>
            Genre(s): {this.state.details.Genre} <br></br>
            Writer(s): {this.state.details.Writer} <br></br><br></br>

            Plot: {this.state.details.Plot} <br></br>
          </div>
        </div>


        <div className="movieResultsContainer" id="movieResultsContainer">
          {
            this.state.movies.map( (movie) =>
              <div 
                key={movie.imdbID}
                className="movieCard"
                onClick= {() => {
                    this.getMovieDetails(movie.imdbID)
                    document.getElementById("movieResultsContainer").style.display = "none"
                    document.getElementById("detailsContainer").style.display = "flex"
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