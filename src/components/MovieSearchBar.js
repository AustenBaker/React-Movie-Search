import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MovieSearchBar extends React.Component {
  handleClick() {
    document.getElementById("movieDetailsContainer").style.display = "none";
    document.getElementById("searchResultsContainer").style.display = "none";
    document.getElementById("searchTip").style.display = "none";
  }
  
  render(){
    return (
      <div id="searchBarContainer">
        <h1 id="mainHeader" onClick={this.handleClick}>
          React 
          <FontAwesomeIcon icon={['fa', 'film']} color="red" style={{marginLeft: 5, marginRight: 5}} />
          Search
        </h1>
        <div id="searchBar">
          <input 
            type="text"
            name="key"
            value={this.props.input}
            onChange={this.props.onChange}
            className="searchInput"
            placeholder="Search movies..."
          />
          <FontAwesomeIcon 
            icon={['fa', 'search']} 
            id="searchIcon"
          />
          <input type="submit" id="searchButton" value="Search" onClick={this.props.fetchMovies} />
        </div>
      </div>
    );
  }
}

export default MovieSearchBar;