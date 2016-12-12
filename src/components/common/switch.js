import React from 'react';
import { View, Text, Switch } from 'react-native';

const SlideButton = ({ label, value, onValueChange }) => {
  return (
    <View style={styles.container}>
      <Switch
        value={value}
        onValueChange={onValueChange}
      />
    <Text style={styles.switchLabel}>{label}</Text>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  switchLabel: {
    marginLeft: 10,
    lineHeight: 30
  }
};


export { SlideButton };
