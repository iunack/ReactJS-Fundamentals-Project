import React from 'react';
import ReactDOM from 'react-dom';
import NavigationRouter from './components/NavigationRouter';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<NavigationRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
