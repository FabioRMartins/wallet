import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currenciesActions } from '../actions';
import './ExpensesStyle/Expenses.css';

class ExpensesDetails extends React.Component {
  render() {
    const {
      currencies,
    } = this.props;
    return (
      <form className="expenses">
        <label htmlFor="value-input">
          Valor
          <input data-testid="value-input" />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input data-testid="description-input" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select
            id="moeda"
          >
            { currencies.map((moeda) => (
              <option
                key={ moeda }
                value={ moeda }
              >
                { moeda }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method-input">
          Método de pagamento
          <select data-testid="method-input">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Categoria
          <select data-testid="tag-input">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

ExpensesDetails.propTypes = {
  currencies: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addOperation: () => dispatch(currenciesActions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesDetails);
