import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom'
// Import components
import { Recipe } from './components/recipe'
// Import styles
import './styles/styles.css'
import Navbar from './components/navbar';

ReactDOM.render(

  <App />,
  document.getElementById('root')
);

const rootElement = document.getElementById('root')
// Render recipe component in the DOM
// render(<Navbar />, rootElement)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
