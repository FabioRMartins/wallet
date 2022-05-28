// Coloque aqui suas action
export const ADD_USER = 'ADD_USER';
export const ADD_OPERATION = 'ADD_OPERATION';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const TOTAL_EXPENSES = 'ADD_EXPENSES';

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

export function addExpenses(expenses, currencies) {
  return {
    type: ADD_EXPENSES,
    expenses,
    currencies,
  };
}

export function totalExpenses(expensesValue) {
  return {
    type: TOTAL_EXPENSES,
    expensesValue,
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

export function fetchExpenses(expenses) {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  return async (dispatch) => {
    const URL_FETCH = await fetch(URL);
    const DATA = await URL_FETCH.json();
    return dispatch(addExpenses(expenses, DATA));
  };
}
