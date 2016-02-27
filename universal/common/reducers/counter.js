import { SET_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions'

export default function counter(state = [], action) {
  console.log('-----In reducer----', state);
  switch (action.type) {
    case SET_COUNTER:
      return [...state, action.payload];

    case INCREMENT_COUNTER:
      return state.map( c =>{
        if(c.id !== action.id) return c;
        return c + 1;
      });

    case DECREMENT_COUNTER:
      return state.map( c =>{
        if(c.id !== action.id) return c;
        return c - 1;
      });
    default:
      return state
  }
}
