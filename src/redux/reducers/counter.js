import {UPDATE_COUNTER_REQUEST, UPDATE_COMPLETE} from '../actions/counterActions'

const initialState = 0;

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COUNTER_REQUEST:
      console.log('counter reducer :: UPDATE_COUNTER_REQUEST');

      return state;

    case UPDATE_COMPLETE:
      console.log('counter reducer :: UPDATE_COUNTER_COMPLETED');

      return state + action.payload;

    default:
      return state;
  }
};
