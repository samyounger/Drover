import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class LoginForm extends Component {
  render() {
    const { container, formLabel, inputBox } = styles;

    return (
      <View style={container}>
        <Text style={formLabel}>E-mail</Text>

        <TextInput style={inputBox} placeholder='example@example.com' />

        <Text style={formLabel}>Password</Text>

        <TextInput style={inputBox} />
      </View>
    );
  }
}

const styles = {
  container: {
    alignSelf: 'stretch',
  },
  inputBox: {
    height: 50,
    margin: 10,
    borderColor: 'lightgrey',
    borderWidth: 1,
    textAlign: 'center'
  },
  formLabel: {
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: 10,
  }
};

export default LoginForm;
