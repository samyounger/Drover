import React, { Component } from 'react';
import {
  Text,
  TextInput,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import SimplePicker from 'react-native-simple-picker';

const options = ['Yes', 'No'];

class ReportAnAccident extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fault: 'Click here to select',
      carDriveable: 'Click here to select',
      injuries: 'Click here to select'
    };
  }

  render() {
    const { container, formLabel, button, buttonText, inputBox } = styles;
    return (
      <ScrollView style={container} >
          <Text>Current Option: {this.state.selectedOption}</Text>

          <Text
            style={{
            fontSize: 20,
            textAlign: 'center' }}
          >
          Enter the details of your accident below and we will send it off to your insurance company
          </Text>

          <Text style={formLabel}>Your booking</Text>
          <TextInput style={inputBox} />

          <Text style={formLabel}>Location of incident</Text>
          <TextInput style={inputBox} />

          <Text style={formLabel}>Date of incident</Text>
          <TextInput style={inputBox} />

          <Text style={formLabel}>Time of incident(24hrs)</Text>
          <TextInput style={inputBox} />

          <Text style={formLabel}>Photos of damage(3 max.)</Text>

          <Text style={formLabel}>Was it your fault?</Text>
          <Text
            style={{
              flex: 1,
              alignSelf: 'stretch',
              margin: 10,
              height: 50,
              borderColor: 'lightgrey',
              borderWidth: 1,
              textAlign: 'center',
              lineHeight: 50
            }}
            onPress={() => {
              this.refs.picker1.show();
            }}
          >{this.state.fault}</Text>

            <SimplePicker
              ref={'picker1'}
              options={options}
              onSubmit={(option) => {
                this.setState({
                  fault: option,
                });
              }}
            />

          <Text style={formLabel}>Is the car driveable?</Text>
            <Text
              style={{
                flex: 1,
                alignSelf: 'stretch',
                margin: 10,
                height: 50,
                borderColor: 'lightgrey',
                borderWidth: 1,
                textAlign: 'center',
                lineHeight: 50
              }}
              onPress={() => {
                this.refs.picker2.show();
              }}
            >{this.state.carDriveable}</Text>

              <SimplePicker
                ref={'picker2'}
                options={options}
                onSubmit={(option) => {
                  this.setState({
                    carDriveable: option,
                  });
                }}
              />

          <Text style={formLabel}>Are there any personal injuries?</Text>
            <Text
              style={{
                flex: 1,
                alignSelf: 'stretch',
                margin: 10,
                height: 50,
                borderColor: 'lightgrey',
                borderWidth: 1,
                textAlign: 'center',
                lineHeight: 50
              }}
              onPress={() => { this.refs.picker3.show(); }}
            >
              {this.state.injuries}</Text>

              <SimplePicker
                ref={'picker3'}
                options={options}
                onSubmit={(option) => {
                  this.setState({
                    injuries: option,
                  });
                }}
              />

          <Text style={formLabel}>Describe the incident</Text>
          <TextInput style={inputBox} />

          <Text style={formLabel}>Details of third parties involved</Text>
          <TextInput style={inputBox} />

          <TouchableHighlight
            style={button}
            underlayColor='#99d9f4'
          >
            <Text style={buttonText}>Report Accident</Text>
          </TouchableHighlight>

      </ScrollView>
    );
  }
}

const styles = {
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#f7f7f7'
  },
  inputBox: {
    height: 50,
    margin: 10,
    borderColor: 'lightgrey',
    borderWidth: 1,
    textAlign: 'center'
  },
  formLabel: {
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: 10,
  },
  button: {
    height: 36,
    margin: 10,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  }
};

module.exports = ReportAnAccident;
