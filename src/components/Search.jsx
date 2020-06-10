import React, {useState} from 'react';
import Form from './Form';
import MovieCardList from './MovieCardList';
import config from '../config/config';
import axios from 'axios';

function Search() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);  
  const [loading, setLoading] = useState(false);

  const searchMovies = async e => {
    e.preventDefault();
    
    try { 
      if (query) {
        setLoading(true); 
        const response = await axios.get(`${config.baseUrl}?api_key=${config.getKey()}&query=${query}&page=1&include_adult=false`);
        const { results } = response.data;
        setMovies(results);
        setLoading(false);
        setQuery("");      
      }
    } catch({ message }) {
       console.error(message);
    }
   
  }

 const handleChange = e => setQuery(e.target.value);

 return (
    <>
      <Form handleSearch={searchMovies} 
            query={query} 
            handleChange={handleChange}
      />
      <MovieCardList movies={movies} loading={loading}/>
    </>
 )
}

export default Search;