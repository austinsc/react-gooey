import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {asNumber} from '../utils';

export default class NumberField extends Component{
  static displayName = '';
  static propTypes = {
    registry: PropTypes.object.isRequired,
    schema: PropTypes.object.isRequired,
    uiSchema: PropTypes.object,
    idSchema: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    formData: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    required: PropTypes.bool,
    formContext: PropTypes.object.isRequired,
  };
  static defaultProps = {
    uiSchema: {},
  };

  render() {
    const {StringField} = this.props.registry.fields;
    return (
      <StringField {...this.props} onChange={value => this.props.onChange(asNumber(value))} />
    );
  }
}