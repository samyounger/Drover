import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import SimplePicker from 'react-native-simple-picker';
import styles from '../StyleSheet';

const options = ['Yes', 'No'];
const labels = ['Banana', 'Apple', 'Pear'];

class ReportAnAccident extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fault: "Click here to select",
      carDriveable: "Click here to select",
      injuries: "Click here to select"
    };
  }

  render(){
    return (
      <ScrollView style={{
          marginTop: -65,
        }}>
        <View style={styles.main}>

          <Text style={styles.paragraph}>Current Option: {this.state.selectedOption}</Text>

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
          <Text
            style={{
              flex: 1,
              alignSelf: "stretch",
              margin: 10,
              height: 50,
              borderColor: "lightgrey",
              borderWidth: 1,
              textAlign: "center",
              lineHeight: 50
            }}
            onPress={() => {
              this.refs.picker1.show();
            }}>{this.state.fault}</Text>

            <SimplePicker
              ref={'picker1'}
              options={options}
              onSubmit={(option) => {
                this.setState({
                  fault: option,
                });
              }}
            />

          <Text style={styles.formLabel}>Is the car driveable?</Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                margin: 10,
                height: 50,
                borderColor: "lightgrey",
                borderWidth: 1,
                textAlign: "center",
                lineHeight: 50
              }}
              onPress={() => {
                this.refs.picker2.show();
              }}>{this.state.carDriveable}</Text>

              <SimplePicker
                ref={'picker2'}
                options={options}
                onSubmit={(option) => {
                  this.setState({
                    carDriveable: option,
                  });
                }}
              />

          <Text style={styles.formLabel}>Are there any personal injuries?</Text>
            <Text
              style={{
                flex: 1,
                alignSelf: "stretch",
                margin: 10,
                height: 50,
                borderColor: "lightgrey",
                borderWidth: 1,
                textAlign: "center",
                lineHeight: 50
              }}
              onPress={() => {
                this.refs.picker3.show();
              }}>{this.state.injuries}</Text>

              <SimplePicker
                ref={'picker3'}
                options={options}
                onSubmit={(option) => {
                  this.setState({
                    injuries: option,
                  });
                }}
              />

          <Text style={styles.formLabel}>Describe the incident</Text>
          <TextInput style={styles.inputBox} />

          <Text style={styles.formLabel}>Details of third parties involved</Text>
          <TextInput style={styles.inputBox} />

          <TouchableHighlight
            style={styles.button}
            underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Report Accident</Text>
          </TouchableHighlight>

        </View>
      </ScrollView>
    );
  }
}

module.exports = ReportAnAccident;
