import React, {Component} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Container extends Component {
  static displayName = 'Container';
  static propTypes = {
    children: PropTypes.any,
    fluid: PropTypes.bool
  };

  render() {
    const {children, fluid} = this.props;
    const classes = classNames('container', {
      'is-fluid': fluid
    });
    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}
