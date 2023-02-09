// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_OPERATION, ADD_EXPENSES, DELETE_EXPENSE } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  exchangeRates: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_OPERATION:
    return {
      ...state,
      currencies: action.currencies,
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: action.expenses,
      exchangeRates: action.currencies,
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: action.remove,
    };
  default:
    return state;
  }
};

export default wallet;
