import './App.css';
import React from 'react';

class TextArea extends React.Component{
    render() {
        const { value, handleChange } = this.props
        return(
            <fieldset>
            <p htmlFor="aprendizados">Escreva aqui seus aprendizados usando o React no form!</p>
            <textarea
            id='aprendizados'
            name="aprendizados"
            value={value}
            onChange={handleChange}
            placeholder='Escreva aqui...'
            cols="30" 
            rows="10">
            </textarea>
          </fieldset>
        )
    }
}

export default TextArea;
