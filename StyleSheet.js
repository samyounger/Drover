'use strict';

var React = require('react-native');

var styles = React.StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#ffffff",
  //   alignItems: "center"
  // }
  container: {
      flex: 1,
      backgroundColor: 'white'
  },
  toolbar: {
      backgroundColor: '#333',
      height: 56,
  },
  navBar: {
    alignSelf: "stretch",
    backgroundColor: "#ffffff",
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    height: 50,
    lineHeight: 50
  },
  main: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "yellow"
    // backgroundColor: "#f7f7f7"
  },
  logo: {
    alignItems: "center",
    width: 150
  },
  formLabel: {
    alignSelf: "stretch",
    textAlign: "left",
    marginLeft: 10,
  },
  inputBox: {
    height: 50,
    margin: 10,
    backgroundColor: "red",
    borderColor: "black",
    borderWidth: 2,
    textAlign: "center"
  },
  slider: {
    alignSelf: "stretch",
    lineHeight: 40,
    marginLeft: 20,
    textAlign: "left",
  },
  sliderLabel: {
    marginLeft: -10
  },
  buttonStyle: {
    fontSize: 20,
    color: 'black',
  }
});

module.exports = styles;
