import React, { Component } from 'react';
import { NavigatorIOS } from 'react-native';

import Drawer from 'react-native-drawer';
import Menu from './Menu';
import Home from './Home';
import navHelper from '../helpers/navigation';

class Drover extends Component {

  navigate(route) {
    this.navigator.push(navHelper(route));
    this.drawer.close();
  }

  render() {
    return (
      <Drawer
        ref={(ref) => this.drawer = ref}
        type="overlay"
        content={
          <Menu navigate={(route) => { this.navigate(route); }} />
        }
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={{
          drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
          main: { paddingLeft: 3 }
        }}
        tweenHandler={(ratio) => ({
          main: { opacity: (2 - ratio) / 2 }
        })}
      >
        <NavigatorIOS
          ref={(ref) => this.navigator = ref}
          style={{ flex: 1 }}
          initialRoute={{
            title: 'Log in',
            component: Home,
            leftButtonIcon: require('../Resources/menu.png'),
            onLeftButtonPress: () => { this.drawer.open(); }
          }}
        />
      </Drawer>
    );
  }
}

  module.exports = Drover;
