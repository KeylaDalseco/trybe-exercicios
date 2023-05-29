import ThemeContext from './ThemeContext';
import { useState } from 'react';

export default function ThemeProvider({ children }) {
  // foi criado um state local para iniciar com uma cor
  const [ themeColor, setThemeColor] = useState('dark');

  function toggleTheme () {
    // o serThemeColor possui a função de alterar o estado da cor do tema
    setThemeColor( themeColor === 'dark' ? 'light' : 'dark');
  }

  return (
    // Aqui estamos envolvendo os components que terão a informação compartilhada no provider, criado através do createContext. Por padrão é passado o valor inicial.
    <ThemeContext.Provider value={{ color: themeColor, toggleTheme }}>
    <div className={`app ${themeColor}`}>
      { children }
    </div>
    </ThemeContext.Provider>
  );
}