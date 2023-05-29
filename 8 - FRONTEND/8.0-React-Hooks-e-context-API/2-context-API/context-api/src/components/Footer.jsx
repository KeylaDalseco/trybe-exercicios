import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function Footer() {
  // aqui importamos o themeContex, nossa createContext criada
  // importamos tbm a useContext, para ler e ter acesso a esse estado global. 
  // o useContext recupera o valor que foi passado pra ele
  const theme = useContext(ThemeContext);
  return <footer>Tema Atual: {theme.color}</footer>;
}

export default Footer;