import React from "react";

const MovieSearchResults = ({data, fetchDetails}) => {
  //If data.Response != true, print loading
  if(!data.Response){
    return <h1 id="searchResultsContainer">Loading...</h1>
  }else{
    return(
      <div id="searchResultsContainer" className="bg-dark text-white">
        {data.Search.map( (movie, index) => 
          <div 
            key={index}
            id={movie.imdbID} 
            className="movieCard"
            onClick={() => {fetchDetails(movie.imdbID)} }  
          > 
            <img className="movieImg" src={movie.Poster} alt={movie.Title}></img>
          </div>
        )}
      </div> 
    )
  }
}

export default MovieSearchResults;