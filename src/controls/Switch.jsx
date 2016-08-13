import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {createFieldClass, getField, controls} from 'react-redux-form';
import {Style} from 'decorators';

const SelectField = createFieldClass({}, {
  'Switch': controls.checkbox
});

@Style(require('css/controls/switch'))
export default class Switch extends Component {
  static displayName = 'Switch';
  static propTypes = {
    model: PropTypes.string.isRequired,
    help: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    errorMessages: PropTypes.object.isRequired
  };
  static defaultProps = {
    errorMessages: {}
  };
  static contextTypes = {
    form: PropTypes.object
  };

  render() {
    const {form} = this.context;
    const {label, help, model, errorMessages, checked} = this.props;
    const errors = _.isEmpty(form) ? {} : getField(form, model).errors;
    const messages =  _.keys(errors).map(x => errors[x] && errorMessages[x]).filter(x => x).map(x => <p key={x}>{x}</p>);

    return (
      <div>
        <label className="label" htmlFor={model}>{label}</label>
        <SelectField {...this.props} className="control">
          <div
            {...this.props}
            className='switch checked'
            role='checkbox'
            aria-checked={checked}>
            <div className="dot" />
          </div>
        </SelectField>
      </div>
    );
  }
}