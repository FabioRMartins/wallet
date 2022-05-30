import React from 'react';
// import './ExpensesStyle/Expenses.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBtn } from '../actions/index';

class TabelaGastos extends React.Component {
  remove = ({ target }) => {
    const { dispatch, expenses } = this.props;
    const erase = expenses.filter((expense) => Number(target.id) !== expense.id);
    dispatch(removeBtn(erase));
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            const { value, description, tag, method, currency, exchangeRates } = expense;
            const { ask, name } = exchangeRates[currency];
            return (
              <tr key={ expense.id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ Number(value).toFixed(2) }</td>
                <td>{ name }</td>
                <td>{ Number(ask).toFixed(2) }</td>
                <td>{ Number(value * ask).toFixed(2) }</td>
                <td>Real</td>
                <td>
                  <button
                    id={ expense.id }
                    data-testid="delete-btn"
                    type="button"
                    onClick={ this.remove }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>);
  }
}

TabelaGastos.propTypes = {
  expenses: PropTypes.objectOf(PropTypes.string),
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps)(TabelaGastos);
