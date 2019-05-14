import React, { Component } from 'react';
import Main from './components/Main.js'
import { createStore, applyMiddleware,compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index.js'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from './middlewares/loggers'



global.XMLHttpRequest = global.originalXMLHttpRequest
  ? global.originalXMLHttpRequest
  : global.XMLHttpRequest
global.FormData = global.originalFormData
  ? global.originalFormData
  : global.FormData

fetch // Ensure to get the lazy property

if (window.__FETCH_SUPPORT__) {
  // it's RNDebugger only to have
  window.__FETCH_SUPPORT__.blob = false
} else {
  /*
   * Set __FETCH_SUPPORT__ to false is just work for `fetch`.
   * If you're using another way you can just use the native Blob and remove the `else` statement
   */
  global.Blob = global.originalBlob ? global.originalBlob : global.Blob
  global.FileReader = global.originalFileReader
    ? global.originalFileReader
    : global.FileReader
}


let store
if(window.__REDUX_DEVTOOLS_EXTENSION__){
  const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  console.log('111',enhancers)
  store = createStore(rootReducer,
    compose(applyMiddleware(thunkMiddleware,loggerMiddleware),enhancers)
  )
}else{
  store = createStore(rootReducer,
    compose(applyMiddleware(thunkMiddleware,loggerMiddleware))
  )
}

// To see all the requests in the chrome Dev tools in the network tab.


  // fetch logger
// global._fetch = fetch;
// global.fetch = function (uri, options, ...args) {
//   return global._fetch(uri, options, ...args).then((response) => {
//     console.log('Fetch', { request: { uri, options, ...args }, response });
//     return response;
//   });
// };

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Main/>
        </Provider>
    );
  }
}
