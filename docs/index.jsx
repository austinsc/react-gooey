/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router';
import {HashRouter} from 'react-router-dom';
import Layout, {Page} from './Layout';
import routes from './routes';
import './css/docs';
import 'font-awesome/scss/font-awesome';
import 'font-awesome-animation/dist/font-awesome-animation.css';



const routeMap = _.flatten(routes.map(x => x.path ? x : x.pages.map(y => y)));
ReactDOM.render(
  <HashRouter>
    <Layout>
      <Switch>
        {/*<Route exact path="/" component={() => (<div>{routeMap[0].path}</div>)}/>*/}
        {routeMap.map((x, i) => <Route key={x.path} exact path={x.path} component={() => <Page page={x} />} />)}
      </Switch>
    </Layout>
  </HashRouter>,
  document.getElementById('app')
);
