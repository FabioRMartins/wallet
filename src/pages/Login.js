import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmail } from '../actions/index';
import './LoginStyle/Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  emailTest = (email) => {
    const verify = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return verify.test(email);
  }

    onChange = ({ target }) => {
      const { name, value } = target;
      this.setState({ [name]: value }, () => {
        const { email, password } = this.state;
        const minLength = 6;
        if (this.emailTest(email) && password.length >= minLength) {
          this.setState({ disabled: false });
        } else {
          this.setState({ disabled: true });
        }
      });
    }

    handleButton = () => {
      const { email } = this.state;
      const { history, dispatch } = this.props;
      dispatch(addEmail(email));
      history.push('/carteira');
    };

    render() {
      const {
        email,
        password,
        disabled,
      } = this.state;

      return (

        <div className="loginPage">
          <h1 className="title">TyrbeWallet</h1>
          <form className="loginForm">
            <label htmlFor="email">
              Email:
              <input
                type="email"
                data-testid="email-input"
                placeholder="Email"
                value={ email }
                name="email"
                className="inputEmail"
                onChange={ this.onChange }
              />
            </label>
            <label htmlFor="password">
              Senha:
              <input
                type="password"
                data-testid="password-input"
                placeholder="Senha"
                value={ password }
                name="password"
                className="inputSenha"
                onChange={ this.onChange }
              />
            </label>
            <br />
            <button
              type="button"
              className="button"
              disabled={ disabled }
              onClick={ this.handleButton }
            >
              Entrar
            </button>
          </form>
        </div>
      );
    }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }),
};

Login.defaultProps = { history: PropTypes.push };

export default connect()(Login);
