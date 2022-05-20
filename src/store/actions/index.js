// Coloque aqui suas action
export const ADD_USER = 'ADD_USER';
export const ADD_OPERATION = 'ADD_OPERATION';

export function addEmail(email) {
  return {
    type: ADD_USER,
    email,
  };
}

export function addOperation(operation) {
  return {
    type: ADD_OPERATION,
    operation,
  };
}
