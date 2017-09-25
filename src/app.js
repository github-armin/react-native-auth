import React, { Component } from 'react';
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
import AppHeader from './components/AppHeader';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import FooterTabs from './components/FooterTabs';


const styles = {
  wrapper: {
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
};

class App extends Component {
  state = { selectedTab: 'login' };

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

  renderSelectedTab () {
      switch (this.state.selectedTab) {
        case 'login':
          return (<LoginForm />);
          break;
        case 'register':
          return (<RegisterForm />);
          break;
        default:
      }
    }

  render() {
    return (
      <Container>
        <AppHeader />
        <View style={{alignItems: 'flex-end', flex: 1, flexDirection: 'row'}}>
          {this.renderSelectedTab()}
        </View>
        <FooterTabs />
      </Container>
    );
  }
}

export default App;
