import React, {Component, PropTypes} from 'react';

export default class Section extends Component {
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
