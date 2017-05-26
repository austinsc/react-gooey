import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BaseInput from './BaseInput';

export default class DateWidget extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  render() {
    const {onChange, ...rest} = this.props;
    return (
      <BaseInput type="date" {...rest} onChange={value => onChange(value || undefined)}/>
    );
  }
}
