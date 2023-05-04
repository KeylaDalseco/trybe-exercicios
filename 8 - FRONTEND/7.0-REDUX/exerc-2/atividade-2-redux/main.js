import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import './style.css'

const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'STATUS':
      return {
        ...state,
        status: state.status === 'offline' ? 'online' : 'offline'
      };
    case 'THEME_COLOR': 
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark'
      }
    default:
      return state;
  }
}

const store = createStore(reducer, composeWithDevTools());

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  store.dispatch({type: 'THEME_COLOR'})
});

statusButton.addEventListener('click', () => {
  store.dispatch({type: 'STATUS'})
});

store.subscribe(( ) => {
  const { status, theme } = store.getState();

  const statusAtual = document.querySelector('#status').innerHTML = status;
  const body = document.querySelector('body');

  if(theme === 'dark') {
    body.style.backgroundColor = '#333333'
    body.style.color = 'white'
    themeButton.innerHTML = 'Dark Mode'
  } else {
    body.style.backgroundColor = 'white'
    body.style.color = 'black'
    themeButton.innerHTML = 'Light Mode'
  }

  if (statusAtual === 'online') {
    statusButton.innerHTML = 'Ficar Offline'
  } else {
    statusButton.innerHTML = 'Ficar Online'
  }
})