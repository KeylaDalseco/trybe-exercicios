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
  userEvent.click(btnSend);
  
  // faço os testes
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');
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