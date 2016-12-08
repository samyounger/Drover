import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

function onButtonPress() {
  console.log('Button pressed');
}

const Button = () => {
  const { button, buttonText } = styles;

  return (
    <TouchableHighlight
      style={button}
      underlayColor='#99d9f4'
      onPress={onButtonPress}
    >
      <Text style={buttonText}>Log in</Text>
    </TouchableHighlight>
  );
};

const styles = {
  button: {
    height: 36,
    margin: 10,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  }
};

export default Button;
