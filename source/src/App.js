import './css/App.css';
import React from 'react'
import Main from './pages'
import { Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Switch>
      <Route path = "/" component = {Main}></Route>
    </Switch>
  );
}

export default App;
