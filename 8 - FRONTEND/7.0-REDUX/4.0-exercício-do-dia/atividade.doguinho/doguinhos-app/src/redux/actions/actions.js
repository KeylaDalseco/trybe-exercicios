export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCESSFUL = 'REQUEST_SUCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED'

const requestStarted = () => {
  return { type: REQUEST_STARTED }
}

const requestSucessfull = (imageURL) => {
  return { type: REQUEST_SUCESSFUL, payload: imageURL }
}

const requestFailled = (error) => {
  return { type: REQUEST_FAILED, payload: error }
}

export const fetchDogImage = () => {
  return async (dispatch) => {
    dispatch(requestStarted());
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const image = await response.json();
    const result = dispatch(requestSucessfull(image.message));
    return result
  }
}