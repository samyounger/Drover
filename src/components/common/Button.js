import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

const Button = ({ onPress }) => {
  const { button, buttonText } = styles;

  return (
    <TouchableHighlight
      style={button}
      underlayColor='#99d9f4'
      onPress={onPress}
    >
      <Text style={buttonText}>Log in</Text>
    </TouchableHighlight>
  );
};

const styles = {
  button: {
    height: 36,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  }
};

export { Button };
