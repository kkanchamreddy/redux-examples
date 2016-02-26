import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter'

class CounterContainer extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    const {counter, counter1} = this.props;
    console.log('this.props ', this.props);
    console.log('Counter  ', counter);
    console.log('Counter--1', counter1);

    return (

      <div>
        <Counter {...this.props}/>
        <Counter {...this.props}/>
      </div>

    );
  }
}

export default CounterContainer
