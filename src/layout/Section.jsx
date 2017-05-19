import React, {Component} from 'react'; import PropTypes from 'prop-types';

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
