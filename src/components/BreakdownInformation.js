import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

const Statements = {
  questionOne: 'What happens in the event of a breakdown?',
  oneAnswer: 'If your vehicle requires a recovery service, please call the following number to have the vehicle moved our premises:',
  questionTwo: '24 hour AA hotline',
  twoAnswer: '020 3808 7637',
  questionThree: 'Quote policy number:',
  threeAnswer: 'KX392J93',
  questionFour: 'Have the recovery move the vehicle to:',
  fourAnswer: '422 Kingsland Road, London, E8 4AA'
};

class BreakdownInformation extends Component {
  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <Text
          style={{ fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'center' }}
        >
        {Statements.questionOne}
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center' }}
        >{Statements.oneAnswer}</Text>
        <View
          style={{
            backgroundColor: 'white',
            alignSelf: 'stretch',
            padding: 10,
            marginTop: 10,
            marginBottom: 10,
            alignItems: 'center' }}
        >
          <Text>{Statements.questionTwo}</Text>
          <Text
            style={{
              fontSize: 35
            }}
          >{Statements.twoAnswer}</Text>
          <Text>{Statements.questionThree}</Text>
          <Text
            style={{
              fontSize: 35
            }}
          >{Statements.threeAnswer}</Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center'
          }}
        >{Statements.questionFour} {Statements.fourAnswer}</Text>
        <Image
          source={require('../../Resources/map.png')}
          style={{
            width: 330,
            height: 200
          }}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    marginTop: 65,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#f7f7f7'
  }
};

module.exports = BreakdownInformation;
