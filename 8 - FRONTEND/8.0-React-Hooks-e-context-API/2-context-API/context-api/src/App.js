import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ThemeProvider from './context/ThemeProvider';

function App() {

  return (
    // Aqui estamos envolvendo os components que terão a informação compartilhada no provider, criado através do createContext.
    // Tudo que estiver englobado no ThemeProvider terá acesso ao context
    <ThemeProvider>
      <Header />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
