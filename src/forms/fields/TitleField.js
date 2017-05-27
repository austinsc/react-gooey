import React, {Component} from 'react';
import PropTypes from 'prop-types';

const REQUIRED_FIELD_SYMBOL = '*';

export default class TitleField extends Component {
  static displayName = 'TitleField';
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    required: PropTypes.bool
  };

  render() {
    const {id, title, required} = this.props;
    const legend = required ? title + REQUIRED_FIELD_SYMBOL : title;
    return (
      <legend id={id}>
        {legend}
      </legend>
    );
  }
}
