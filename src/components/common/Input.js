import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ placeholder, label, secureTextEntry, value, onChangeText }) => {
  const { inputContainer, labelStyle, inputStyle } = styles;
  return (
    <View style={inputContainer}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoCorrect={false}
        style={inputStyle}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 2,
    marginTop: 10,
    marginBottom: 10
  },
  labelStyle: {
    height: 50,
    paddingLeft: 10,
    flex: 1,
    lineHeight: 50
  },
  inputStyle: {
    height: 50,
    flex: 2,
  }
};

export { Input };
