import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
// importação do reacr router para usar BrowserRouter, Route, Link, Switch
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <><BrowserRouter >// importação do react router para usar BrowserRouter, Route, Link, Switch
        <nav>
          <ul>
            {/* o link aqui é utilizado para gerar os links para direcionar para o component */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link> </li>
            <li><Link to="/users">Users</Link> </li>
          </ul>
        </nav>
        {/* o SWITCH garante que apenas uma rota irá aparecer do component quando clicada. USar o exact antes do path tbm auxilia */}
        <Switch>
          {/* o route cria a rota do component pela url */}
          {/* É RECOMENDADO QUE O MAIS GENERICO SEJA O ÚLTIMO '/', E OS OUTROS PRA CIMA PARA NÃO DAR ERRO QUANDO FOR TER A PROCURA NÃO TRAZER 2 ELEMENTOS. VC PODE USAR O EXACT TB */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users/:id" render={(props) => <Users {...props} greetingsMessage="Good Morning" />} />
          {/* acesso o component que possui parametro, utilizo o parametro props e espalho com o spread para utilizá - lo, adiciono o parametro passado pelo component users. COlocar :id no path faz com que eu crie uma key dentro do objeto props.match.params e receba um valor depois de barra, fazendo o assim dinamico para receber um dado de uma API e exibir algum dado desejado */}
        </Switch>
      </BrowserRouter>
        </>
    );
  }
}

// PARTE SOBRE PASSAGEM DE PROPS PARA O ROUTE

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
  render() {
    const { greetingsMessage = 'Olá'} = this.props;
    const { id } = this.props.match.params; // para tornar dinamica a url, no objeto props.match.params acessado pelo render que utiliza o component com props
    return (
      <div>
        <h2>Users</h2>
        {/* adicionamos o id para que se torme dinamico na mensagem exibida  */}
        <p> { `${greetingsMessage} user ${id}`}, My awesome Users component </p> 
        <Link to="/">voltar para o home</Link>
      </div>
    );
  }
};

export default Users;


// TIPOS DE REDIRECIONAMENTO


//REDIRECT

// Uso bastante comum de Redirect é autenticação: a pessoa só pode acessar informações sensíveis (tipo conta bancária) de uma aplicação se ela já estiver autenticada; caso contrário, ela é redirecionada para uma página de login.

<Switch>
<Route path="/dashboard" component={Dashboard} />
<Route exact path="/">
  {logado ? <Redirect to="/dashboard" /> : <Login />}
</Route>
</Switch>


// history.push()

// Passando o parâmetro /welcome ao history.push() fará com que, ao ser clicado, o botão direcione a pessoa usuária para a página welcome.

// essa função recebe outro parametro: o this.state para derecionar junta da pagina o state.
// utilizamos a chave location.state do history. Se essa chave possuir algum valor, ele irá renderizar location.state.userName, que é um valor presente no estado do componente Home.

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: 'Tryber',
      role: 'Admin',
    };
  }

  render() {
    const { history } = this.props;
    return (
      <>
        <h1>Home Page</h1>
        <button
          type="button"
          onClick={ () => history.push('/welcome', this.state) }
        >
          Acesse a página de Boas-Vindas
        </button>
      </>
    );
  }
}

//Outra chave bastante utilizada do history é location.pathname. Essa chave irá retornar a rota que a pessoa usuária está acessando. 


//  ENTENDENDO OS FLUXOS DOS COMPONENT REACT


