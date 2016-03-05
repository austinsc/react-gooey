import React, {Component, PropTypes} from 'react';
import * as presets from './utils/PropTypes';

export class Blank extends Component {
  static displayName = 'Blank';
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <div></div>
    );
  }
}
