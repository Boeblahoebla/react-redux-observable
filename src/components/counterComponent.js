import React from 'react';

const CounterComponent = (props) => {
  return (
    <div>
      <h2>{props.counter}</h2>
      <button type='button' onClick={props.decrement}>-</button>
      <button type='button' onClick={props.increment}>+</button>
    </div>
  )
}
export default CounterComponent;
