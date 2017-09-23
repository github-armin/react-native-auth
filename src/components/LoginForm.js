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
  View
} from 'native-base';

const styles = {
  loginFormWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20
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
  buttonMargin: {
    marginTop: 20
  }
};

class LoginForm extends Component {
  state = { email: '', password: '' };

  onButtonPress() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password);
  }

  render() {
    return (
      <View style={styles.loginFormWrapper}>
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
          style={styles.buttonMargin}
          onPress={this.onButtonPress.bind(this)}
        >
          <Text>Login</Text>
        </Button>
      </View>
    )
  }
}

export default LoginForm;
