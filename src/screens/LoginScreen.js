import React, { Component } from 'react';
import { Image } from 'react-native';
import firebase from 'firebase';
import {
  Container,
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
  Footer,
  FooterTab,
  Icon
} from 'native-base';
import LoginForm from '../components/LoginForm';
import { LoginStyles } from '../styles/LoginStyles';
const { wrapper logo, logoWrapper, loginFormWrapper, emailWrapper, passwordWrapper, loginButtonMargin, forgotButtonMargin, errorText } = LoginStyles;

class LoginScreen extends Component {
  render() {
    return (
      <Container>
        <View style={{alignItems: 'flex-end', flex: 1, flexDirection: 'row'}}>
          <Container>
            <View style={logoWrapper}>
              <Image
                style={logo}
                source={require('./images/logo.png')}
              />
            </View>
            <View style={{alignItems: 'flex-end', flex: 1, flexDirection: 'row'}}>
              <LoginForm />
            </View>
          </Container>
        </View>
      </Container>
    );
  }
}

export default App;
