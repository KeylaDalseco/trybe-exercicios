import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import ValidEmail from './ValidEmail';

test('Verificando se existe o campo Email.', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

test('Verificando se existe um botão', () => { // Selecionando apenas um botão se apenas 1
  render(<App />);
//   1 - Acessar os elementos da tela
  const btn = screen.getByTestId("id-send"); 
// 2 - fazer os testes
  
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveProperty("type", "button")
  expect(btn).toHaveValue('Enviar');
});

test('Verificando se existem dois botões', () => { // 
  render(<App />);
  const buttons = screen.getAllByRole('button'); // quando quiser apenas 1, use o datatesteid
  expect(buttons).toHaveLength(2);
});

test('Verificando se o botão e o campo email estão funcionando.', async () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com';
  // acesso os elementos
  const textEmail = screen.getByTestId('id-email-user');
  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');

  // interajo com os elementos
  userEvent.type(inputEmail, EMAIL_USER);
  
  // faço os testes
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');
  userEvent.click(btnSend);
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isInvalid = screen.getByText('Email Inválido');
  expect(isInvalid).toBeInTheDocument();
});

test('Testando um componente, caso o email não tenha sido enviado.', () => {
  const EMAIL_USER = '';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValidText = screen.queryByTestId('id-is-email-valid');
  expect(isValidText).not.toBeInTheDocument();
});

test('Testando se o componente possui texto verde ao ser digitado um e-mail válido.', () => {
  const EMAIL_USER = 'email@email.com';

  render(<ValidEmail email={EMAIL_USER} />);
  const isValidText = screen.getByTestId('id-is-email-valid');
  expect(isValidText).toHaveAttribute('class', 'green-text');
});

test('Testando se o componente possui texto vermelho ao ser digitado um e-mail inválido.', () => {
  const EMAIL_USER = 'emailerrado';

  render(<ValidEmail email={EMAIL_USER} />);
  const isValidText = screen.getByTestId('id-is-email-valid');
  expect(isValidText).toHaveAttribute('class', 'red-text');
});

// ==================================================================================
// OUTROS TESTES E MODELO DE COMO UTILIZA - LO,


// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);

    const btnTitle = screen.getByText(/Adicionar/i);
    expect(btnTitle).toBeInTheDocument(); // sempre conferir se está sendo exibido
    expect(btnTitle.type).toBe('button');
  });

  test('Ao clicar no botão Adicionar a tarefa deve ser adicionada na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    render(<App />);

    const inputText = screen.getByLabelText(/Tarefa/i); // ou
    const input = screen.getByRole('textbox', { name: /Tarefa/i });
    const btnTitle = screen.getByText(/Adicionar/i);
    expect(btnTitle).toBeInTheDocument();
    expect(btnTitle.type).toBe('button');

    const tarefa = 'Lavar louça';
    userEvent.type(inputText, tarefa);

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(tarefa);
    expect(screen.queryByText(tarefa)).not.toBeInTheDocument();
    userEvent.click(btnTitle);
    // expect(screen.queryByText(tarefa)).toBeInTheDocument();
    expect(input).toHaveValue('');
  });
});

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    render(<App />); // Caso precise de uma nova query adicione no object destructuring
    const button = screen.getByRole('button', { name: /Adicionar/i });
    const inputTask = screen.getByLabelText('Tarefa:');
    expect(button).toBeDefined();

    // Temos que testar o input e depois o botão. Pense como o usuário:
    // ele digitou no input todos esse elementos e depoisde clicar os adicionou
    // da erro - > userEvent.type(inputTask, listTodo.forEach((lista) => lista));

    listTodo.forEach((task) => {
      userEvent.type(inputTask, task);
      userEvent.click(button);
    });

    listTodo.forEach((lista) => {
      const listaDeTarefa = screen.getByText(lista);
      expect(listaDeTarefa).toBeInTheDocument();
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    // render(<Item content="Limpar a casa" />);
    expect(screen.getByText('Limpar a casa')).toBeInTheDocument();
  });
});

// ============================== TESTE DO PROJETO DE RTL ==========================

describe('Testando o component About.js', () => {
  test('Teste se a página contém as informações sobre a Pokédex', () => {
    renderWithRouter(<About />);
    screen.getByRole('heading', { name: /about pokédex/i, level: 2 });
    screen.getByText(/this application simulates a pokédex, a digital encyclopedia containing all pokémon/i);
    screen.getByText(/one can filter pokémon by type, and see more details for each one of them/i);
    const img = screen.getByRole('img', { name: /pokédex/i });
    const src = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(img).toHaveAttribute('src', src);
  });
});

describe('Testando o component App.js', () => {
  test('Testando os links de navegação da tela inicial no topo da aplicação', () => {
    renderWithRouter(<App />);
    screen.getByRole('link', { name: /home/i });
    screen.getByRole('link', { name: /about/i });
    screen.getByRole('link', { name: /favorite pokémon/i });
  });
  test('Testando se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home', async () => {
    const { history } = renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /home/i });
    userEvent.click(linkHome);
    await screen.findByRole('heading', { name: /encountered pokémon/i });
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
  test('Testando se a aplicação é redirecionada para About, na URL /about ao clicar no link About', async () => {
    const { history } = renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: /about/i });
    userEvent.click(linkAbout);
    await screen.findByRole('heading', { name: /about pokédex/i });
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });
  test('Testando se a aplicação é redirecionada para Pokémon Favoritados, na URL /favorites ao clicar no Favorite Pokémon', async () => {
    const { history } = renderWithRouter(<App />);
    const linkFavorite = screen.getByRole('link', { name: /Favorite/i });
    userEvent.click(linkFavorite);
    await screen.findByRole('link', { name: /favorite pokémon/i });
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });
  test('Testando se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/pagina/que-nao-existe/'); // deve ser importado da biblioteca react
    });
    screen.getByRole('heading', { name: /page requested not found/i });
  });
});

//====================== TESTE COM IMAGEM CASO O SAPINHO NÃO ESTEJA FUNCIONANDO ======

describe('Testando o component App.js', () => {
  beforeEach(() => renderWithRouter(<App />));

  test('Teste se é renderizado um card com as informações de determinado Pokémon', () => {
    screen.getByText(/pikachu/i);
    expect(screen.getByTestId('pokemon-type')).toHaveTextContent('Electric');
    const peso = screen.getByText(/average weight: 6\.0 kg/i);
    expect(peso).toHaveTextContent('Average weight: 6.0 kg');
    const img = screen.getByRole('img', { name: /pikachu sprite/i });
    const src = 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png';
    expect(img).toHaveAttribute('src', src);
    expect(img).toHaveAttribute('alt', 'Pikachu sprite');
  });
  test('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon', async () => {
    const { history } = renderWithRouter(<App />);
    const linkDetails = await screen.findAllByRole('link', { name: /more details/i });
    userEvent.click(linkDetails[0]);
    act(() => { history.push('/pokemon/25'); });
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemon/25');
    
  });
  test('Teste se existe um ícone de estrela nos Pokémon favoritados', async () => {
    const linkDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkDetails);
    await screen.findByRole('heading', { name: /pikachu details/i });
    await screen.findByText(/pokémon favoritado\?/i);
    const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    const favoriteImg = await screen.findByRole('img', { name: /pikachu is marked as favorite/i });
    expect(favoriteImg).toHaveAttribute('src', '/star-icon.svg');
    expect(favoriteImg).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });
});


//=========================== TESTANDO CHECKBOX E ROTAS ======================

describe('Testando o component FavoritePokemon.js', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemon />);
    screen.getByText(/no favorite pokémon found/i);
  });
  test('Testando se apenas são exibidos os pokémons favoritados', async () => {
    const { history } = renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkDetails);
    await screen.findByRole('heading', { name: /pikachu details/i });
    await screen.findByText(/pokémon favoritado\?/i);
    const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    const favorite = await screen.findByRole('img', { name: /pikachu is marked as favorite/i });
    expect(favorite).toBeInTheDocument();
    const linkFavorit = screen.getByRole('link', { name: /favorite pokémon/i });
    userEvent.click(linkFavorit);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
    screen.getByText(/pikachu/i);
    screen.getByText(/electric/i);
    screen.getByText(/average weight: 6\.0 kg/i);
    await screen.findByRole('img', { name: /pikachu is marked as favorite/i });
  });
});

