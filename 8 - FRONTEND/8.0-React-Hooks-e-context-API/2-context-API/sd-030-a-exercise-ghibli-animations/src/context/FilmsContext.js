// implemente a estrutura do context aqui.
import { createContext } from 'react';

const INITIAL_STATE_MOVIES = {
  movies: [],
};

const INITIAL_STATE_FAVORITS = {
  favoritos: [],
};

// esse context é para os filmes
export const contextMovies = createContext(INITIAL_STATE_MOVIES);

// esse context é para os filmes favoritos
export const contextFavorits = createContext(INITIAL_STATE_FAVORITS);
