import React, {Component, PropTypes, Children, cloneElement} from 'react';


export default class Form extends Component {
  static displayName = 'Form';
  static propTypes = {
    open: PropTypes.bool.isRequired,
    display: PropTypes.oneOf(['page', 'modal']).isRequired,
    form: PropTypes.shape({}).isRequired,
    disabled: PropTypes.bool.isRequired,
    children: PropTypes.any,
    title: PropTypes.node,
    buttons: PropTypes.node
  };
  static defaultProps = {
    display: 'page',
    open: true,
    disabled: false
  };

  render() {
    const {children, buttons, open, disabled, title, display, form} = this.props;

    const body = (
      <form className="form">
        <div>
          {Children.map(children, x => {
            if(x) {
              return (
                <div col={x.props.col || 12}>
                  {cloneElement(x, {form, disabled: x.props.disabled === false ? false : x.props.disabled || disabled})}
                </div>
              );
            }
          })}
        </div>
      </form>
    );

    if(open && display === 'modal') {
      return (
        <div className="modal">
          <div className="modal-background" />
          <div className="modal-content">
            <div className="box">
              {title}
              {body}
              {buttons}
            </div>
          </div>
        </div>
      );
    } else if(display === 'page') {
      return (
        <div>
          {title}
          {body}
          {buttons}
        </div>
      );
    } else {
      return null;
    }
  }
}
