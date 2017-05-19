import _ from 'lodash';
import React, {Component} from 'react'; import PropTypes from 'prop-types';
import {Field} from 'react-redux-form';
import classNames from 'classnames';
import {trimRoot} from 'utils';

export default class RadioList extends Component {
  static displayName = 'RadioList';
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
    const messages = errors.map(x => errorMessages[x]).filter(x => x).map(x => <p key={x}>{x}</p>);
    const helpClass = classNames('help', {'is-danger': errored});

    return (
      <div>
        <label className="label">{label}</label>
        <Field {...this.props} className="control">
          <ul className="checkbox-list">
            {options.map(x => (
              <li key={labelAccessor(x)}>
                <label>
                  <input type="radio" value={x} name={model}/>
                  <span>{labelAccessor(x)}</span>
                </label>
              </li>
            ))}
          </ul>
          <span className={helpClass}>{errored ? messages : help}</span>
        </Field>
      </div>
    );
  }
}
