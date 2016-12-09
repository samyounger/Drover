import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import Logo from './common/Logo';
import LoginForm from './LoginForm';
import SlideButton from './common/switch';
import Button from './common/Button';

class Home extends Component {
  render() {
    const { container } = styles;

    return (
        <View style={container}>
          <Logo />
          <LoginForm />
          <SlideButton />
          <Button />
          <Text>Forgot your password?</Text>
        </View>
    );
  }
}

const styles = {
  container: {
    marginTop: 65,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#f7f7f7'
  }
};

module.exports = Home;
