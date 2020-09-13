/*
 * action types
 */

export const UPDATE_COUNTER_REQUEST = 'UPDATE_COUNTER_REQUEST'
export const UPDATE_COMPLETE = 'UPDATE_COMPLETE'

/*
 * action creators
 */

export function updateCounter(counterStep) {
  console.log('counter actions :: in updateCounter action');

  return {
    type: UPDATE_COUNTER_REQUEST,
    payload: counterStep
  }
}
