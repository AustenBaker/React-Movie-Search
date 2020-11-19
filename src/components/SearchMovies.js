import React from "react";
import $ from 'jquery';

class SearchMovies extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
    }
  }

  //live update search input in box
  updateInput = event => {
    this.setState({input: event.target.value})
  }

  //use jQuery to search OMDB api then call renderMovies(response)
  searchMovie = () => {
    $.getJSON(`http://www.omdbapi.com/?apikey=a43b7ac2&s=${this.state.input}`)
      .then(this.renderMovies);
  }

  //renders movies or error depending on search results
  renderMovies = (response) => { 
    var moviesHTML = ``;

    if(response.Response.toUpperCase() === 'TRUE') {
      //Render individual movie card results
      for(let i=0; i<response.Search.length; i++){
        moviesHTML += `
          <div id="${response.Search[i].imdbID}" class="movieCard">
            <img class="movieImg" src="${response.Search[i].Poster}" alt="${response.Search[i].Title}"></img>
          </div>
        `;
      }

      //update html before generating event listeners
      $('#searchResultsContainer').html(moviesHTML);

      //Render individual event listeners for each movie card
      for(let i=0; i<response.Search.length; i++){
        //When clicked calls getMovieDetails() passing that movie card's id
        document.getElementById(response.Search[i].imdbID).addEventListener("click", () => {
          this.getMovieDetails(response.Search[i].imdbID);
        });
      }

    } else {

      moviesHTML = `<h1>No results</h1>`;
      $('#searchResultsContainer').html(moviesHTML);

    }
  }
  
  getMovieDetails = (id) => {
    $.getJSON(`http://www.omdbapi.com/?apikey=a43b7ac2&i=${id}`)
      .then(this.renderMovieDetails);
  }
  renderMovieDetails = (response) => {
    //Render movie detail page
    var detailsHTML = `
      <img id="detailsImg" src="`+response.Poster+`" alt="movie poster"></img>
      <div id="detailsText">
        IMBD:      <b>`+response.imdbRating+` / 10 </b> <br>
        Metascore: <b>`+response.Metascore+` / 100 </b> <br>
        Awards:    <b>`+response.Awards+` </b> <br><br>

        Runtime:      `+response.Runtime+`utes <br>
        Plot:         `+response.Plot+` <br><br>

        Director(s):  `+response.Director+` <br>
        Writer(s):    `+response.Writer+` <br>
        Actors:       `+response.Actors+` <br>
        Genre(s):     `+response.Genre+` <br><br>
      <div>`;

    //update html
    $('#movieDetailsContainer').html(detailsHTML);

    //Hide movie results and show details
    document.getElementById("searchResultsContainer").style.display = "none"
    document.getElementById("movieDetailsContainer").style.display = "flex"

    document.getElementById("movieDetailsContainer").addEventListener("click", () => {
      document.getElementById("searchResultsContainer").style.display = "flex"
      document.getElementById("movieDetailsContainer").style.display = "none"
    })
  }

  render(){
    return (
      <div>
        <p className="mainHeader">Movie Search</p>
        <div className="searchContainer">
          <input value={this.state.input}
            onChange={this.updateInput}
            className="searchInput"
            placeholder="Back to the Future"
          />
          <button
            className="searchButton"
            onClick={() => {
              this.searchMovie()
              document.getElementById("searchResultsContainer").style.display = "flex"
              document.getElementById("movieDetailsContainer").style.display = "none"
            }}
          >
            Search
          </button>
        </div>

        <div id="searchResultsContainer"></div>    
        <div id="movieDetailsContainer"></div>
      </div>
    );
  }
}

export default SearchMovies;