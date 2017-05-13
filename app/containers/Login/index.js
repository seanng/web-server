/*
 *
 * Login
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { login } from './actions';
import { selectNextPathName } from './selectors';
import { makeSelectCurrentUser } from '../App/selectors';
import messages from './messages';
import Button from 'components/Button'

export class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  componentWillUpdate (nextProps) {
    const { currentUser } = nextProps;
    const { nextPath, router } = this.props
    if (currentUser && window.sessionStorage.accessToken) {
      return nextPath ? router.push(nextPath) : router.push('/');
    }
  }

  handleLogin = () => {
    this.props.login(this.state)
  }

  setEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  setPassword = (e) => {
    this.setState({ password: e.target.value })
  }

  _container () {
    const { handleLogin, setEmail, setPassword } = this;
    return (
      <Container>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Input type="text" placeholder="Email" onBlur={setEmail} />
        <Input type="password" placeholder="Password" onBlur={setPassword} />
        <Button wide onClick={handleLogin}>
          <FormattedMessage {...messages.login} />
        </Button>
      </Container>
    )
  }
  render() {
    return (
      <Wrapper>
        { this._container() }
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: calc(100vh);
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const H1 = styled.h1`
  color: white;
  margin-bottom: 30px;
`

const Input = styled.input`
  color: white;
  border-bottom: thin solid white;
  padding: 10px 3px;
  margin-bottom: 30px;
  font-size: 16px;
`

const mapStateToProps = createStructuredSelector({
  nextPath: selectNextPathName(),
  currentUser: makeSelectCurrentUser()
});

const mapDispatchToProps = (dispatch) => ({
  login: (info) => dispatch(login(info))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
