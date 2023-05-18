import React from 'react';
import { connect } from 'react-redux';

import { fetchDogImage } from "./redux/actions/actions";

import "./App.css"

class App extends React.Component {
  render() {
    const { isFetching, imageURL, dispatch, errorMessage } = this.props;

    if (isFetching) return <p>Carregando...</p>;
    // if(errorMessage) return <p>Erro ao carregar a imagem...</p>

    return (
      <div>
        <button
          onClick={() => { dispatch(fetchDogImage()) }}
          type="button"
        >
          Novo Doguinho
        </button>
        {
          imageURL &&
          <img
            src={imageURL}
            alt="Imagem de um cachorro aleatório"
          />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  imageURL: state.reducer.image,
  isFetching: state.reducer.loading,
  // errorMessage: state.reducer.error,
});

export default connect(mapStateToProps)(App);

