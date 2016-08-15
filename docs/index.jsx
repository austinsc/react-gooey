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
  path: '/color-palette',
  title: 'Color Palette',
  src: 'docs/color-palette.md'
}, {
  title: 'Components',
  pages: [{
    path: '/components/nav',
    title: 'Navigation',
    src: 'docs/components/nav.md'
  }]
}, {
  title: 'Elements',
  pages: [{
    path: '/elements/box',
    title: 'Box',
    src: 'docs/elements/box.md'
  }, {
    path: '/elements/buttons',
    title: 'Button',
    src: 'docs/elements/button.md'
  }, {
    path: '/elements/content',
    title: 'Content',
    src: 'docs/elements/content.md'
  }, {
    path: '/elements/form',
    title: 'Form',
    src: 'docs/elements/form.md'
  }, {
    path: '/elements/icon',
    title: 'Icon',
    src: 'docs/elements/icon.md'
  }, {
    path: '/elements/image',
    title: 'Image',
    src: 'docs/elements/image.md'
  }, {
    path: '/elements/notification',
    title: 'Notification',
    src: 'docs/elements/notification.md'
  }, {
    path: '/elements/progress',
    title: 'Progress',
    src: 'docs/elements/progress.md'
  }, {
    path: '/elements/table',
    title: 'Table',
    src: 'docs/elements/table.md'
  }, {
    path: '/elements/tag',
    title: 'Tag',
    src: 'docs/elements/tag.md'
  }, {
    path: '/elements/title',
    title: 'Title',
    src: 'docs/elements/title.md'
  }]
}, {
  title: 'Layout',
  pages: [{
    path: '/layout/container',
    title: 'Container',
    src: 'docs/layout/container.md'
  }, {
    path: '/layout/hero',
    title: 'Hero',
    src: 'docs/layout/hero.md'
  }, {
    path: '/layout/level',
    title: 'Level',
    src: 'docs/layout/level.md'
  }, {
    path: '/layout/section',
    title: 'Section',
    src: 'docs/layout/section.md'
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
