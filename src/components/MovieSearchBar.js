import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MovieSearchBar extends React.Component {
  render(){
    return (
      <div id="searchBarContainer">
        <input 
          type="text"
          value={this.props.input}
          onChange={this.props.updateInput}
          className="searchInput"
          placeholder="Search movies..."
        />
        <FontAwesomeIcon 
          icon={['fa', 'search']} 
          color="#6e5494" 
          id="searchIcon"
        />
      </div>
    );
  }
}

export default MovieSearchBar;