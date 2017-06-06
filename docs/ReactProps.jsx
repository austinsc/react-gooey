import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {parse} from 'react-docgen';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {monokaiSublime as monokai} from 'react-syntax-highlighter/dist/styles';

function propTable(meta) {
  const props = Object.keys(meta.props).map(x => ({...meta.props[x], name: x}));
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map(x => (
            <tr key={x.name}>
              <td>{x.name}</td>
              <td>{x.type.name}</td>
              <td>{x.required.toString()}</td>
              <td>{x.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default class ReactProps extends Component {
  static displayName = 'ReactProps';

  state = {code: false};

  render() {
    const {code} = this.state;
    const {source} = this.props;
    if(!source) {
      return null;
    }
    const body = code
      ? (
        <SyntaxHighlighter language="jsx" style={monokai} showLineNumbers wrapLines>
          {source}
        </SyntaxHighlighter>
      ) : (
        propTable(parse(source))
      );
    return (
      <div style={{width: '100%', margin: '24px 10px 0 0'}}>
        <div className="level">
          <div className="level-right">
            <div className="level-item">
              <h2 className="title is-4" id="properties">{code ? 'Component Source' : 'Properties'}</h2>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <div className="field">
                <p className="control">
                  <button className="button is-primary" onClick={() => this.setState({code: !code})}>{code ? 'View Properties' : 'View Code'}</button>
                </p>
              </div>
            </div>
          </div>
        </div>
        {body}
      </div>
    );
  }
}
