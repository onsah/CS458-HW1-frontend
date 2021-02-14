import './css/App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages'
import Login from './pages/Login';
import { SignUp } from './pages/signup/SignUp';
import { ChoosePlan } from './pages/signup/ChoosePlan';
import { ChoosePlan2 } from './pages/signup/ChoosePlan2';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path = "/" component = {Main}></Route>
        <Route path = "/login" component = {Login}></Route>
        <Route path = "/signup/choose-plan-1" component = {ChoosePlan}></Route>
        <Route path = "/signup/choose-plan-2" component = {ChoosePlan2}></Route>
        <Route path = "/signup" component = {SignUp}></Route>
      </Switch>
    </div>   
  );
}

export default App;
