import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
import withRouter from 'redux-cube-with-router';
import { createApp } from 'redux-cube';
// import { withScripts } from 'webcube';
// import googleTagManager from 'webcube/boilerplate/external/googleTagManager';

import { isDynamicUrl } from '../common/utils';
import { App as SampleApp } from '../sample';
import { reducer as renameMeReducer } from './ducks/renameMe';
import Layout from './containers/Layout';

const toSample = () => <Redirect to="/sample" />;

class ReactReduxRouterApp extends Component {
  static childContextTypes = {};

  /* eslint-disable class-methods-use-this */
  getChildContext() {
    return {};
  }

  /* eslint-enable class-methods-use-this */

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact={true} render={toSample} />
          <Route path="/sample" component={SampleApp} />
        </Switch>
      </Layout>
    );
  }
}

export const App =
  // withScripts(
  //   googleTagManager({
  //     googleTagManagerContainerId: '',
  //   }),
  // )(
  createApp(
    withRouter({
      reducers: {
        renameMe: renameMeReducer,
      },
      supportHtml5History: isDynamicUrl(),
      devToolsOptions: { name: 'ReactReduxRouterApp' },
    }),
  )(ReactReduxRouterApp);
// );