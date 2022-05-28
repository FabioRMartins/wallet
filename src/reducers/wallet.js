// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_OPERATION, ADD_EXPENSES, TOTAL_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  expensesTotal: 0,
};

const totalCount = (state, data) => {
  const calc = parseFloat(state.totalExpenses)
   + parseFloat(data.exchangeRates[data.currency].ask) * parseFloat(data.value);
  const aux1 = 10;
  const aux2 = aux1 ** 2;
  return Math.floor(calc * aux2) / aux2;
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_OPERATION:
    return {
      ...state, currencies: action.currencies,
    };
  case ADD_EXPENSES:
    return {
      ...state, expenses: action.expenses,
    };
  case TOTAL_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
      expensesTotal: totalCount(state, action.expense),
    };
  default:
    return state;
  }
};

export default wallet;
