import Swal from 'sweetalert2';

const botaoPesquisar = document.querySelector('.pesquisar');
const ratesDiv = document.querySelector('.ratesDiv');
const tituloDiv = document.querySelector('.tituloDiv');

const inserirCoins = (coin) => {
  const coinArray = Object.entries(coin);
  ratesDiv.innerHTML = '';
  coinArray.forEach((ele) => {
    const coinName = ele[0];
    const coinValor = ele[1];
    const li = document.createElement('li');
    li.innerHTML = `${coinName} - ${coinValor}`;
    ratesDiv.append(li);
  });
};

function conversor() {
  const moeda = document.querySelector('.input').value;
  tituloDiv.innerHTML = '';
  if (!moeda) {
    const zeroInput = () => {
      Swal.fire({
        title: 'Ops ...',
        text: 'Você precisa passar uma moeda',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      tituloDiv.innerHTML = '';
      ratesDiv.innerHTML = '';
    };
    return zeroInput;
  }
  fetch(`https://api.exchangerate.host/latest?base=${moeda}`)
    .then((response) => response.json())
    .then((data) => {
      if (Object.keys(data.rates).includes(moeda.toUpperCase())) {
        tituloDiv.innerHTML = `Valores referentes a 1 ${moeda}`;
        return inserirCoins(data.rates);
      }
      throw new Error('Moeda não existente');
    })
    .catch((error) => {
      Swal.fire({
        title: 'Ops ...',
        text: `${error.message}`,
        icon: 'error',
        confirmButtonText: 'OK',
      });
      tituloDiv.innerHTML = '';
      ratesDiv.innerHTML = '';
    });
}

botaoPesquisar.addEventListener('click', conversor);