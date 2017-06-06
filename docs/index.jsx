/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import {Route, Switch} from 'react-router';
import {HashRouter} from 'react-router-dom';
// import {Catalog, CodeSpecimen, ReactSpecimen} from 'catalog';
import ReactProps from './ReactProps';
import * as Gooey from '../src/index';
import logo from '../react-gooey.svg';
import Layout from './Layout';
import theme from './theme';
import ReactMarkdown from 'react-markdown';
import routes from './routes';
import '../src/css/main';
import 'font-awesome/scss/font-awesome';
import 'font-awesome-animation/dist/font-awesome-animation.css';

const forms = {
  todo: {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
      title: {type: "string", title: "Title", description: "This is a bit of help text just for you."},
      done: {type: "boolean", title: "Done?", default: false}
    }
  }
};

const formsui = {
  todo: {
    title: {
      'ui:placeholder': "A new task"
    }
  }
};

const documentationImports = {
  logo,
  forms,
  formsui,
  ReactDOM,
  ...Gooey
};

// const specimen = {
//   js: props => <CodeSpecimen {...props} lang="javascript"/>,
//   jsx: props => <ReactSpecimen {...props} />,
//   props: props => <ReactProps {...props} />
// };

const routeMap = _.flatten(routes.map(x => x.path ? x : x.pages.map(y => y)));
window.ROUTES = routeMap;
ReactDOM.render(
  <HashRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={() => <ReactMarkdown source={routeMap[0].component}/>}/>
        {routeMap.map((x, i) => <Route key={i} exact path={x.path} component={() => <ReactMarkdown source={x.component}/>}/>)}
      </Switch>
    </Layout>
  </HashRouter>,
  document.getElementById('app')
);
