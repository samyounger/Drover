import { Platform } from 'react-native';

import _ from 'underscore';

import BreakdownInformation from '../components/BreakdownInformation';
import ReportAnAccident from '../components/ReportAnAccident';
import Login from '../components/Login';

module.exports = function (scene) {
  const componentMap = {

    'Login': {
      title: 'Login',
      name: 'Login',
      component: Login
    },
    'Breakdown information': {
      title: 'Breakdown information',
      name: 'Breakdown information',
      component: BreakdownInformation
    },
    'Report an accident': {
      title: 'Report an accident',
      name: 'Report an accident',
      component: ReportAnAccident
    }
  };

  const component = componentMap[scene];
  const params = Platform.OS === 'ios' ? { passProps: scene.params } : scene.params;
  return _.extend(component, params);
};
