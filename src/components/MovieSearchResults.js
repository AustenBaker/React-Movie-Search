import React from "react";

const MovieSearchResults = ({data, data2, fetchDetails}) => {
  //If data.Response != true, print loading
  if(!data.Response){
    return <h1 id="searchResultsContainer">Loading...</h1>
  }else{
    return(
      <div id="searchResultsContainer" className="bg-dark text-white">
        {data.Search.map( (movie, index) => 
          <div className="movieCardContainer">
            <div 
              key={index}
              id={movie.imdbID} 
              className="movieCardInner"
              onMouseOver={ () => (fetchDetails(movie.imdbID)) }  
            > 
              <div className="movieCardFront">
                <img className="movieImg" src={movie.Poster} alt={movie.Title}></img>
              </div>
             
              <div className="movieCardBack">
                <h3 className="text-center"> {data2.Title} </h3>
                <h4>
                  IMBD:      <b> {data2.imdbRating} / 10 </b> <br />
                  Metascore: <b> {data2.Metascore} / 100 </b> <br /><br />
                </h4>
                <h6> {data2.Plot} </h6> <br />
                  Genre(s):     {data2.Genre} 
                <button
                  className="fixed-bottom btn btn-info w-100"
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