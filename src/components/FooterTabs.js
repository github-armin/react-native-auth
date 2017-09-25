import React, { Component } from 'react';
import {
  Footer,
  FooterTab,
  Button,
  Text
} from 'native-base';

class FooterTabs extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button active>
            <Text>Login</Text>
          </Button>
          <Button>
            <Text>Register</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default FooterTabs;
