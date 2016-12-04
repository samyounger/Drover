import React, { Component } from 'react';
import {
  ListView,
  View,
  Image,
  TouchableHighlight,
  Text
} from 'react-native';

import Style from '../StyleSheet';

var _navigate;

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
    _navigate = this.props.navigate;
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([
        'Report an accident',
        'Breakdown information',
        'Contact information'
      ])
    });
  }

  _renderMenuItem(item) {
    return(
      <View style={Style.menuLineContainer}>

        <TouchableHighlight
          underlayColor='#99d9f4'
          onPress={()=> this._onItemSelect(item)}>
          <Text style={Style.menuLine}>{item}</Text>
        </TouchableHighlight>

      </View>
    );
  }

  _onItemSelect(item) {
    _navigate(item);
  }

  render() {
    return (
      <View style={Style.menu}>
        <Image
          source={require("../Resources/logo.png")}
          style={Style.menuLogo}
          />
        <ListView
          style={Style.menu}
          dataSource={this.state.dataSource}
          renderRow={(item) =>
            this._renderMenuItem(item)}
            />
        </View>
      );
    }


  }

  module.exports = Menu;
