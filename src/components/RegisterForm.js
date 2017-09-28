import React, { Component } from 'react';
import firebase from 'firebase';
import {
  Container,
  Header,
  Body,
  Content,
  Card,
  Text,
  Button,
  Form,
  Item,
  Input,
  Label,
  View,
  Spinner
} from 'native-base';
import { RegisterStyles } from '../styles/RegisterStyles';
const { wrapper logo, logoWrapper, registerFormWrapper, emailWrapper, passwordWrapper, registerButtonMargin, errorText } = RegisterStyles;

class RegisterForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    registerButtonDisabled: false,
    registerButtonContent: <Text>Register</Text>
  };

  onRegisterPress() {
    this.setState({ registerButtonDisabled: true });
    this.setState({ registerButtonContent: <Spinner color='white' /> })
    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onRegisterSuccess.bind(this))
            .catch((e) => {
              this.setState({ registerButtonContent: <Text>Register</Text> });
              this.setState({ registerButtonDisabled: false });
              this.setState({ error: e['message'] });
            });
  }

  onRegisterSuccess() {
    this.setState({ registerButtonContent: <Text>👍🏽</Text> });
  }

  render() {
    return (
      <View style={registerFormWrapper}>
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
          <Item>
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
          style={registerButtonMargin}
          onPress={this.onRegisterPress.bind(this)}
          disabled={this.state.registerButtonDisabled}
        >
          {this.state.registerButtonContent}
        </Button>
      </View>
    )
  }
}

export default RegisterForm;
