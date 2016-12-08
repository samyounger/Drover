import React, { Component } from 'react';
import {
  View,
  Text,
  Switch,
  TouchableHighlight
} from 'react-native';

import Logo from './logo';
import LoginForm from './loginForm';
import Style from '../StyleSheet';

const onButtonPress = () => {
  console.log('Button pressed');
};

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      trueSwitchIsOn: true,
      falseSwitchIsOn: false,
      fault: 'No'
    };
  }

  render() {
    const { container } = styles;

    return (
        <View style={container}>
          <Logo />
          <LoginForm />
          <Text style={Style.slider}>
            <Switch
              onValueChange={(value) => this.setState({ trueSwitchIsOn: value })}
              value={this.state.trueSwitchIsOn}
              style={Style.sliderLabel}
            />
            Remember me
          </Text>


          <TouchableHighlight
            style={Style.button}
            underlayColor='#99d9f4'
            onPress={onButtonPress()}
          >
            <Text style={Style.buttonText}>Log in</Text>
          </TouchableHighlight>

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
    // backgroundColor: "yellow",
    backgroundColor: '#f7f7f7'
  }
};

module.exports = Home;
