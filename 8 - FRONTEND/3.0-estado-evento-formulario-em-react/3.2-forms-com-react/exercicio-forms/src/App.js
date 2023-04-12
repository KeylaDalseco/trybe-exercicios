import './App.css';
import React from 'react';
import NameInput from './NameInput';
import TextArea from './TextArea';

class App extends React.Component {
  state = {
    selected: '',
    name: '',
    email: '',
    aprendizados: '',
    checkbox: false
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { selected, name, email, aprendizados, checkbox} = this.state
    return (
      <div className='App'>
        <h1>PRIMEIRO FORMS FEITO COM REACT!</h1>
        <form>
        <fieldset>
          <div>
            <label htmlFor='selected' > 
              Esse é o select:
              <select 
              name="selected"
              id='selected'
              value={selected} 
              onChange={this.handleChange}
              >
                <option>teste 1</option>
                <option>teste 2</option>
                <option>teste 3</option>
              </select>
            </label>
          </div>
          <div>
            <NameInput 
            value={name}
            handleChange={this.handleChange}
            />
            {/* validação como deve ser feita: */}
            <i style={{color: 'red'}}>
            { !name ? 'O nome precisa ser preenchido!' : ''}
            { name.length > 80
          ? 'O nome não pode ter mais que 80 caracteres!' : ''}
            </i>
            </div>
            <br />
            <label>
              Email:
              <input 
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Email"></input>
            </label>
            <div>
              <label>
                Você concorda com os termos?
                <input 
                type="checkbox"
                name="checkbox"
                value={checkbox}
                onChange={this.handleChange}
                placeholder="Email"></input>
              </label>
            </div>
          </fieldset>
          <TextArea
            value={aprendizados}
            handleChange={this.handleChange}
            />
        </form>
      </div>
    );
  }
};

export default App;
