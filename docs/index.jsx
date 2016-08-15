/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import {Catalog, CodeSpecimen, ReactSpecimen} from 'catalog';
import * as Gooey from '../src/index';

// import 'purecss/build/pure.css';
// import './main.css';
// import '../style.css';
import '../src/css/main';

const documentationImports = {
  ReactDOM,
  ...Gooey
};
const pages = [{
  path: '/',
  title: 'Introduction',
  src: '../README.md'
}, {
  title: 'Components',
  pages: [{
    path: '/components/icons',
    title: 'Icons',
    src: 'docs/components/icon.md'
  }, {
    path: '/components/buttons',
    title: 'Buttons',
    src: 'docs/components/button.md'
  }]
}, {
  title: 'Layout',
  pages: [{
    path: '/layout/containers',
    title: 'Containers',
    src: 'docs/layout/container.md'
  }, {
    path: '/layout/content',
    title: 'Content',
    src: 'docs/layout/content.md'
  }, {
    path: '/layout/heroes',
    title: 'Heroes',
    src: 'docs/layout/hero.md'
  }, {
    path: '/layout/level',
    title: 'Level',
    src: 'docs/layout/level.md'
  }]
}];
const specimen = {
  js: props => <CodeSpecimen {...props} lang="javascript"/>,
  jsx: props => <ReactSpecimen {...props} />
};


// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div>
    <GithubCorner href={`https://github.com/${USER}/${NAME}`} bannerColor="#fff" octoColor="#000" width={80} height={80} direction="right"/>
    <Catalog imports={documentationImports} pages={pages} specimens={specimen} title={`${NAME} v${VERSION}`}/>
  </div>,
  document.getElementById('app')
);
