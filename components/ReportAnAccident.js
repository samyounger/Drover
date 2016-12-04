import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Animated
} from 'react-native';

import styles from '../StyleSheet';

class ReportAnAccident extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text
            style={{
            fontSize: 20,
          textAlign: "center"}}>
          Enter the details of your accident below and we will send it off to your insurance company
          </Text>
          <Text style={styles.formLabel}>Your booking</Text>
          <TextInput style={styles.inputBox} />

          <Text style={styles.formLabel}>Location of incident</Text>
          <TextInput style={styles.inputBox} />

          <Text style={styles.formLabel}>Date of incident</Text>
          <TextInput style={styles.inputBox} />

          <Text style={styles.formLabel}>Time of incident(24hrs)</Text>
          <TextInput style={styles.inputBox} />

          <Text style={styles.formLabel}>Photos of damage(3 max.)</Text>

          <Text style={styles.formLabel}>Was it your fault?</Text>
          <TextInput style={styles.inputBox} />

          <Text style={styles.formLabel}>Is the car driveable?</Text>
          <TextInput style={styles.inputBox} />

          <Text style={styles.formLabel}>Are there any personal injuries?</Text>
          <TextInput style={styles.inputBox} />

          <Text style={styles.formLabel}>Describe the incident</Text>
          <TextInput style={styles.inputBox} />

          <Text style={styles.formLabel}>Details of third parties involved</Text>
          <TextInput style={styles.inputBox} />

        </View>
      </View>
    );
  }
}

module.exports = ReportAnAccident;