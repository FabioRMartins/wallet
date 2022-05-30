import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import './WalletStyle/Wallet.css';
import { currenciesActions } from '../actions';
import ExpensesDetails from '../components/ExpensesDetails';
import WalletHeader from '../components/WalletHeader';
import TabelaGastos from '../components/TabelaGastos';

class Wallet extends React.Component {
  componentDidMount() {
    const { addOperation } = this.props;
    addOperation();
  }

  render() {
    return (
      <div>
        <WalletHeader />
        <ExpensesDetails />
        <TabelaGastos />
      </div>
    );
  }
}

Wallet.propTypes = {
  addOperation: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addOperation: () => dispatch(currenciesActions()),
});
export default connect(null, mapDispatchToProps)(Wallet);
