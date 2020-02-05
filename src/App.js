import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import ListContainer from './pages/ListContainer'
import Register from './pages/Register'
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/list' component={ListContainer} />
        <Route path='/register' component={Register} />
      </Switch>
    </>
  );
}

export default App;
