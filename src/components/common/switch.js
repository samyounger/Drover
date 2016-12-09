import React from 'react';
import { View, Text, Switch } from 'react-native';

const SlideButton = ({ label, rememberUserName }) => {
  function changeSwitch() {
    if (rememberUserName) {
      return { rememberUserName: false };
    }

    return { rememberUserName };
  }

  return (
    <View style={styles.container}>
      <Switch
        onValueChange={changeSwitch}
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
