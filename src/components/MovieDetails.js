import React from "react";

class MovieDetails extends React.Component {
  render() {
    var data = this.props.data;
    return(
      <div id="movieDetailsContainer" className="container bg-light my-5">
        <div className="row">
          <img id="detailsImg" className="col-lg-4 align-self-center" src={data.Poster} alt="movie poster"></img>
          <div id="detailsText" className="col-sm-12 col-lg-8">
            IMBD:      <b> {data.imdbRating} / 10 </b> <br></br>
            Metascore: <b> {data.Metascore} / 100 </b> <br></br>
            Awards:    <b> {data.Awards} </b> <br></br><br></br>

            Plot:         {data.Plot} <br></br> <br></br>

            Director(s):  {data.Director} <br></br>
            Writer(s):    {data.Writer} <br></br>
            Actors:       {data.Actors} <br></br>
            Genre(s):     {data.Genre} <br></br>
            Runtime:      {data.Runtime}utes  <br></br>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetails;