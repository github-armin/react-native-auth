import React, { Component } from 'react';
import { Image } from 'react-native';
import firebase from 'firebase';
import { Container, View } from 'native-base';
import RegisterForm from '../components/RegisterForm';
import { RegisterStyles } from '../styles/RegisterStyles';
const { logo, logoWrapper } = RegisterStyles;

class RegisterScreen extends Component {
  render() {
    return (
      <Container>
        <View style={{alignItems: 'flex-end', flex: 1, flexDirection: 'row'}}>
          <Container>
            <View style={logoWrapper}>
              <Image
                style={logo}
                source={require('../images/logo.png')}
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
