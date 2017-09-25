import React, { Component } from 'react';
import { Image } from 'react-native';
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
  View
} from 'native-base';

const styles = {
  loginFormWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    alignItems: 'stretch',
    flex: 1,
    flexDirection: 'column'

  },
  emailWrapper: {
    paddingLeft: 0,
    marginLeft: 0,
    marginRight: 20,
    marginTop: 20
  },
  passwordWrapper: {
    paddingLeft: 0,
    marginLeft: 0,
    marginRight: 20,
    marginTop: 20
  },
  loginButtonMargin: {
    marginTop: 20,
    marginBottom: 15
  },
  forgotButtonMargin: {
    marginBottom: 50
  },
  logo: {
    height: 250,
    width: 250,
  },
  logoWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

class LoginForm extends Component {
  state = { email: '', password: '' };

  onButtonPress() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
              alert('Something went wrong...')
            });
  }

  render() {
    return (
      <View style={styles.loginFormWrapper}>
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logo}
          source={require('../images/logo.png')}
        />
      </View>
        <Form>
          <Item>
            <Input
              placeholder="Email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              autoCorrect={false}
              autoCapitalize={'none'}
            />
          </Item>
          <Item>
            <Input
              placeholder="Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              autoCorrect={false}
              secureTextEntry
            />
          </Item>
        </Form>
        <Button
          block
          info
          style={styles.loginButtonMargin}
          onPress={this.onButtonPress.bind(this)}
        >
          <Text>Login</Text>
        </Button>
        <Button style={styles.forgotButtonMargin} transparent>
          <Text>Forgot your password?</Text>
        </Button>
      </View>
    )
  }
}

export default LoginForm;
