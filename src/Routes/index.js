// react library
import React, { Fragment } from 'react';

// third-party libraries
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

// components
import Home from '../Containers/Home';

/**
 * Renders Routes layout and component
 *
 * @returns {JSX} JSX
 */
const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;