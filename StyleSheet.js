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
    backgroundColor: 'white',
    alignItems: "center"
  },
  menu: {
    paddingTop: 50
  },
  menuLogo: {
    left: 80
  },
  menuLineContainer: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    paddingBottom: 20,
  },
  menuLine: {
    fontSize: 25,
    fontWeight: "300",
    textAlign: "center"
  },
  toolbar: {
    backgroundColor: '#333',
    height: 56,
  },
  main: {
    marginTop: 65,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    // backgroundColor: "yellow",
    backgroundColor: "#f7f7f7"
  },
  logo: {
    alignItems: "center",
    // width: 150
  },
  formLabel: {
    alignSelf: "stretch",
    textAlign: "left",
    marginLeft: 10,
  },
  inputBox: {
    height: 50,
    margin: 10,
    // backgroundColor: "red",
    borderColor: "lightgrey",
    borderWidth: 1,
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
  button: {
    height: 36,
    // flex: 1,
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
});

module.exports = styles;
