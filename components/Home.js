import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Switch,
  TouchableHighlight
} from "react-native";

import Drawer from 'react-native-drawer';

import Style from '../StyleSheet';

const onButtonPress = () => {
  console.log("Button pressed");
};

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      trueSwitchIsOn: true,
      falseSwitchIsOn: false,
      fault: "No"
    };
  }

  render(){
    return (
      <View style={Style.container}>
        <View style={Style.main}>
          <Image
          source={require("../Resources/logo.png")}
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


          <TouchableHighlight
            style={Style.button}
            underlayColor='#99d9f4'
            onPress={onButtonPress()}>
            <Text style={Style.buttonText}>Log in</Text>
          </TouchableHighlight>

          <Text>Forgot your password?</Text>

        </View>
      </View>
    );
  }
}

module.exports = Home;
