import { useContext, useState } from 'react';
import { contextFavorits, contextMovies } from '../context/FilmsContext';
import Header from '../components/Header';

export default function Home() {
  const { movies } = useContext(contextMovies);
  const { favoritos, updateFavorits } = useContext(contextFavorits);
  console.log(movies);

  const [name, setName] = useState('');

  return (
    <div>
      <Header />
      <h1>Films</h1>
      <input
        type="text"
        value={ name }
        onChange={ ({ target }) => setName((target.value)) }
      />
      {/* Aqui estou filtrando primeiro pelo título os filmes. Adicionei o toLowerCase para que quando eu digitar em letra minuscula, apareça todos independente de camelCase. Em seguida fiz um map */}
      { movies
        .filter((movie) => movie.title.toLowerCase().includes(name))
        .map((movie) => (
          <div key={ movie.id }>
            <h2>{movie.title}</h2>
            <img src={ movie.image } alt={ movie.description } width="200" />
            <div>
              <button
                type="button"
                onClick={ () => updateFavorits(movie) }
              >
                { (favoritos.some((favorite) => favorite.id === movie.id))
                  ? 'desfavoritar' : 'favoritar'}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
