export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCESSFUL = 'REQUEST_SUCESSFUL';

const requestStarted = () => {
  return { type: REQUEST_STARTED }
}

const requestSucessfull = (personagem) => {
  return { type: REQUEST_SUCESSFUL, payload: personagem }
}

export const fetchGOT = (name) => {
  return async (dispatch) => {
    dispatch(requestStarted());
    try {
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
      const personagem = await response.json();
      const result = dispatch(requestSucessfull(personagem));
      return result;
    } catch (error) {
      throw new Error('Erro na requisição da API')
    }
  }
}
