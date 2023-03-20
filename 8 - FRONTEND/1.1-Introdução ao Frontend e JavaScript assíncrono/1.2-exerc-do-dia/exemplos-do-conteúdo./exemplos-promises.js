// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

// promise rejeitada retornando um objeto de erro
const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido.`));
    }, 1000);
  });

// o recomendado é usar as 2 juntas (resolve e reject) - com ifs e tals


resolvedPromise()
  .then((response) => {
    console.log(`resolvedPromise: o número gerado é ${response}.`);
  })
  .catch((response) => {
    console.log(`Com a promise resolvida, não irá passar pelo catch`);
  })
  .finally(() => console.log('Fim da execução da primeira promise.'));

rejectedPromise()
  .then((response) => {
    console.log(`Com a promise rejeitada, não irá passar pelo then`);
  })
  .catch((error) => {
    console.log(`rejectedPromise: ${error.message}`);
  })
  .finally(() => console.log('Fim da execução da segunda promise.')); // Caso seja necessário executar algum código após o retorno da promise, independentemente se ela foi resolvida ou rejeitada, podemos usar o método finally. Esse método recebe como parâmetro uma função, que não recebe nenhum argumento.

  // =========================== outro exemplo =========== 

  function obterDados() {
    return new Promise((resolve, reject) => {
      // Faz uma requisição para obter dados de um servidor
      fetch("https://exemplo.com/dados")
        .then((response) => {
          // Verifica se a resposta foi bem-sucedida
          if (!response.ok) {
            throw new Error("Erro ao obter dados");
          }
          // Se a resposta foi bem-sucedida, retorna os dados em formato JSON
          return response.json();
        })
        .then((dados) => {
          // Resolve a Promise com os dados obtidos
          resolve(dados);
        })
        .catch((error) => {
          // Rejeita a Promise com o motivo do erro
          reject(error);
        });
    });
  }

  // =========================== exemplo de fetch com segundo parametro =========== 

  // Requisição GET sem nenhuma configuração - recupera as informações de um produto.
fetch('https://dummyjson.com/products/27')
.then((response) => response.json())
.then((data) => console.log('GET sem headers', data));

// Requisição POST com headers e body - adiciona um produto num carrinho de compras.
fetch('https://dummyjson.com/carts/add', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
  userId: 1,
  products: [
    {
      id: 27,
      quantity: 1,
    },
  ],
}),
})
.then((response) => response.json())
.then((data) => console.log('POST com headers e body', data));



// =========================== exemplo de fetch exemplo real - exercício de fixação =========== 


// Importa CSS
import './style.css';

// Importa funções auxiliares para preencher o DOM --- para exportar a função, use --> export function fillUsersSelect(users) {...
import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

// Pega o elemento users-select
const usersSelect = document.querySelector('#users-select');

// Define a API de pessoas usuárias
const USERS_API = 'https://dummyjson.com/users';

// Faz o fetch na API para pegar os dados das pessoas
fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => {
    const { users } = data;

    // Chama a função auxiliar para preencher os nomes e ids no select users-select
    fillUsersSelect(users);
  });

// Adiciona um eventListener no select para carregar os posts da pessoa selecionada
usersSelect.addEventListener('change', () => {
  // Chama a função auxiliar para limpar as informações da página quando uma nova pessoa for selecionada
  clearPageData();

  // Define a API de posts
  const POSTS_API = `https://dummyjson.com/posts/user/${usersSelect.value}`;

  // Faz o fetch na API de posts baseado no id da pessoa selecionada
  fetch(POSTS_API)
    .then((response) => response.json())
    .then((data) => {
      const { posts } = data;

      // Chama a função auxiliar para preencher o post destacado e os dois posts relacionados
      fillPosts(posts);

      // Pega o primeiro post do array como post destacado
      const [featuredPost] = posts;

      // Define a API de comentários baseado no id do post destacado
      const COMMENTS_API = `https://dummyjson.com/posts/${featuredPost.id}/comments`;

      // Faz um fetch para a API de comentários
      // Repare que é feito o return do fetch (que retorna uma promise),
      // dessa forma é possível encadear mais um `.then` na sequência
      return fetch(COMMENTS_API);
    })
    .then((res) => res.json())
    .then((data) => {
      const { comments } = data;
      fillFeaturedPostComments(comments);
    })
    // Define um catch para tratar qualquer erro que aconteça durante o processo
    .catch((error) => {
      fillErrorMessage('Error retrieving information');
      console.log(error.message);
    });
});
