import _ from 'lodash';
import React, {Component} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class ButtonGroup extends Component {
  static displayName = 'ButtonGroup';
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.any,
    addons: PropTypes.bool
  };

  render() {
    const {children, addons, className, ...rest} = this.props;
    const classes = classNames('control', {
      'is-grouped': !addons,
      'has-addons': addons,
      [className]: !!className
    });
    const childProps = _.omit(this.props, ['children', 'addons', 'className']);
    return (
      <p {...childProps} className={classes} {...rest}>
        {children}
      </p>
    );
  }
}
