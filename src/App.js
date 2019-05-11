import React, { Component } from 'react';
import Main from './components/Main.js'
import { createStore, applyMiddleware,compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index.js'
import thunkMiddleware from 'redux-thunk'

import loggerMiddleware from './middlewares/loggers'

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
const store = createStore(rootReducer,
  compose(applyMiddleware(thunkMiddleware,loggerMiddleware),enhancers)
)
export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Main/>
        </Provider>
    );
  }
}
