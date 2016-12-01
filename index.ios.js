'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Navigator,
  Image
} from 'react-native';

var Style = require("./StyleSheet");

class Drover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
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
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent("Drover", () => Drover);
