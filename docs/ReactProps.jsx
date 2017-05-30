import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {parse} from 'react-docgen';

export default class ReactProps extends Component {
  static displayName = 'ReactProps';

  render() {
    const {rawBody} = this.props;

    const parsed = parse(rawBody);
    return (
      <div>
        <pre>
          {JSON.stringify(parsed, null, 2)}
        </pre>
        <pre>
          {rawBody}
        </pre>
      </div>
    );
  }
}
