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
  registerFormWrapper: {
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
  registerButtonMargin: {
    marginTop: 20,
    marginBottom: 110
  },
  forgotButtonMargin: {
    marginBottom: 50
  },
  logo: {
    height: 150,
    width: 150,
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
    height: 50
  }
};

class RegisterForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    registerButtonDisabled: false,
    registerButtonContent: <Text>Register</Text>
  };

  onRegisterPress() {
    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(() => {
              alert('Something went wrong...')
            });
  }

  render() {
    return (
      <View style={styles.registerFormWrapper}>
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
          <Item>
            <Input
              placeholder="Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password, error: '' })}
              secureTextEntry
            />
          </Item>
        </Form>
        <Text style={styles.errorText}>{this.state.error}</Text>
        <Button
          block
          info
          style={styles.registerButtonMargin}
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