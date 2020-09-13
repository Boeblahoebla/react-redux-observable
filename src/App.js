import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import configureStore from './redux/store';

import CounterContainerContainer from './components/counterContainer';

let store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <p className="App-intro">
          Redux-Observable middleware Demo

        </p>
        <p className="App-header">
          {"Actions  ><  Reducers  ><  Epics"}
        </p>
        <p>
          Click button below & check redux devtools
        </p>
        <CounterContainerContainer/>
      </div>
    </Provider>
  );
}

export default App;
