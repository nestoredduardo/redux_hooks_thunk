import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import { Provider } from 'react-redux';

import generateStore from './redux/store';

const store = generateStore();

const WithRouter = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

const WithStore = () => {
  return (
    <Provider store={store}>
      <WithRouter />
    </Provider>
  );
};

ReactDOM.render(<WithStore />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
