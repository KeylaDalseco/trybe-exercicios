import './App.css';
import React from 'react';

class NameInput extends React.Component{
    render() {
        const { value, handleChange } = this.props
        return (
            <label>
              Nome:
              <input type="text"
              name="name"
              value={value}
              onChange={handleChange}
              maxLength='81'
              placeholder="Nome">
              </input>
            </label>
        )
    }
}

export default NameInput;
