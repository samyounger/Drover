import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import CookieManager from 'react-native-cookies';

import { Logo, SlideButton, Button, Input } from './common';

class Home extends Component {

  state = {
    rememberUserName: null,
    username: '',
    password: ''
  };

  userLogin() {
    CookieManager.clearAll((err, res) => {
      console.log('cookies cleared!');
      console.log(err);
      console.log(res);
    });


    if (this.state.username) {
      fetch('https://drover-test.herokuapp.com/partners/sign_in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          time: 1480606321351
        },
        body: JSON.stringify({
          'partner[email]': this.state.username,
          'partner[password]': this.state.password
        })
      })
      .then(responseData => {
        console.log(responseData);


        // list cookies (IOS ONLY)
        CookieManager.getAll((err, res) => {
          console.log('cookies!');
          console.log(err);
          console.log(res);

          fetch('https://drover-test.herokuapp.com/api/v1/breakdown_cover', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Cookie: '_drover_session=enZxa0ZMd28vQ3pDVGZhZ0RTQW1ISm1CVEdUckFqaUNHdDBrM1NLMFRxbEZHWGNwZnBScUkySXVVK0VMaVpMbm9XeHJDZUxQV1dLNE9wR0R0TnRKTmc5VXpXQjI1TGR1VG01TU1ZZUVzSkx3cEY1eDdJSS9ZNDJFRWlMbXFPZGVRVDVsTEJPMk1ScnRwdGFtM3ZwU3RraFpOVi82SkNMZ3A4SWJUbU5wZmhJZTdqb3Qzc0VoREN2QlRONnpvUkV6Q25YK0lTcXJ4ZThrSUV0K0doMlo5NHRMbGl4V0gvWlR3WmgzZEVHdG90NTFBUVhkbUNERlNwZDZPVHA0MFQ1Q1FzMUdWMXNlcVVTeE9XVHloU0g3M25QS1dCOGRKRFB5NUtPUjRpckxYaTdoRW9oaWhhdThJbnhBRUtiRFk3REdKb3lCa3didFJZaWZINksweUpPbHJCSDFldzBENmZKMHNkaHVxSk9sYXlqdVFNV3MyMC81eSt5eUQ2UnFiVmd4SjlPbVkzWHA3a3ZjWWp6aDRZcVp5LzAyRjI3R3lkcG1QWnJ5bkFyWFVhT3k0ZVdGZGFMUVZabi9RbjdFNlo3ZC0tanJlZVEwVUxWOVVKbGVmUTBxbzM3dz09--8582a13b5d09e5a0a2b3068b6b473f0af53ad89b; path=/; domain=.drover-test.herokuapp.com; HttpOnly; Expires=Tue Jan 19 2038 03:14:07 GMT+0000 (GMT);'
            }
          }).then(data => {
            console.log(data);
          }).catch(data => {
            console.log(data);
          });
        });

        // CookieManager.setFromResponse(urlLink, cookieSession, (res) => {
        //   // `res` will be true or false depending on success.
        //   console.log('Set cookie', res);
        // });
      })
      .catch(response => response)
      .done();
    }
  }

  render() {
    const { container } = styles;

    return (
        <View style={container}>
          <Logo />

          <Input
            placeholder='example@email.com'
            label='E-mail'
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
          />
          <Input
            placeholder='password'
            label='Password'
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />

          <SlideButton
            label='Remember me'
            rememberUserName={this.state.rememberUserName}
          />

          <Button
            onPress={this.userLogin.bind(this)}
          />

          <Text>Forgot your password?</Text>
        </View>
    );
  }
}

const styles = {
  container: {
    marginTop: 65,
    padding: 10,
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#f7f7f7'
  }
};

module.exports = Home;
