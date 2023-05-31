import { useState } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { contextFavorits } from './FilmsContext';

export default function ProviderFavorits({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  const updateFavorits = (movie) => {
    const isAlreadyFavorite = favoritos.find((favorite) => favorite.id === movie.id);
    if (isAlreadyFavorite) {
      const newFavorites = favoritos.filter((favorite) => favorite.id !== movie.id);
      setFavoritos(newFavorites);
      Swal.fire('O filme foi removido dos favoritos!');
    } else {
      setFavoritos([...favoritos, movie]);
      Swal.fire('O filme foi adicionado aos favoritos!');
    }
  };

  const valueContextFavorits = {
    favoritos, setFavoritos, updateFavorits,
  };

  return (
    <contextFavorits.Provider value={ valueContextFavorits }>
      {children}
    </contextFavorits.Provider>
  );
}

ProviderFavorits.propTypes = {
  children: PropTypes.element.isRequired,
};
