import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Search({ search, handleSearch }) {
  const searchInput = React.useRef(null);
  React.useEffect(() => {
    searchInput.current.focus();
  }, [search]);
  
  const handleChange = (event) => {
    handleSearch(event.target.value);
  };

  // copied for testing
  return (
    <div className='container'>
      <section className='main-search'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          ref={searchInput}
          type='text'
          placeholder='Search'
          className='main-search'
          value={search}
          onChange={handleChange}
        />
      </section>
    </div>
  );
}

export default Search;
