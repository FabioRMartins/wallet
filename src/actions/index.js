// Coloque aqui suas action
export const ADD_USER = 'ADD_USER';
export const ADD_OPERATION = 'ADD_OPERATION';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

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

export function addExpenses(expenses) {
  return {
    type: ADD_EXPENSES,
    expenses,
  };
}

export function removeBtn(remove) {
  return {
    type: DELETE_EXPENSE,
    remove,
  };
}

export const currenciesActions = () => async (dispatch) => {
  try {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const URL_FETCH = await fetch(URL);
    const DATA = await URL_FETCH.json();
    const currencies = Object.keys(DATA);
    const getCurrencies = currencies.filter((item) => item !== 'USDT');
    dispatch(addOperation(getCurrencies));
  } catch (error) {
    console.log(error);
  }
};

export const fetchExpenses = () => async (dispatch) => {
  try {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const URL_FETCH = await fetch(URL);
    const DATA = await URL_FETCH.json();
    dispatch(addExpenses(DATA));
  } catch (error) {
    console.log(error);
  }
};
