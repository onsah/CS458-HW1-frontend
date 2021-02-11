import './css/App.css';
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './pages'
import Login from './pages/Login';
import { ChoosePlan } from './pages/ChoosePlan';
import { SignUp } from './pages/SignUp';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path = "/" component = {Main}></Route>
        <Route path = "/login" component = {Login}></Route>
        <Route path = "/sign-up" component = {SignUp}></Route>
        <Route path = "/choose-plan" component = {ChoosePlan}></Route>
      </Switch>
    </div>   
  );
}

export default App;
