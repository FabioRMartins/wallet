import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './WalletStyle/Wallet.css';

class Wallet extends React.Component {
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
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
