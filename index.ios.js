'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Navigator,
  Image,
  Switch,
  Button,
  Alert
} from 'react-native';

var Style = require("./StyleSheet");

const onButtonPress = () => {
  Alert.alert("Button has been pressed!");
};

class Drover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      trueSwitchIsOn: true,
      falseSwitchIsOn: false,
    };
  }
  render() {
    return (
      <View style={Style.container}>
        <Text style={Style.navBar}>Log in</Text>
        <View style={Style.main}>
          <Image
          source={require("./Resources/logo.png")}
          style={Style.logo}
          />
          <Text style={Style.formLabel}>E-mail</Text>
          <TextInput style={Style.inputBox} placeholder="example@example.com"/>
          <Text style={Style.formLabel}>Password</Text>
          <TextInput style={Style.inputBox}/>


          <Text style={Style.slider}>
            <Switch onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
            value={this.state.trueSwitchIsOn} style={Style.sliderLabel}/>
            Remember me
          </Text>

          <Button
            onPress={onButtonPress}
            title="Press Me"
            accessibilityLabel="See an informative alert"/>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent("Drover", () => Drover);
