import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {Field} from 'react-redux-form';
import classNames from 'classnames';
import Icon from '../Icon';
import {trimRoot} from 'utils';

export default class Input extends Component {
  static displayName = 'Input';
  static propTypes = {
    col: PropTypes.number.isRequired,
    model: PropTypes.string.isRequired,
    errorMessages: PropTypes.object.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'color', 'date', 'datetime', 'datetime-local', 'email', 'month', 'number', 'range', 'search', 'tel', 'time', 'url', 'week']).isRequired,
    form: PropTypes.object,
    label: PropTypes.string,
    help: PropTypes.string,
    placeholder: PropTypes.string
  };
  static defaultProps = {
    col: 12,
    type: 'text',
    errorMessages: {}
  };

  render() {
    const {placeholder, label, help, model, errorMessages, form, type} = this.props;
    const field = form.fields[trimRoot(model)] || {errors:{}};
    const e = !field.pristine && field.errors || {};
    const errors = _.keys(e).filter(x => e[x]);
    const errored = !!errors.length;
    const messages =  errors.map(x => errorMessages[x]).filter(x => x).map(x => <p key={x}>{x}</p>);
    const {validating} = field;
    const controlClass = classNames('control', {
      'is-danger': errored,
      'has-icon has-icon-right': errored || validating
    });
    const helpClass = classNames('help', {'is-danger': errored});

    return (
      <div>
        <label className="label" htmlFor={model}>{label}</label>
        <Field {...this.props} className={controlClass}>
          <input id={model} className={`input ${errored && 'is-danger'}`} type={type} placeholder={placeholder}/>
          {(errored && <Icon name="warning" ring wrap={false} />) || (validating && <Icon name="circle-o" burst wrap={false} />)}
          <span className={helpClass}>{errored ? messages : help}</span>
        </Field>
      </div>
    );
  }
}