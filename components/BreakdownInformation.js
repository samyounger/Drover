import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Animated
} from 'react-native';

import styles from '../StyleSheet';

class BreakdownInformation extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text
            style={{fontWeight: "bold",
            fontSize: 20,
          textAlign: "center"}}>
          What happens in the event of a breakdown?
          </Text>
          <Text style={{
              fontSize: 18,
              textAlign: "center"
            }}>If your vehicle requires a recovery service, please call the following number to have the vehicle moved our premises:</Text>
          <View style={{
              backgroundColor: "white",
              alignSelf: "stretch",
              padding: 10,
              marginTop: 10,
              marginBottom: 10,
              alignItems: "center"
            }}>
            <Text>24 hour AA hotline</Text>
            <Text style={{
                fontSize: 35
              }}>020 3808 7637</Text>
            <Text>Quote policy number:</Text>
            <Text style={{
                fontSize: 35
              }}>KX392J93</Text>
          </View>
          <Text style={{
              fontSize: 18,
              textAlign: "center"
            }}>Have the recovery move the vehicle to: 422 Kingsland Road, London, E8 4AA</Text>
          <View style={{
              padding: 10
            }}>
            <Image source={require("../Resources/map.png")}
          style={{
            width: 330,
            height: 200
          }}/>
          </View>
        </View>
      </View>
    );
  }
}

module.exports = BreakdownInformation;
