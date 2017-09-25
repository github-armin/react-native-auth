import React, { Component } from 'react';
import { Image } from 'react-native';
import { Header, Body } from 'native-base';

const styles = {
  AppHeader: {

  }
}

class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Body>
          <Image
            style={styles.AppHeader}
            source={require('../images/firebase-logo.png')}
          />
        </Body>
      </Header>
    );
  }
}

export default AppHeader;
