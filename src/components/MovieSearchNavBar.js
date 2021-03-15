import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieSearchNavBar = ({input, onChange, getSearchResults}) =>  {
  const handleClick = () => {
    document.getElementById("movieDetailsContainer").style.display = "none";
    document.getElementById("searchResultsContainer").style.display = "none";
    document.getElementById("QuickSearchContainer").style.display = "flex";
    document.getElementById("quickSearchHeader").style.display = "block";
  }

  return (
    <div id="navBarContainer">
      <h1 id="mainHeader" onClick={() => handleClick()}>
        React
        <FontAwesomeIcon icon={['fa', 'film']} 
          style={{marginLeft: 10, marginRight: 8, color: "red"}} 
        />
        Search
      </h1>
      <div id="searchBar">
        <input 
          type="text" name="key" value={input} onChange={onChange} 
          className="searchInput" placeholder="Search movies..."
        />
        <FontAwesomeIcon icon={['fa', 'search']} id="searchIcon" 
          style={{}} 
        />
        <input 
          type="submit" id="searchButton"  value="Search" 
          onClick={() => getSearchResults(input)} 
        />
      </div>
    </div>
  );
}


export default MovieSearchNavBar;