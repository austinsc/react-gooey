import _ from 'lodash';
import React, {Component, PureComponent, createElement} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {withRouter} from "react-router-dom";
import {
  Hero,
  Title,
  Container,
  Content,
  Subtitle,
  Nav,
  Tabs,
  Tab,
  Level,
  Table,
  Button,
  Message,
  Box,
  Columns,
  Column,
  Image,
  Footer,
  Icon
} from "../src/index";
import * as Gooey from '../src/index';
import logo from '../react-gooey-white.svg';
import routes from './routes';
import transformJSX from './transformJSX';
import {renderers} from 'commonmark-react-renderer';
import ReactMarkdown from 'react-markdown';
import {parse} from 'react-docgen';
import yaml from 'js-yaml';
import examples from './forms/examples.json';
import Prism from 'prismjs';


const documentationImports = {
  logo,
  ReactDOM,
  ...examples,
  ...Gooey
};

const main = routes.map(x => ({title: x.title, path: x.path || (x.pages && x.pages[0] && x.pages[0].path)}));

class Code extends PureComponent {
  static propTypes = {
    async: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.any
  };

  componentDidMount() {
    this._hightlight();
  }

  componentDidUpdate() {
    this._hightlight();
  }

  _hightlight() {
    Prism.highlightElement(this.refs.code, this.props.async);
  }

  render() {
    const {className, children} = this.props;

    return (
      <pre>
        <code ref="code" className={className}>
          {children}
        </code>
      </pre>
    );
  }
}

function syntax(lang, code) {
  return (
    <Code className={`language-${lang}`}>
      {code}
    </Code>
  );
}

class Props extends Component {
  static displayName = 'Props';

  render() {
    const {source} = this.props;
    if (!source) {
      return null;
    }
    const meta = parse(source);
    console.dir(meta);
    const props = Object.keys(meta.props).map(x => ({...meta.props[x], name: x}));
    const hasEnum = props.filter(x => x.type.name === 'enum').length > 0;
    return (
      <section className="props">
        <Table bordered>
          <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th colSpan={1 + hasEnum}>Description</th>
          </tr>
          </thead>
          <tbody>
          {props.map(x => {
            const isEnum = x.type.name === 'enum';
            return (
              <tr key={x.name} style={{fontWeight: x.required ? 'bold' : 'inherit'}}>
                <td>{x.name}</td>
                <td>{x.type.name}</td>
                <td colSpan={hasEnum && isEnum ? 1 : hasEnum ? 2 : 1}>{x.description}</td>
                {hasEnum && isEnum && <td>{isEnum && x.type.value && x.type.value.map(y => y.value).join(', ')}</td>}
              </tr>
            );
          })}
          </tbody>
        </Table>
      </section>
    );
  }
}

class Example extends Component {
  static displayName = 'Example';

  constructor(props) {
    super(props);
    this.state = {elementState: {...props.state}, showCode: false};
  }

  setElementState(nextState) {
    if (typeof nextState === 'function') {
      this.setState(({elementState}) => ({elementState: {...elementState, ...nextState(elementState)}}));
    } else {
      this.setState({elementState: {...this.state.elementState, ...nextState}});
    }
  }

  render() {
    const {children, source} = this.props;
    const {showCode} = this.state;
    let element = null;
    let error = null;
    let code = '';

    if (typeof source === 'string') {
      const transformed = transformJSX(source, {
        ...documentationImports,
        state: this.state.elementState,
        setState: ::this.setElementState
      });
      element = transformed.element;
      error = transformed.error && <Message
          color="danger"><Message.Body>{`Couldn't render specimen: ${transformed.error}`}</Message.Body></Message>;
      code = source;
    } else {
      element = children;
      code = source;
    }

    return (
      <section className="example" style={showCode ? {paddingBottom: '0'} : {}}>
        {error}
        <figure>
          {element}
        </figure>
        <Button style={{width: '100%'}} color="primary" icon="code" outlined
                onClick={() => this.setState({showCode: !showCode})}>Show Example Code</Button>
        {showCode && syntax('html', code.trim())}
      </section>
    );
  }
}

class ColorPallet extends PureComponent {
  render() {
    const {colors} = this.props;
    return (
      <ul className="color-pallet">
        {colors.map((x, i) => (
          <li key={i} style={{backgroundColor: x.value}}>
            <Box>
              <Title size="3" style={{marginBottom: 0}}>
                {x.name}
                <Subtitle size="5">{x.value}</Subtitle>
              </Title>
            </Box>
          </li>
        ))}
      </ul>
    );
  }
}


function createCodeBlock(src) {
  return function CodeBlock(props) { // eslint-disable-line camelcase
    const bonus = props.language.split('|');
    const lang = bonus[0];
    if (lang === 'props') {
      return null; //<Props source={src}/>
    } else if (lang === 'hint') {
      return (
        <Message color={bonus.length > 1 ? bonus[1] : 'info'}>
          <Message.Body>
            <ReactMarkdown source={props.literal}/>
          </Message.Body>
        </Message>
      );
    } else if (lang === 'jsx') {
      const parts = props.literal.split('---');
      let other = {};
      if (parts.length > 1) {
        other = yaml.load(parts[0]);
      }
      return <Example {...other} source={parts[parts.length - 1]}/>;
    } else if (lang === 'color-palette') {
      const {colors} = yaml.load(props.literal);
      return <ColorPallet colors={colors}/>;
    }
    return syntax(lang, props.literal);
  }
}

export class Page extends PureComponent {
  render() {
    const {page} = this.props;
    let src = null;
    let props = null;
    if (page.source) {
      src = (
        <section className="source">
          {syntax('javascript', page.source)}
        </section>
      );
      props = <Props source={page.source}/>
    }

    return (
      <Container>
        <Title className="page-header">{page.title}</Title>
        {props}
        <ReactMarkdown source={page.component} renderers={{...renderers, CodeBlock: createCodeBlock(page.source)}}
                       className="page"/>
        {src}
      </Container>
    );
  }
}

@withRouter
export default class Layout extends Component {
  static displayName = 'Layout';
  static propTypes = {};
  static defaultProps = {};

  render() {
    const {location: {pathname}, children} = this.props;
    const route = routes.filter(x => x.path === pathname || (x.pages && x.pages.filter(y => y.path === pathname).length))[0];
    const submenu = route.pages && route.pages.length
      ? (
        <Nav shadow>
          <Container>
            {route.pages.map(x => (
              <Nav.Link key={x.path} tab active={pathname === x.path} href={`#${x.path}`}>
                {x.title}
              </Nav.Link>
            ))}
          </Container>
        </Nav>
      ) : null;
    return (
      <div>
        <Hero color="primary" size="small" bold>
          <Hero.Body>
            <Container>
              <Level>
                <Level.Left>
                  <Level.Item style={{maxWidth: '100px'}}>
                    <Image src={logo} style={{width: '80px'}}/>
                  </Level.Item>
                  <Level.Item style={{flexGrow: 5, justifyContent: 'left'}}>
                    <Title heading>
                      Gooey
                      <Subtitle>
                        A <strong>bulma</strong> CSS based React Component Library
                      </Subtitle>
                    </Title>
                  </Level.Item>
                </Level.Left>
                <Level.Right>
                  <Level.Item>
                    <Box style={{padding: 0}}>
                    <pre style={{background: 'none'}}>
                      <code className="code">npm install react-gooey --save</code>
                    </pre>
                    </Box>
                  </Level.Item>
                  <Level.Item>
                    <Button icon="github" color="dark" outlined size="large" iconSize="large"
                            onClick={() => window.open('https://github.com/austinsc/react-gooey')}/>
                  </Level.Item>
                </Level.Right>
              </Level>
            </Container>
          </Hero.Body>
          <Hero.Foot>
            <Container>
              <Tabs boxed>
                {main.map((x, i) => (
                  <Tab key={x.title} href={`#${x.path}`} active={x.title === route.title}>
                    {x.title}
                  </Tab>
                ))}
              </Tabs>
            </Container>
          </Hero.Foot>
        </Hero>
        {submenu}
        <br style={{marginTop: '1em'}}/>
        {children}
        <Footer style={{marginTop: '5rem'}}>
          <Container>
            <Columns>
              <Column>
                  <p>Made with ❤ by <a href="https://github.com/austinsc" target="_blank">@austinsc</a> and <a href="https://github.com/em3896101" target="_blank">@em3896101</a>.</p>
                  <p>A special thanks to <a href="http://jgthms.com" target="_blank">Jeremy Thomas</a> for all of the hard work on <a href="http://bulma.io" target="_blank"><strong>Bulma</strong></a>.</p>
              </Column>
              <Column className="has-text-centered">
                <p>Copyright (c) 2017 Stephen C. Austin and Contributors.</p>
                <p>MIT License. See the <a href="https://github.com/austinsc/react-gooey/blob/master/LICENSE" target="_blank">LICENSE</a> included in the source code for more information.</p>
              </Column>
            </Columns>
          </Container>
        </Footer>
      </div>
    );
  }
}
