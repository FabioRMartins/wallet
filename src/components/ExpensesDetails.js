import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currenciesActions, fetchExpenses } from '../actions';
import './ExpensesStyle/Expenses.css';

class ExpensesDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount = () => {
    const { currenciesAction } = this.props;
    currenciesAction();
  }

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleButton = () => {
    const { upDateExpenses } = this.props;
    upDateExpenses(this.state);
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    }));
  }

  render() {
    const {
      currencies,
    } = this.props;
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    return (
      <form className="expenses">
        <label htmlFor="value-input">
          Valor
          <input
            data-testid="value-input"
            onChange={ this.handleInput }
            value={ value }
            name="value"
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input
            data-testid="description-input"
            onChange={ this.handleInput }
            value={ description }
            name="description"
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select
            id="moeda"
            onChange={ this.handleInput }
            value={ currency }
            name="currency"
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
          <select
            data-testid="method-input"
            onChange={ this.handleInput }
            value={ method }
            name="method"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Categoria
          <select
            data-testid="tag-input"
            onChange={ this.handleInput }
            value={ tag }
            name="tag"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
          <button
            onClick={ this.handleButton }
            type="button"
          >
            Adicionar Despesa
          </button>
        </label>
      </form>
    );
  }
}

ExpensesDetails.propTypes = {
  currencies: PropTypes.arrayOf.isRequired,
  currenciesAction: PropTypes.func.isRequired,
  upDateExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});
const mapDispatchToProps = (dispatch) => ({
  currenciesAction: () => dispatch(currenciesActions()),
  upDateExpenses: (expense) => dispatch(fetchExpenses(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesDetails);
