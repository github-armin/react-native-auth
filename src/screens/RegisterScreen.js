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
import RegisterForm from '../components/RegisterForm';
import { RegisterStyles } from '../styles/RegisterStyles';
const { wrapper logo, logoWrapper, registerFormWrapper, emailWrapper, passwordWrapper, registerButtonMargin, errorText } = RegisterStyles;

class RegisterScreen extends Component {
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
              <RegisterForm />
            </View>
          </Container>
        </View>
      </Container>
    )
  }
}

export default RegisterScreen;
