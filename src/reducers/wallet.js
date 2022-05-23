// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_OPERATION } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_OPERATION:
    return {
      ...state, currencies: action.currencies,
    };
  default:
    return state;
  }
};

export default wallet;
