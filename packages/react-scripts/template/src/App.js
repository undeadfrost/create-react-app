import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About'

function App() {
  return (
    <Switch>
      <Route path={'/'} exact component={Home}/>
      <Route path={'/about'} component={About}/>
    </Switch>
  );
}

export default App;
