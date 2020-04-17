import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.sass';
import QuoteApp from './quote';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <QuoteApp/>,
  document.getElementById('root')
);

serviceWorker.unregister();
