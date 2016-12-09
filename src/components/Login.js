import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import { Logo, SlideButton, Button, Input } from './common';

class Home extends Component {
  render() {
    const { container } = styles;

    return (
        <View style={container}>
          <Logo />

          <Input
            placeholder='example@email.com'
            label='E-mail'
          />
          <Input
            placeholder='password'
            label='Password'
          />

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
    padding: 10,
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#f7f7f7'
  }
};

module.exports = Home;
