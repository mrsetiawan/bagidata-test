import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import ListContainer from './pages/ListContainer'
import Register from './pages/Register'
import DetailVideo from './pages/DetailVideo'
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/list' component={ListContainer} />
        <Route path='/list/:id' component={DetailVideo} />
        <Route path='/register' component={Register} />
      </Switch>
    </>
  );
}

export default App;
