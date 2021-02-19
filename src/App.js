import './css/App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages'
import Login from './pages/Login';
import { SignUp } from './pages/signup/SignUp';
import { Welcome } from './pages/Welcome';
import { ForgotPassword } from './pages/ForgotPassword';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path = "/" component = {Main}></Route>
        <Route path = "/login" component = {Login}></Route>
        <Route path = "/signup" component = {SignUp}></Route>
        <Route path = "/welcome" component = {Welcome}></Route> 
        <Route path = "/forgotpassword" component = {ForgotPassword}></Route>
      </Switch>      
    </div>   
  );
}

export default App;
