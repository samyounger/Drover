'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Navigator,
  NavigatorIOS,
  Image,
  Switch,
  ListView,
  StyleSheet,
  DeviceEventEmitter
} from 'react-native';

import Drawer from 'react-native-drawer';
import Button from 'react-native-button';
import Menu from './Menu';
import Home from './Home';
import navHelper from '../helpers/navigation';

var Style = require("../StyleSheet");

class Drover extends Component {

  _navigate(route) {
      this._navigator.push(navHelper(route));
      this._drawer.close();
  }

  render() {
    return (
      <Drawer
          ref={(ref) => this._drawer = ref}
          type="overlay"
          content={<Menu navigate={(route) => { this._navigate(route);} }/>}
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
          <NavigatorIOS
              ref={(ref) => this._navigator = ref}
              style={{flex: 1}}
              initialRoute={{
                  title: 'Log in',
                  component: Home,
                  leftButtonIcon: require('../Resources/menu.png'),
                  onLeftButtonPress: () => { this._drawer.open();
                  }
              }}/>
      </Drawer>
    );
  }
}

module.exports = Drover;
