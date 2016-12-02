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
  ListView
} from 'react-native';

import Drawer from 'react-native-drawer';
import Button from 'react-native-button';

var Style = require("./StyleSheet");

const onButtonPress = () => {
  console.log("Button pressed");
};

class Drover extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      trueSwitchIsOn: true,
      falseSwitchIsOn: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentDidMount() {
    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(['Home', 'AnotherComponent'])
    });
  }

  _renderMenuItem(item) {
      return(
          <Button onPress={()=> this._onItemSelect(item)}>{item}</Button>
      );
  }

  _onItemSelect(item) {
      // Add the code to push a scene in navigation stack, we’ll do it in a few
  }

  render() {
    return (

      <Drawer
          ref={(ref) => this._drawer = ref}
          type="overlay"
          content={<Text>Hello</Text>}
          tapToClose={true}
          openDrawerOffset={0.2}
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          styles={{
                  drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
                  main: {paddingLeft: 3}
          }}
          tweenHandler={(ratio) => ({
                  main: { opacity:(2-ratio)/2 }
          })}>

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
      </Drawer>
    );
  }
}

AppRegistry.registerComponent("Drover", () => Drover);
