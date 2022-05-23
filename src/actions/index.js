// Coloque aqui suas action
export const ADD_USER = 'ADD_USER';
export const ADD_OPERATION = 'ADD_OPERATION';

export function addEmail(email) {
  return {
    type: ADD_USER,
    email,
  };
}

export function addOperation(currencies) {
  return {
    type: ADD_OPERATION,
    currencies,
  };
}

export const currenciesActions = () => async (dispatch) => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  const URL_FETCH = await fetch(URL);
  const DATA = await URL_FETCH.json();
  const currencies = Object.keys(DATA);
  const getCurrencies = currencies.filter((item) => item !== 'USDT');
  dispatch(addOperation(getCurrencies));
};
