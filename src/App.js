import './css/App.css';
import React from 'react'
import Main from './pages'
import { Switch, Route } from 'react-router-dom'
import Login from './pages/Login';
function App() {
  return (
    <div>
      <Switch>
        <Route exact path = "/" component = {Main}></Route>
        <Route path = "/login" component = {Login}></Route>
      </Switch>
    </div>   
  );
}

export default App;
