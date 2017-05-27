import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class DescriptionField extends Component {
  static displayName = 'DescriptionField';
  static propTypes = {
    id: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  };

  render() {
    const {id, description} = this.props;
    if(!description) {
      return null;
    }
    return <p id={id} className="help field-description">{description}</p>;
  }
}
