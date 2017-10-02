import React, { Component } from 'react';
import firebase from 'firebase';
import {
  Container, Header, Body, Content, Card, Text, Button, Form, Item, Input, Label, View, Spinner
} from 'native-base';
import { LoginStyles } from '../styles/LoginStyles';
const { wrapper, logo, logoWrapper, loginFormWrapper, emailWrapper, passwordWrapper, loginButtonMargin, errorText, forgotButtonMargin } = LoginStyles;

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loginButtonDisabled: false,
    loginButtonContent: <Text>Login</Text>
  };

  onLoginPress() {
    this.setState({ loginButtonDisabled: true });
    this.setState({ loginButtonContent: <Spinner color='white' /> })
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch((e) => {
              this.setState({ loginButtonContent: <Text>Login</Text> });
              this.setState({ loginButtonDisabled: false });
              this.setState({ error: e['message'] });
            });
  }

  onLoginSuccess() {
    this.setState({ loginButtonContent: <Text>👍🏽</Text> });
  }

  render() {
    return (
      <View style={loginFormWrapper}>
        <Form>
          <Item>
            <Input
              placeholder="Email"
              value={this.state.email}
              onChangeText={email => this.setState({ email, error: '' })}
              autoCorrect={false}
              autoCapitalize={'none'}
            />
          </Item>
          <Item style={{ marginBottom: 15 }}>
            <Input
              placeholder="Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password, error: '' })}
              secureTextEntry
            />
          </Item>
        </Form>
        <Text style={errorText}>{this.state.error}</Text>
        <Button
          block
          info
          style={loginButtonMargin}
          onPress={this.onLoginPress.bind(this)}
          disabled={this.state.loginButtonDisabled}
        >
          {this.state.loginButtonContent}
        </Button>
        <Button style={forgotButtonMargin} transparent>
          <Text>Forgot your password?</Text>
        </Button>
      </View>
    )
  }
}

export default LoginForm;
