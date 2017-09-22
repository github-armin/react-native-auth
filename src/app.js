import React, { Component, View } from 'react';
import firebase from 'firebase';
import {
  Container,
  Header,
  Body,
  Content,
  Text,
  Button,
  Form,
  Item,
  Input,
  Label
} from 'native-base';

const styles = {
  wrapper: {
    padding: 20
  },
};

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
    return (
      <Container>
        <Header>
          <Body>
            <Text>Auth</Text>
          </Body>
        </Header>
        <Content>
          <View style={styles.wrapper}>
            <Form>
              <Item inlineLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item inlineLabel last>
                <Label>Password</Label>
                <Input />
              </Item>
            </Form>
            <Button block info>
              <Text>Login</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default App;
