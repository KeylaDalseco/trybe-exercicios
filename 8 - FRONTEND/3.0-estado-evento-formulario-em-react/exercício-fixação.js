// =========== UNINDO COMPONENTS DE ESTADO E EVENTO ==========

import React from 'react'


class Buttons extends React.Component {
    constructor() {
        super()
        // A função abaixo vincula "manualmente" o `this` à nossa função
        // this.btn1 = this.btn1.bind(this)
        this.btn2 = this.btn2.bind(this)
        this.btn3 = this.btn3.bind(this) // SE USAR FUNCTION DEVE SER FEITO O CONSTRUCTOR E BIND
        this.state = {
            numeroDeCliques: 0
        }
        
      }
    // SE VC USAR ARROW FUNCTION NÃO PRECISA DE BIND E NEM CONSTRUCTOR
    btn1 = () => {
        console.log(this)
        console.log("cliquei no 1° botão")
    }
    
    btn2 () {
        console.log("cliquei no 2° botão")
        console.log(this)
    }
    
    btn3 () {
        console.log("cliquei no 3° botão")
        console.log(this)
    }
    render() {
        return(
            <div>
                <button onClick={ this.btn1 }>Botão 1</button>
                <button onClick={ this.btn2 }>Botão 2</button>
                <button onClick={ this.btn3 }>Botão 3</button>
            </div>
        )
    }
}

export default Buttons;