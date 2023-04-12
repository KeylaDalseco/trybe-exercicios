// App.js
import React, { Component } from 'react';
import './App.css';
import Joke from './components/Joke';

class App extends Component {
  // EXEMPLO COMENTADO DA API DO RICK AND MORTY

  // constructor(props){
  //   super(props);
  //   this.state = {
  //       characters: [],
  //   };
  // }

  // fetchCharacters = () => {
  //   fetch('https://rickandmortyapi.com/api/character')
  //   .then(response => response.json())
  //   .then(data => { console.log(data.results)
  //     this.setState({characters: data.results})
  //   })
  // };

  // componentDidMount() {
  //   this.fetchCharacters()
  // }


  // render() {
  //   const { characters } = this.state;
  //   console.log(characters);
  //   return (
  //     <div className="App">
  //       <h1>
  //         Ricky and Morty Characters:
  //       </h1>
  //       <div className="body">
  //         {characters.map(({ name, image, id }) => { // ou poderia fazer caracters.map(caracters)=> e usar caracter.name
  //           return (
  //             <div className="container" key={id}>
  //               <h3>{name}</h3>
  //               <img src={image} alt={name}/>
  //             </div>
  //           )
  //         })}
  //       </div>
  //       <div>
  //         <DadJoke />
  //       </div>
  //     </div>
  //   );
  // }

  // EXEMPLO 2 DE ATIVIDADE

  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

    async fetchJoke() {
      this.setState(
        { loading: true }, // Primeiro parâmetro da setState()!
        async () => {
        const requestHeaders = { headers: { Accept: 'application/json' } }
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
        const requestObject = await requestReturn.json();
        this.setState({
          loading: false,
          jokeObj: requestObject
        });
      });
    }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    // Esse método será responsável por salvar a piada no array de piadas storedJokes!!
      this.setState(({ storedJokes, jokeObj }) => ({
        storedJokes: [...storedJokes, jokeObj]
      }));
  
      this.fetchJoke();
    }

  render() {
    const { storedJokes, loading, jokeObj} = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <h1>Piadas</h1>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

      {
        /*
        Aqui vamos construir nossa lógica com uma renderização condicional
        do nosso componente Joke, a ideia é renderizar um loading enquanto
        esperamos a nossa requisição de piadas finalizar.

        <p>RENDERIZAÇÃO CONDICIONAL</p>
        */

        loading 
            ? loadingElement
            : <Joke jokeObj={jokeObj} saveJoke={this.saveJoke} />
      }

      </div>
    );
  }
}

export default App;
