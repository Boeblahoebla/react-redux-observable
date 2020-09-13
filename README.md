## Getting Started

1. Clone this repo

2. To run, go to project folder and run
`$ yarn install`

3. Start application -
`$ yarn start`

4. If the browser does not automatically for any reason visit - http://localhost:3000/

### The Redux Store

The majority of the bootstrap code for the store is located in `/src/redux/store.js`. By default, the [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension)  is enabled so feel free to open that in Google Chrome to see what our Redux store looks like. 

**Note:** You will only benefit from having this enabled if you install the Google Chrome Extension which can be found at the above Redux Devtools hyperlink.

### Redux-Observable Integration

The logic for your reducers (aka Redux logic) will all be contained with `/src/redux/reducers/`. 
The logic for your epics (aka Redux-Observable) will all be contained in `/src/redux/epics`.

#### Understand that every action will go to a Reducer before going into any Epic. 



## Recommended Resources

[Official Facebook Documentation on React](https://reactjs.org/docs/getting-started.html) 

[Official Redux Documentation](https://redux.js.org/)

[Official Redux-Observable Documentation](https://redux-observable.js.org/)

[Official RxJS Documentation](https://rxjs-dev.firebaseapp.com/)
