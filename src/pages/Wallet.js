import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './WalletStyle/Wallet.css';
import { currenciesActions } from '../actions';
import Expenses from '../components/Expenses';

class Wallet extends React.Component {
  componentDidMount() {
    const { addOperation } = this.props;
    addOperation();
  }

  render() {
    const {
      email,
    } = this.props;
    return (
      <div>
        <header className="header">
          <h4 data-testid="email-field">
            {`User:  ${email}`}
          </h4>
          <h4 data-testid="total-field">
            0
          </h4>
          <h4 data-testid="header-currency-field">
            BRL
          </h4>
        </header>
        <Expenses />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  addOperation: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  addOperation: () => dispatch(currenciesActions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
