import React, { Component } from 'react';
import {
  ListView,
  View,
  Image,
  TouchableHighlight,
  Text
} from 'react-native';

let navigate;

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
    navigate = this.props.navigate;
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

  onItemSelect(item) {
    navigate(item);
  }

  renderMenuItem(item) {
    const { menuLineContainer, menuLine } = styles;

    return (
      <View style={menuLineContainer}>
        <TouchableHighlight
          underlayColor='#99d9f4'
          onPress={() => this.onItemSelect(item)}
        >
          <Text style={menuLine}>{item}</Text>
        </TouchableHighlight>
      </View>
    );
  }

  render() {
    const { menu, menuLogo } = styles;
    return (
      <View style={menu}>
        <Image
          source={require('../Resources/logo.png')}
          style={menuLogo}
        />
        <ListView
          style={menu}
          dataSource={this.state.dataSource}
          renderRow={(item) =>
            this.renderMenuItem(item)}
        />
        </View>
      );
    }
  }

  const styles = {
    menu: {
      paddingTop: 50
    },
    menuLogo: {
      left: 80
    },
    menuLineContainer: {
      borderBottomColor: 'lightgrey',
      borderBottomWidth: 1,
      marginBottom: 20,
      marginRight: 10,
      marginLeft: 10,
      paddingBottom: 20,
    },
    menuLine: {
      fontSize: 25,
      fontWeight: '300',
      textAlign: 'center'
    },
  };

  module.exports = Menu;
