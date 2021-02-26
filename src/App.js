import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component.jsx';
import SignInAndSingUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/signin' component={SignInAndSingUpPage} />
        </Switch>
     
    </div>
  );
}

export default App;