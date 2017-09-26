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
  },
  errorText: {
    fontSize: 15,
    color: 'red',
    height: 35
  }
};

class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

  onLoginPress() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
            .catch((e) => {
              this.setState({ error: e})
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
              autoCorrect={false}
              secureTextEntry
            />
          </Item>
        </Form>
        <Text style={styles.errorText}>{this.state.error['message']}</Text>
        <Button
          block
          info
          style={styles.loginButtonMargin}
          onPress={this.onLoginPress.bind(this)}
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
