import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';
import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/rootReducer';

const store = legacy_createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
