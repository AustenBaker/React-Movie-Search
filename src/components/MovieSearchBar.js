import React from "react";

class MovieSearchBar extends React.Component {
  render(){
    return (
      <div id="searchBarContainer">
        <input value={this.props.input}
          onChange={this.props.updateInput}
          className="searchInput"
          placeholder="Back to the Future"
        />
        <button
          className="searchButton"
          onClick={() => {this.props.getMovieSearchResults()}}
        >
          Search
        </button>
      </div>
    );
  }
}

export default MovieSearchBar;