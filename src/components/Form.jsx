import React from "react";
import PropTypes from "prop-types";

export default function Form({ handleSearch, query, handleChange }) {
  return (
    <div className="form">
      <form className="form__submit" onSubmit={handleSearch} autoComplete="off">
        <input
          id="movie"
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
          placeholder="search..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  query: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
