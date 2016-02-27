import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter'

class CounterContainer extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    //const {counter, counter1} = this.props;
    console.log('this.props ', this.props);

    return (
      <div>
        <Counter  id ="1" {...this.props}/>
        <Counter id ="2" {...this.props}/>
      </div>
    );
  }
}

export default CounterContainer
