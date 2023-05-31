import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { contextMovies } from './FilmsContext';

export default function ProviderMovies({ children }) {
  const [movies, setMovies] = useState([]);

  // fetch api aloalo
  const fetchData = async () => {
    const URL = 'https://api-trybe-frontend.vercel.app/api/ghibli-animations';
    const response = await fetch(URL);
    const data = await response.json();
    return setMovies(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const valueContext = {
    movies, setMovies,
  };
  return (
    <contextMovies.Provider value={ valueContext }>
      {children}
    </contextMovies.Provider>
  );
}

ProviderMovies.propTypes = {
  children: PropTypes.element.isRequired,
};
