import './App.css';
import ThemeContext from './context/ThemeContext';

function App() {
  return (
    <ThemeContext.Provider value={{ color: 'dark' }}>
    <div className="App">
      <Header />
      <Footer />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
