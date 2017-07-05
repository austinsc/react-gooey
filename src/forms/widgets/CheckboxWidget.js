import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DescriptionField from '../fields/DescriptionField.js';
import classNames from 'classnames';

export default class CheckboxWidget extends Component {
  static displayName = 'CheckboxWidget';
  static propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.bool,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func
  };
  static defaultProps = {
    autofocus: false
  };

  render() {
    const {schema, id, value, required, disabled, readonly, label, autofocus, onChange} = this.props;
    return (
      <p className="control">
        {schema.description && <DescriptionField description={schema.description}/>}
        <label className="checkbox" htmlFor={id} disabled={disabled || readonly}>
          <input type="checkbox" id={id} checked={typeof value === 'undefined' ? false : value} required={required} disabled={disabled || readonly} autoFocus={autofocus} onChange={event => onChange(event.target.checked)}/>
          &nbsp;{label}
        </label>
      </p>
    );
  }
}
