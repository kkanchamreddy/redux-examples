import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import * as CounterActions from '../actions'
import CounterContainer from './CounterContainer'

function mapStateToProps(state) {
  console.log('State Insidee App.js', state);
  return {
    counter: state.counter,
    counter1: state.counter1
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
