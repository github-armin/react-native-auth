import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, View } from 'native-base';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import { TabNavigator } from 'react-navigation';

class App extends Component {
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
}, {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default AppNavigator;
