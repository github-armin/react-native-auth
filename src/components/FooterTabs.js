import React, { Component } from 'react';
import {
  Footer,
  FooterTab,
  Button,
  Text
} from 'native-base';

class FooterTabs extends Component {
  state = { selectedTab: 'login' };

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button
            active={this.state.selectedTab==='login'}
            onPress={() => this.setState({selectedTab: 'login'})}
          >
            <Text>Login</Text>
          </Button>
          <Button
            active={this.state.selectedTab==='register'}
            onPress={() => this.setState({selectedTab: 'register'})}
          >
            <Text>Register</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default FooterTabs;
