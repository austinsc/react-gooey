import React, {Component, Children} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class ButtonGroup extends Component {
  static displayName = 'ButtonGroup';
  static propTypes = {
    /**
     * Child elements to be rendered within the box.
     */
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any,
    /**
     * Renders the buttons as add-ons.
     */
    addons: PropTypes.bool
  };

  render() {
    const {children, addons, className, ...rest} = this.props;
    const classes = classNames('field', {
      'is-grouped': !addons,
      'has-addons': addons,
      [className]: !!className
    });
    return (
      <div className={classes} {...rest}>
        {Children.map(children, x => (<p className="control">{x}</p>))}
      </div>
    );
  }
}
