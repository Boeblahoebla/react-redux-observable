import React from 'react';
import {connect} from 'react-redux';
import {updateCounter} from '../redux/actions/counterActions';
import counterComponent from './counterComponent';

//The value that the counter will increase/decrease per click
const counterStep = 1

// Map the Redux state to props
const mapStateToProps = (state) => {
  return {
    counter: state.counterReducer
  }
}

// Map the Redux actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(updateCounter(counterStep))
    },
    decrement: () => {
      dispatch(updateCounter(-counterStep))
    }
  }
}

// Connect component with the state & actions as props
export default connect(mapStateToProps, mapDispatchToProps)(counterComponent)
