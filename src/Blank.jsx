import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Blank extends Component {
  static displayName = 'Blank';
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <div />
    );
  }
}
