import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieSearchResults = ({searchResults, details, fetchDetails}) => {
  //If searchResults.Response != true, print loading
  if(!searchResults.Response){
    return <h1 id="searchResultsContainer">Loading...</h1>
  }else{
    return(
      <div id="searchResultsContainer" className="bg-dark text-white">
        {searchResults.Search.map( (movie, index) => 
          <div className="movieCardContainer">
            <div 
              key={index}
              id={movie.imdbID} 
              className="movieCardInner"
              onMouseEnter={ () => (fetchDetails(movie.imdbID)) }  
            > 
              <div className="movieCardFront">
                <img className="movieImg" src={movie.Poster} alt={movie.Title}></img>
              </div>
             
              <div className="movieCardBack">
                <div id="cardBackHeader"> {details.Title} </div> 
                <div id="cardBackGenres"> {details.Genre} </div>
                <div id="imbdContainer">
                  <FontAwesomeIcon icon={['fab', 'imdb']} size="2x" id="imdbIcon" color="#DBA506"/> 
                  <div id="imbdRating">{details.imdbRating} / 10  </div>
                </div>
                <div id="cardBackPlot"> {details.Plot} </div> <br />
                <button
                  className="fixed-bottom showDetailsButton"
                  onClick={() => {
                    fetchDetails(movie.imdbID)
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
}

export default MovieSearchResults;