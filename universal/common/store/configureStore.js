import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  console.log('Initial State----', initialState);
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  )
console.log('After creating Store----', store);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
