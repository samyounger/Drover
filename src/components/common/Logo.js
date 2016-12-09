import React from 'react';
import { View, Image } from 'react-native';

const Logo = () => {
  const { containerStyle, logoStyle } = styles;
  return (
    <View style={containerStyle}>
      <Image
        source={require('../../../Resources/logo.png')}
        style={logoStyle}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    alignItems: 'center',

  },
  logoStyle: {
    resizeMode: 'contain',
  }
};

export { Logo };
