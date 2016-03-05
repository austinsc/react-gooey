import React, {Component} from 'react';
import Fork from 'react-ghfork';
import pkgInfo from '../package.json';
import Demo from './Demo.jsx';
import NavBarPage from './NavBarPage.jsx';
import Style from 'react-style-decorator';

export default class App extends Component {
  render() {
    return (
      <div>
        <Fork className="right" project={pkgInfo.user + '/' + pkgInfo.name} />
        <p>Just demonstrating the awesomeness of this boilerplate here.</p>

        <Demo />
        <NavBarPage />
      </div>
    );
  }
}
