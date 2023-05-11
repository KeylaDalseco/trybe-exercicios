import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { fetchGOT } from './redux/actions';

class App extends React.Component {
state = {
  inputSearch: '',
};

handleChange = ({target}) => {
  const { value, name } = target;
  this.setState({
    [name]: value,
  })
}

  render() {
    const { inputSearch } = this.state
    const { personagem, dispatch, loading } = this.props
    const { name, gender, culture, born } = personagem;
    console.log(personagem);
    return (
      <>
      <h1>Game oh Thunks</h1><label>
        Nome:
        <input type="text"
          name="inputSearch"
          value={inputSearch}
          onChange={this.handleChange}
          maxLength='81'
          placeholder="Nome">
        </input>
        <button
        type='button'
        onClick={() => { dispatch(fetchGOT(inputSearch))}}
        >Pesquisar
        </button>
      </label>
      { loading && <p>Carregando...</p> }
      <div>
        <h3>{`Nome: ${name}`}</h3>
        <p>{`Gender: ${gender}`}</p>
        <p>{`Cultura: ${culture}`}</p>
        <p>{`Born: ${born}`}</p>
      </div>
      </>
    )
}
}

// Acesso ao estado global
const mapStateToProps = (state) => ({
  personagem: state.reducer.personagem,
  loading:state.reducer.personagem
  //...state.reducer.personagem
});

// No export
export default connect(mapStateToProps)(App)
