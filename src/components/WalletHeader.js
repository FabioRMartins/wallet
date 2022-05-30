import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletHeader extends React.Component {
  calculateExpense = (expense) => {
    let total = 0;
    expense.forEach((index) => {
      const moeda = index.exchangeRates[index.currency].ask;
      console.log(moeda);
      const cambio = index.value * moeda;
      const result = cambio + total;
      total = result;
    });
    return total;
  }

  render() {
    const {
      email,
      expense,
    } = this.props;
    return (
      <div>
        <header className="header">
          <h4 data-testid="email-field">
            {`User:  ${email}`}
          </h4>
          <h4 data-testid="total-field">
            {this.calculateExpense(expense).toFixed(2)}
          </h4>
          <h4 data-testid="header-currency-field">
            BRL
          </h4>
        </header>
      </div>
    );
  }
}

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
  expense: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expense: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletHeader);
