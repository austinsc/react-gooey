import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {Field, Errors} from 'react-redux-form';
import {trimRoot} from 'utils';

export default class CheckboxList extends Component {
  static displayName = 'CheckboxList';
  static propTypes = {
    col: PropTypes.number.isRequired,
    model: PropTypes.string.isRequired,
    errorMessages: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    labelAccessor: PropTypes.func.isRequired,
    form: PropTypes.object,
    label: PropTypes.string,
    help: PropTypes.string,
    placeholder: PropTypes.string
  };
  static defaultProps = {
    col: 12,
    labelAccessor: x => x,
    errorMessages: {}
  };

  render() {
    const {label, help, model, errorMessages, form, options, labelAccessor} = this.props;
    const field = form.fields[trimRoot(model)] || {errors: {}};
    const e = !field.pristine && field.errors || {};
    const errors = _.keys(e).filter(x => e[x]);
    const errored = !!errors.length;
    console.dir(this.props);
    const feedback = errored
      ? <Errors wrapper="span" component="p" className="help is-danger" model={model} messages={errorMessages} show="touched"/>
      : <span className="help">{help}</span>;

    return (
      <div>
        <label className="label" htmlFor={model}>{label}</label>
        <Field {...this.props} component="ul" className="control checkbox-list">
          {options.map((x, i) => (
            <li key={labelAccessor(x)}>
              <label>
                <input type="checkbox" value={options[i]}/>
                <span>{labelAccessor(x)}</span>
              </label>
            </li>
          ))}
          {feedback}
        </Field>
      </div>
    );
  }
}