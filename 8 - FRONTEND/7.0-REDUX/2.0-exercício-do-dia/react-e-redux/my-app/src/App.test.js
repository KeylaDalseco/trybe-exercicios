import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
// import counterReducer from './redux/reducers/counterReducer';
import React from 'react';
import App from './App';
import { rootReducer } from './redux/store/store';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (component, { initialState, store = createStore(rootReducer, initialState, applyMiddleware(thunk))} = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

describe('Testando a aplicação e o reducer counterReducer', () => {
  test('A página deve renderizar dois botões e o número 0', () => {  
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryAllByRole('button');
  
    expect(buttonAdicionar.length).toBe(2);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('O número renderizado na página deve ser o mesmo valor do estado global', () => {
    const initialState = {
      counterReducer: {
        count: 10,
      }
    };
    renderWithRedux(<App/>, { initialState });

    expect(screen.queryByText('0')).not.toBeInTheDocument();
    screen.getByText('10')
  })
  test('teste com o valor padrão do reducer e se o clique dos botões incrementa corretamente', async () => {
    renderWithRedux(<App/>)
    const btn1 = screen.getByRole('button', {  name: /incrementar 1/i});
    const btn5 = screen.getByRole('button', {  name: /incrementa 5/i});
    screen.getByText('0');
    userEvent.click(btn1);
    await screen.findByText('1');
    userEvent.click(btn5);
    await screen.findByText('6');
  });

  test('teste se quando o valor inicial do estado for 5, os botões incrementam corretamente', async () => {
    const initialState = {
      counterReducer: {
        count: 5,
      }
  };
    renderWithRedux(<App/>, { initialState })
    screen.getByText('5');
    userEvent.click(screen.getByRole('button', {  name: /incrementar 1/i}));
    await screen.findByText('6');
    userEvent.click(screen.getByRole('button', {  name: /incrementa 5/i}));
    await screen.findByText('11');
    
  });
  test('Incrementa o valor da store ao clicar no botão', async () => {
    const { store } = renderWithRedux(<App/>);
    screen.getByText('0');
    expect(store.getState().counterReducer.count).toBe(0);
    userEvent.click(screen.getByRole('button', {  name: /incrementar 1/i}));
    await screen.findByText('1');
    expect(store.getState().counterReducer.count).toBe(1);
  });

})
