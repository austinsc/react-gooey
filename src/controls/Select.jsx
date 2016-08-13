import React, {Component, PropTypes} from 'react';
import {Field} from 'react-redux-form';
import classNames from 'classnames';
import {trimRoot} from 'utils';

export default class Select extends Component {
  static displayName = 'Select';
  static propTypes = {
    col: PropTypes.number.isRequired,
    model: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    errorMessages: PropTypes.object.isRequired,
    form: PropTypes.object,
    label: PropTypes.string,
    help: PropTypes.string
  };
  static defaultProps = {
    col: 12,
    errorMessages: {}
  };

  render() {
    const {options, help, label, model, form, col} = this.props;
    const field = form && form.fields[trimRoot(model)] || {errors:{}};
    const e = !field.pristine && field.errors || {};
    const errors = _.keys(e).filter(x => e[x]);
    const errored = !!errors.length;
    const messages =  errors.map(x => errorMessages[x]).filter(x => x).map(x => <p key={x}>{x}</p>);
    const {validating} = field;
    const controlClass = classNames('control', {'is-danger': errored});
    const helpClass = classNames('help', {'is-danger': errored});


    return (
      <div col={col} p={1}>
        <label className="label" htmlFor={model}>{label}</label>
        <p className={controlClass}>
          <Field {...this.props} className="select" component="span">
            <select {...this.props} id={model}>
              {options.map(x=> <option key={x} value={x}>{x}</option>)}
            </select>
          </Field>
          <span className={helpClass}>{errored ? messages : help}</span>
        </p>
      </div>
    );
  }
}