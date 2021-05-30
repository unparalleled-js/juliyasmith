import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Jumbotron from 'Components/Jumbotron';
import AboutJules from 'Components/About';
import PatchDay from 'Components/Code';
import Art from 'Components/Art';
import 'Styles/App';

const App = () => (
  <div>
    <Jumbotron title="Juliya Smith" />
    <Switch>
      <Route path="/" exact component={AboutJules} />
      <Route path="/about" component={AboutJules} />
      <Route path="/code" component={PatchDay} />
      <Route path="/art" component={Art} />
    </Switch>
  </div>
);

export default hot(module)(App);
