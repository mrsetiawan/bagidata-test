import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import ListContainer from './pages/ListContainer'
import Register from './pages/Register'
import DetailVideo from './pages/DetailVideo'
import { VideoContext } from './context'
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <VideoContext>
        <Route exact path='/list' component={ListContainer} />
        <Route path='/list/:id' component={DetailVideo} />
        </VideoContext>
      </Switch>
    </>
  );
}

export default App;
