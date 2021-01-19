import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//PROP info
//searchResults = searchResultsData
//movieDetails = movieDetailsData
//getMovieDetails is a function passed from App.js which
  //calls fetchMovieDetails, and updates state in App.js

const MovieSearchResults = ({searchResults, movieDetails, getMovieDetails}) => {
  if(searchResults === undefined || searchResults.length === 0 || searchResults.Response === "False"){
    return (
      <h1 id="searchResultsContainer">No movies found</h1>
    );
  }else if(searchResults.Search != undefined){
    return(
      <div id="searchResultsContainer" className="bg-dark text-white">
        {searchResults.Search.map( (movie, index) => 
          <div className="movieCardContainer">
            <div 
              key={index}
              id={movie.imdbID} 
              className="movieCardInner"
              onMouseEnter={ () => (getMovieDetails(movie.imdbID)) }  
            > 
              <div className="movieCardFront">
                <img className="movieImg" src={movie.Poster} alt={movie.Title}></img>
              </div>
             
              <div className="movieCardBack">
                <div id="cardBackHeader"> {movieDetails.Title} </div> 
                <div id="cardBackGenres"> {movieDetails.Genre} </div>
                <div id="imbdContainer">
                  <FontAwesomeIcon icon={['fab', 'imdb']} size="2x" id="imdbIcon" color="#DBA506"/> 
                  <div id="imbdRating">{movieDetails.imdbRating} / 10  </div>
                </div>
                <div id="cardBackPlot"> {movieDetails.Plot} </div> <br />
                <button
                  className="fixed-bottom showDetailsButton"
                  onClick={() => {
                    getMovieDetails(movie.imdbID);
                    document.getElementById("movieDetailsContainer").style.display = "block";
                    document.getElementById("searchResultsContainer").style.display = "none";
                  }}
                > Show All Details </button>
              </div>
            </div>
          </div>
        )}
      </div> 
    )
  }
  return null;
}

export default MovieSearchResults;