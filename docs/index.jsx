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

const documentationImports = {
  logo,
  // React,
  ReactDOM,
  ...Gooey
};
const pages = [{
  path: '/',
  title: 'Introduction',
  component: require('../README.md')
}, {
  path: '/color-palette',
  title: 'Color Palette',
  component: require('../docs/color-palette.md')
}, {
  title: 'Grid',
  pages: [{
    path: '/grid/columns',
    title: 'Columns',
    component: require('../docs/grid/columns.md')
  }, {
    path: '/grid/tiles',
    title: 'Tiles',
    component: require('../docs/grid/tiles.md')
  }]
}, {
  title: 'Elements',
  pages: [{
    path: '/elements/box',
    title: 'Box',
    component: require('../docs/elements/box.md'),
    source: require('!!text-loader!../src/elements/Box.jsx')
  }, {
    path: '/elements/buttons',
    title: 'Button',
    component: require('../docs/elements/button.md'),
    source: require('!!text-loader!../src/elements/Button.jsx')
  }, {
    path: '/elements/delete',
    title: 'Delete',
    component: require('../docs/elements/delete.md'),
    source: require('!!text-loader!../src/elements/ButtonGroup.jsx')
  }, {
    path: '/elements/content',
    title: 'Content',
    component: require('../docs/elements/content.md'),
    source: require('!!text-loader!../src/elements/Content.jsx')
  }, {
    path: '/elements/form',
    title: 'Form',
    component: require('../docs/elements/form.md'),
    source: require('!!text-loader!../src/elements/Form.jsx')
  }, {
    path: '/elements/icon',
    title: 'Icon',
    component: require('../docs/elements/icon.md'),
    source: require('!!text-loader!../src/elements/Icon.jsx')
  }, {
    path: '/elements/image',
    title: 'Image',
    component: require('../docs/elements/image.md'),
    source: require('!!text-loader!../src/elements/Image.jsx')
  }, {
    path: '/elements/notification',
    title: 'Notification',
    component: require('../docs/elements/notification.md'),
    source: require('!!text-loader!../src/elements/Notification.jsx')
  }, {
    path: '/elements/progress',
    title: 'Progress',
    component: require('../docs/elements/progress.md'),
    source: require('!!text-loader!../src/elements/Progress.jsx')
  }, {
    path: '/elements/table',
    title: 'Table',
    component: require('../docs/elements/table.md'),
    source: require('!!text-loader!../src/elements/Table.jsx')
  }, {
    path: '/elements/tag',
    title: 'Tag',
    component: require('../docs/elements/tag.md'),
    source: require('!!text-loader!../src/elements/Tag.jsx')
  }, {
    path: '/elements/title',
    title: 'Title',
    component: require('../docs/elements/title.md'),
    source: require('!!text-loader!../src/elements/Title.jsx')
  }, {
    path: '/elements/subtitle',
    title: 'Subtitle',
    component: require('../docs/elements/subtitle.md'),
    source: require('!!text-loader!../src/elements/Subtitle.jsx')
  }]
}, {
  title: 'Components',
  pages: [{
    path: '/components/card',
    title: 'Card',
    component: require('../docs/components/card.md'),
    source: require('!!text-loader!../src/components/Card.jsx')
  }, {
    path: '/components/level',
    title: 'Level',
    component: require('../docs/components/level.md'),
    source: require('!!text-loader!../src/components/Level.jsx')
  }, {
    path: '/components/media-object',
    title: 'Media Object',
    component: require('../docs/components/media-object.md'),
    source: require('!!text-loader!../src/components/MediaObject.jsx')
  }, {
    path: '/components/menu',
    title: 'Menu',
    component: require('../docs/components/menu.md'),
    source: require('!!text-loader!../src/components/Menu.jsx')
  }, {
    path: '/components/message',
    title: 'Message',
    component: require('../docs/components/message.md'),
    source: require('!!text-loader!../src/components/Message.jsx')
  }, {
    path: '/components/modal',
    title: 'Modal',
    component: require('../docs/components/modal.md'),
    source: require('!!text-loader!../src/components/Modal.jsx')
  }, {
    path: '/components/nav',
    title: 'Nav',
    component: require('../docs/components/nav.md')
  }, {
    path: '/components/pagination',
    title: 'Pagination',
    component: require('../docs/components/pagination.md'),
    source: require('!!text-loader!../src/components/Pagination.jsx')
  }, {
    path: '/components/panel',
    title: 'Panel',
    component: require('../docs/components/panel.md')
  }, {
    path: '/components/tabs',
    title: 'Tabs',
    component: require('../docs/components/tabs.md'),
    source: require('!!text-loader!../src/components/Panel.jsx')
  }]
}, {
  title: 'Layout',
  pages: [{
    path: '/layout/container',
    title: 'Container',
    component: require('../docs/layout/container.md')
  }, {
    path: '/layout/hero',
    title: 'Hero',
    component: require('../docs/layout/hero.md')
  }, {
    path: '/layout/footer',
    title: 'Footer',
    component: require('../docs/layout/footer.md')
  }, {
    path: '/layout/section',
    title: 'Section',
    component: require('../docs/layout/section.md')
  }]
}, {
  title: 'Forms',
  pages: [{
    path: '/forms/form',
    title: 'Forms',
    component: require('../docs/forms/form.md')
  }]
}, {
  path: '/proptypes',
  title: 'PropTypes',
  component: require('../docs/props.md')
}];
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
