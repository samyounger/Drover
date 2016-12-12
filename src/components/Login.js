import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import { Logo, SlideButton, Button, Input } from './common';

function breakdownInfo() {
  fetch('https://drover-test.herokuapp.com/api/v1/breakdown_cover', {
    async: true,
    crossDomain: true,
    method: 'GET',
    headers: {
      'x-partner-email': 'sam@sam.com',
      'x-partner-token': '2caoK9yp2ZYk9aDzERA8'
    }
  })
  // .then((response) => response.JSON())
  .then(response =>
    console.log(response)
  )
  .catch(error => {
    console.log(error);
  });
}

class Home extends Component {

  state = {
    rememberUserName: null,
    username: '',
    password: ''
  };

  signIn() {
    if (this.state.username) {
        fetch('https://drover-test.herokuapp.com/partners/sign_in', {
        async: true,
        crossDomain: true,
        method: 'POST',
        headers: {},
        processData: false,
        contentType: false,
        mimeType: 'multipart/form-data',
        data: {
          'partner[email]': this.state.username,
          'partner[password]': this.state.password
        }
      })
      .then(function () {
        console.log('Logged in');
        console.log(this);
        breakdownInfo();
      });
    }
  }

  render() {
    const { container } = styles;

    return (
        <View style={container}>
          <Logo />

          <Input
            placeholder='example@email.com'
            label='E-mail'
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
          />
          <Input
            placeholder='password'
            label='Password'
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />

          <SlideButton
            label='Remember me'
            value={this.state.rememberUserName}
            onValueChange={(value) => this.setState({ rememberUserName: value })}
          />

          <Button
            onPress={this.signIn.bind(this)}
          />

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
