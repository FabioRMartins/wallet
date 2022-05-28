import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currenciesActions } from '../actions';

class WalletHeader extends React.Component {
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

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  addOperation: () => dispatch(currenciesActions()),
});
export default connect(mapStateToProps, mapDispatchToProps)(WalletHeader);
