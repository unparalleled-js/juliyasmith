import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import ViewController from '@components/viewcontroller';
import AboutJules from '@components/about';
import PatchDay from '@components/code';
import Art from '@components/art';

const App = () => (
  <div>
    <ViewController title="Juliya Smith" />
    <Switch>
      <Route path="/" exact component={AboutJules} />
      <Route path="/about" component={AboutJules} />
      <Route path="/code" component={PatchDay} />
      <Route path="/art" component={Art} />
    </Switch>
  </div>
);

export default hot(module)(App);
