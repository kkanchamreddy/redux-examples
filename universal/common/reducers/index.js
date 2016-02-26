import { combineReducers } from 'redux'
import counter from './counter'

const rootReducer = combineReducers({
  counter,
  counter1: counter
})

export default rootReducer
