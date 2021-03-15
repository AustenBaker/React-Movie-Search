import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const QuickSearch = ({getSearchResults}) => {
  return (
    <div id="QuickSearchContainer">
      <FontAwesomeIcon icon={['fa', 'ghost']}  color="#fff" className="quickSearchIcon" onClick={() => getSearchResults('ghost')}/>
      <FontAwesomeIcon icon={['fa', 'apple-alt']}  color="#0f0" className="quickSearchIcon" onClick={() => getSearchResults('apple')} />
      <FontAwesomeIcon icon={['fa', 'pizza-slice']}  color="#b30" className="quickSearchIcon" onClick={() => getSearchResults('pizza')} />
      <FontAwesomeIcon icon={['fa', 'hamburger']}  color="#964B00" className="quickSearchIcon" onClick={() => getSearchResults('burger')} />
      <FontAwesomeIcon icon={['fa', 'key']}  color="#d4af37" className="quickSearchIcon" onClick={() => getSearchResults('key')} />
      <FontAwesomeIcon icon={['fa', 'plane']}  color="#fff" className="quickSearchIcon" onClick={() => getSearchResults('airplane')} />

    </div>
  );
};

export default QuickSearch;