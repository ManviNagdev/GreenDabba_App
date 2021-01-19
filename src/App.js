import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar'
import { Recipe } from './components/recipe';
import Home from './components/pages/HomePage/Home';
import SignUp from './components/pages/SignUp/SignUp';
import { ViewRecipe } from './components/viewRecipe';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/Recipe' component={Recipe} />
        <Route path='/viewRecipe' component={ViewRecipe} />
      </Switch>

    </Router>
  );
}

export default App;
