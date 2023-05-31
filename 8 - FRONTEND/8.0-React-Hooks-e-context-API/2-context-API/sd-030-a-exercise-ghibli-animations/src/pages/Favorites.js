import { useContext } from 'react';
import { contextFavorits } from '../context/FilmsContext';
import Header from '../components/Header';

export default function Favorites() {
  const { favoritos } = useContext(contextFavorits);
  console.log(favoritos);

  return (
    <>
      <Header />
      <main>
        <h1>Favorites</h1>
        { favoritos.map((favorito) => (
          <div key={ favorito.id }>
            <h2>{favorito.title}</h2>
            <img src={ favorito.image } alt={ favorito.description } width="200" />
          </div>
        ))}
      </main>
    </>
  );
}
