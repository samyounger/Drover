import React, { Component } from 'react';
import { Text, Switch } from 'react-native';

class SlideButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trueSwitchIsOn: true,
      falseSwitchIsOn: false,
    };
  }

  render() {
    const { slider, sliderLabel } = styles;

    return (
      <Text style={slider}>
      <Switch
      onValueChange={(value) => this.setState({ trueSwitchIsOn: value })}
      value={this.state.trueSwitchIsOn}
      style={sliderLabel}
      />
      Remember me
      </Text>
    );
  }
}

const styles = {
  slider: {
    alignSelf: 'stretch',
    lineHeight: 40,
    marginLeft: 20,
    textAlign: 'left',
  },
  sliderLabel: {
    marginLeft: -10
  }
};


export { SlideButton };
