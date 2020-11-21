import React from "react";

class MovieDetails extends React.Component {
  render() {
    var data = this.props.data;
    return(
      <div id="movieDetailsContainer">
        <img id="detailsImg" src={data.Poster} alt="movie poster"></img>
        <div id="detailsText">
          IMBD:      <b> {data.imdbRating} / 10 </b> 
          Metascore: <b> {data.Metascore} / 100 </b> 
          Awards:    <b> {data.Awards} </b> 

          Runtime:      {data.Runtime}utes 
          Plot:         {data.Plot} 

          Director(s):  {data.Director} 
          Writer(s):    {data.Writer} 
          Actors:       {data.Actors} 
          Genre(s):     {data.Genre} 
        </div>
      </div>
    )
  }
}

export default MovieDetails;