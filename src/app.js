import React, { Component } from 'react';
import { Image } from 'react-native';
import firebase from 'firebase';
import { Container, View } from 'native-base';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import { TabNavigator } from 'react-navigation';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBWvLnlx1iND-y7FSEtir5AomgBRutSBkI',
      authDomain: 'react-native-auth-fee09.firebaseapp.com',
      databaseURL: 'https://react-native-auth-fee09.firebaseio.com',
      projectId: 'react-native-auth-fee09',
      storageBucket: 'react-native-auth-fee09.appspot.com',
      messagingSenderId: '305809531966'
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container navigation={ navigation }>
        <View style={{alignItems: 'flex-end', flex: 1, flexDirection: 'row'}}>
          <LoginScreen />
        </View>
      </Container>
    );
  }
}

const AppNavigator = TabNavigator({
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
});

export default AppNavigator;
