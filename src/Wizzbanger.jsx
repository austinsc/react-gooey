import _ from 'lodash';
import React, {Component} from 'react'; import PropTypes from 'prop-types';
import {Level, LevelSection, LevelItem} from '../';

const defaultValueRenderer = function(v) {
  return (
    <span>{v}</span>
  );
};

class Property extends Component {
  static displayName = 'Property';
  static propTypes = {
    valueRenderer: PropTypes.any,
    name: PropTypes.string,
    value: PropTypes.any
  };
  static defaultProps = {
    valueRenderer: defaultValueRenderer
  };

  render() {
    const {valueRenderer, value, name} = this.props;
    return (
      <li>
        <Level>
          <LevelSection left>
            <LevelItem>
              {_.startCase(name)}
            </LevelItem>
          </LevelSection>
          <LevelSection right>
            <LevelItem>
              {valueRenderer(value)}
            </LevelItem>
          </LevelSection>
        </Level>
      </li>
    );
  }
}

export default class Wizzbanger extends Component {
  static displayName = 'Wizzbanger';
  static propTypes = {
    object: PropTypes.object,
    title: PropTypes.string,
    visitors: PropTypes.object,
  };
  static defaultProps = {
    visitors: {}
  };

  render() {
    const {object, title, visitors} = this.props;
    const tit = title
      ? <h4 className="title is-4" style={{marginBottom: '.25em'}}>{_.startCase(title)}</h4>
      : null;
    return (
      <div className="wizzbanger">
        {tit}
        <ul>
          {_.map(object, (v, k) => _.isPlainObject(v)
            ? <Wizzbanger key={k} title={k} object={v} visitors={visitors[k]}/>
            : <Property key={k} name={k} value={v} valueRenderer={visitors[k]}/>)}
        </ul>
      </div>
    );
  }

}
