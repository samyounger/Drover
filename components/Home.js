import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Switch
} from "react-native";

import Drawer from 'react-native-drawer';
import Button from 'react-native-button';

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
    };
  }

  render(){
    return (
      <View style={Style.container}>
        <Text style={Style.navBar}>Log in</Text>
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

          <Button
            containerStyle={{
              padding: 10,
              margin: 10,
              height:45,
              alignSelf: "stretch",
              overflow:'hidden',
              borderRadius:4,
              backgroundColor: 'green'}}
            style={Style.buttonStyle}>
            Log in
          </Button>

          <Text>Forgot your password?</Text>
        </View>
      </View>
    );
  }
}

module.exports = Home;
