import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Delete from "../elements/Delete";

class ModalBase extends Component {
  static displayName = 'ModalBase';
  static propTypes = {
    active: PropTypes.bool,
    backgroundClose: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };
  static defaultProps = {
    backgroundClose: true,
    onClose: _.noop
  };

  render() {
    const {onClose, backgroundClose, children, className, active, ...rest} = this.props;
    const classes = classNames('modal', {
      [className]: !!className,
      'is-active': active
    });

    return (
      <div className={classes} {...rest}>
        <div className="modal-background" onClick={backgroundClose ? onClose : _.noop}/>
        {children}
      </div>
    );
  }
}

export default class ModalCard extends Component {
  static displayName = 'ModalCard';
  static propTypes = {
    /**
     * Sets the modal state of visibility.
     */
    active: PropTypes.bool,
    /**
     * The title of the modal
     */
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
     * Footer element for the component to be rendered.
     */
    footer: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
    /**
     * Function specifying the behavior when the modal component is closed.
     */
    onClose: PropTypes.func,
    /**
     * Specifies whether to hide the close button on the modal component.
     */
    hideCloseButton: PropTypes.bool,
    /**
     * Color of the modal header.
     */
    color: PropTypes.oneOf([
      'default',
      'primary',
      'info',
      'success',
      'warning',
      'danger',
      'dark',
      'link',
      'light',
      'white',
      'black'
    ]),
    /**
     * Child elements to be rendered within the component.
     */
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };
  static defaultProps = {
    onClose: _.noop
  };

  render() {
    const {onClose, title, color, children, className, hideCloseButton, footer, active, ...rest} = this.props;
    const classes = classNames('modal-card', {
      [className]: !!className,
      [`is-${color}`]: !!color
    });

    const closeButton = hideCloseButton ? null : <Delete onClick={onClose}/>;
    const foot = !footer ? null : (
      <footer className="modal-card-foot">
        {footer}
      </footer>
    );
    const head = !title ? null : (
      <header className="modal-card-head">
        <p className="modal-card-title">{title}</p>
        {closeButton}
      </header>
    );

    return (
      <ModalBase onClose={onClose} active={active}>
        <div className={classes} {...rest}>
          {head}
          <section className="modal-card-body">
            {children}
          </section>
          {foot}
        </div>
      </ModalBase>
    );
  }
}
