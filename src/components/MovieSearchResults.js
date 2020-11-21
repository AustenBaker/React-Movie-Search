import React from "react";
import $ from 'jquery';

class MovieSearchResults extends React.Component {

  generateMovieCards = () => { 
    var moviesHTML = ``;
    var data = this.props.data;

    if(data.Response === 'True') {
      //Render individual movie card results
      for(let i=0; i<data.Search.length; i++){
        moviesHTML += `
          <div id="${data.Search[i].imdbID}" class="movieCard">
            <img class="movieImg" src="${data.Search[i].Poster}" alt="${data.Search[i].Title}"></img>
          </div>
        `;
      }
      //update html before generating event listeners
      $('#searchResultsContainer').html(moviesHTML);
      //Render individual event listeners for each movie card
      for(let i=0; i<data.Search.length; i++){
        //When clicked calls getMovieDetails() passing that movie card's id
        document.getElementById(data.Search[i].imdbID).addEventListener("click", () => {
          this.props.getMovieDetails(data.Search[i].imdbID);
        });
      }
    } else {
      moviesHTML = `<h1>No results</h1>`;
      $('#searchResultsContainer').html(moviesHTML);
    }
  }

  render() {
    this.generateMovieCards();
    return(
      <div id="searchResultsContainer"></div> 
    )
  }
}

export default MovieSearchResults;