import React, {useState} from 'react';
import config from '../config/config';
import axios from 'axios';

function Search() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);  

  const searchMovies = async e => {
    e.preventDefault();
    try {    
      const response = await axios.get(`${config.baseUrl}?api_key=${config.getKey()}&query=${query}&page=1`);
      const { results } = response.data;
      setMovies(results);
      setQuery("");
    } catch({ message }) {
       console.error(message);
    }
  }
 
  const handleChange = e => setQuery(e.target.value);

 return (
    <div className="form">
        <form className="form__submit" onSubmit={searchMovies} autoComplete="off">
              <input
                id="movie"
                type="text"
                name="query"
                value={query}
                onChange={handleChange}
                placeholder="movie search..."
              />
              <button type="submit">Search</button>
        </form>
    </div>
 )
}

export default Search;