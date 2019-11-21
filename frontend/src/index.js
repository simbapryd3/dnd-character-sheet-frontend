import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from "./Components/nav";
import * as serviceWorker from './serviceWorker';
import Footer from "./Components/footer";
import UserForm from "./Components/characterform";


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Nav />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
ReactDOM.render(<UserForm />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
