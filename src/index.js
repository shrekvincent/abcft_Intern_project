import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Test from './js/Test';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<App />,document.getElementById('root'));
// ReactDOM.render(<Test />,document.getElementsByClassName('main-nav')[0]);
registerServiceWorker();
