import React, {Component, PropTypes} from 'react';
import * as presets from './utils/PropTypes';

export class Section extends Component {
  static displayName = 'Section';
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <section className="section">
        {this.props.children}
      </section>
    );
  }
}
