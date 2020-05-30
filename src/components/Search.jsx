import React from 'react';

function Search() {
 return (
    <div className="form">
        <form className="form__submit" onSubmit={""}>
              <input
                id="movie"
                type="text"
                name="movie"
                value=""
                onChange={''}
                placeholder="movie search..."
              />
              <button type="submit">Search</button>
        </form>
    </div>
 )
}

export default Search;