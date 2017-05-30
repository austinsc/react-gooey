import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {parse} from 'react-docgen';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {monokai} from 'react-syntax-highlighter/dist/styles';

// @Specimen()
export default class ReactProps extends Component {
  static displayName = 'ReactProps';
  static contextTypes = {
    catalog: PropTypes.object.isRequired
  };

  render() {
    const {rawBody} = this.props;
    const source = this.context.catalog.page.source;
    if(!source) {
      return null;
    }
    const parsed = parse(source);
    return (
      <div>
        <pre>
          {JSON.stringify(parsed, null, 2)}
        </pre>
        <SyntaxHighlighter language="jsx" style={monokai}>
          {source}
        </SyntaxHighlighter>
      </div>
    );
  }
}
