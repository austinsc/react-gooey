/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import {Catalog, CodeSpecimen, ReactSpecimen} from 'catalog';
import ReactProps from './ReactProps';
import * as Gooey from '../src/index';
import logo from '../react-gooey.svg';
import theme from './theme';
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

const specimen = {
  js: props => <CodeSpecimen {...props} lang="javascript"/>,
  jsx: props => <ReactSpecimen {...props} />,
  props: props => <ReactProps {...props} />
};


ReactDOM.render(
  <div>
    <GithubCorner href={`https://github.com/${USER}/${NAME}`} bannerColor="#fff" octoColor="#000" width={80} height={80} direction="right"/>
    <Catalog imports={documentationImports} pages={pages} specimens={specimen} title={`${NAME} v${VERSION}`} logoSrc={logo} theme={theme}/>
  </div>,
  document.getElementById('app')
);
