import React from 'react';
import './ExpensesStyle/Expenses.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TabelaGastos extends React.Component {
  upDateCurrency = (currency) => {
    const currencyName = currency.split('/');
    return currencyName;
  }

  cambio = (value, rate) => (value * rate).toFixed(2);

  render() {
    const { expenses } = this.props;
    return (
      <section className="expenses">
        <table>

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

          <tbody className="expenses">
            { expenses.map((index) => (
              <tr key={ index.id }>
                <td>{ index.description }</td>
                <td>{ index.tag }</td>
                <td>{ index.method }</td>
                <td>{ Number(index.value).toFixed(2) }</td>
                <td>
                  {this.upDateCurrency(
                    index.exchangeRates[index.currency].name,
                  )}
                </td>
                <td>
                  { Number(
                    index.exchangeRates[index.currency].ask,
                  ).toFixed(2) }
                </td>
                <td>
                  { Number(
                    index.exchangeRates[index.currency].ask * index.value,
                  ).toFixed(2) }
                </td>
                <td>Real</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

TabelaGastos.propTypes = {
  expenses: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(TabelaGastos);
