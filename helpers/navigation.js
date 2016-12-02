import React, { Platform } from 'react-native';
import _ from 'underscore';

import BreakdownInformation from '../components/BreakdownInformation';
import Home from '../components/Home';

module.exports = function (scene) {
  var componentMap = {
    'Home': {
      title: 'Home',
      name: 'Home',
      component: Home
    },
    'Breakdown information': {
      title: 'Breakdown information',
      name: 'Breakdown information',
      component: BreakdownInformation
    }
  };
  var component = componentMap[scene];
  var params = Platform.OS === 'ios' ? { passProps: scene.params } : scene.params;
  return _.extend(component, params);
};
