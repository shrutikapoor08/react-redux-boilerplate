import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends React.Component {
  render() {
    return <div> Hello World </div>;
  }
}

function mapStateToProps(state) {
  return {
    fuelSavings: state.fuelSavings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
