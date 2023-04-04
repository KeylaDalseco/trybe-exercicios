import React from 'react'


class Buttons extends React.Component {
    constructor() {
        super()
        // A função abaixo vincula "manualmente" o `this` à nossa função
        // this.btn1 = this.btn1.bind(this)
        this.btn2 = this.btn2.bind(this)
        this.btn3 = this.btn3.bind(this) // SE USAR FUNCTION DEVE SER FEITO O CONSTRUCTOR E BIND
        // this.state = {
        //     numeroDeCliques: 0
        // }
        // ou Removemos a declaração do estado de dentro do construtor        
      }
        // e chama do lado de fora da seguinte forma, sem o constructor:
        state = {
            numeroDeCliques1: 0,
            numeroDeCliques2: 0,
            numeroDeCliques3: 0,
          };

    // SE VC USAR ARROW FUNCTION NÃO PRECISA DE BIND E NEM CONSTRUCTOR
    btn1 = () => {
        console.log(this) // assim acesso ao objeto de inform da função
        this.setState( (estadoAnterior) => ({
            numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
            // assim tbm da
            // numeroDeCliques1: this.state.numeroDeCliques1 + 1
        }));
        console.log("cliquei no 1° botão")
        if (this.state.numeroDeCliques1 % 2 === 0) {
            console.log('vermelho');
        } else {
            console.log('verde');
        }
    }
    
    btn2 () {
        console.log("cliquei no 2° botão")
        console.log(this)
        this.setState( (estadoAnterior) => ({
            numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
        }));
    }
    
    btn3 () {
        console.log("cliquei no 3° botão")
        console.log(this)
        this.setState( (estadoAnterior) => ({
            numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
        }));
    }
    render() {
        const { numeroDeCliques1, numeroDeCliques2, numeroDeCliques3 } = this.state
        return(
            <div>
                <button type="button" onClick={ this.btn1 } style={ { backgroundColor: 'white'} }>Botão 1</button>
                <button type="button" onClick={ this.btn2 }>Botão 2</button>
                <button type="button" onClick={ this.btn3 }>Botão 3</button>
                <p>{ `Cliques botão 1: ${ numeroDeCliques1 } `}</p>
                <p>{ `Cliques botão 2: ${ numeroDeCliques2 } `}</p>
                <p>{ `Cliques botão 3: ${ numeroDeCliques3 } `}</p>
                {/* ou <p>{ this.state.numeroDeCliques }</p> */}
            </div>
        )
    }
}

export default Buttons;

