/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import {Catalog, CodeSpecimen, ReactSpecimen} from 'catalog';
import * as Gooey from '../src';

import 'purecss/build/pure.css';
import './main.css';
import '../style.css';

// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.
const documentationImports = {
  ReactDOM,
  Gooey
};
const title = `${NAME} v${VERSION}`; // eslint-disable-line no-undef
const project = `${USER}/${NAME}`; // eslint-disable-line no-undef
const pages = [{
  path: '/',
  title: 'Introduction',
  src: '../README.md'
}];
const specimen = {
  javascript: props => <CodeSpecimen {...props} lang="javascript" />,
  js: props => <CodeSpecimen {...props} lang="javascript" />,
  jsx: props => <ReactSpecimen {...props} />
};



// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div>
    <GithubCorner href={`https://github.com/${project}`} bannerColor="#fff" octoColor="#000" width={80} height={80} direction="right"/>
    <Catalog imports={documentationImports} pages={pages} specimens={specimen} title={title} />
  </div>,
  document.getElementById('app')
);
