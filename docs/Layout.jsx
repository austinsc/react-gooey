import React, {Component, PureComponent} from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from "react-router-dom";
import {Hero, Title, Container, Content, Subtitle, Nav, Tabs, Tab, Level, Table, Button, Message, Box, Columns, Column, Image, Footer, Icon} from "../src/index";
import * as Gooey from '../src/index';
import logo from '../react-gooey-white.svg';
import routes from './routes';
import transformJSX from './transformJSX';
import {renderers} from 'commonmark-react-renderer';
import ReactMarkdown from 'react-markdown';
import {parse} from 'react-docgen';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {vs as theme} from 'react-syntax-highlighter/dist/styles';
import yaml from 'js-yaml';
import examples from './forms/examples.json';

const documentationImports = {
  logo,
  ReactDOM,
  ...examples,
  ...Gooey
};

const main = routes.map(x => ({title: x.title, path: x.path || (x.pages && x.pages[0] && x.pages[0].path)}));

function syntax(lang, code) {
  return (
    <div>
      <SyntaxHighlighter language={lang} style={theme} showLineNumbers wrapLines>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

function propTable(meta) {
  const props = Object.keys(meta.props).map(x => ({...meta.props[x], name: x}));
  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            <th><strong>Property</strong></th>
            <th><strong>Type</strong></th>
            <th><strong>Required</strong></th>
            <th><strong>Description</strong></th>
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
      </Table>
    </div>
  );
}

class Props extends Component {
  static displayName = 'Props';

  state = {code: false};

  render() {
    const {code} = this.state;
    const {source} = this.props;
    if(!source) {
      return null;
    }
    const body = code ? syntax('jsx', source) : propTable(parse(source));
    return (
      <div style={{width: '100%', margin: '24px 10px 0 0'}}>
        <Level>
          <Level.Left>
            <Level.Item>
              <Title size="4" id="properties">{code ? 'Component Source' : 'Properties'}</Title>
            </Level.Item>
          </Level.Left>
          <Level.Right>
            <Level.Item>
              <div className="field">
                <p className="control">
                  <Button color="primary" icon={!code ? 'code' : 'list'} onClick={() => this.setState({code: !code})}>{code ? 'View Properties' : 'View Code'}</Button>
                </p>
              </div>
            </Level.Item>
          </Level.Right>
        </Level>
        {body}
      </div>
    );
  }
}

class Example extends Component {
  static displayName = 'Example';

  state = {elementState: {}, showCode: false};

  setElementState(nextState) {
    if(typeof nextState === 'function') {
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

    if(typeof source === 'string') {
      const transformed = transformJSX(source, {...documentationImports, state: this.state.elementState, setState: this.setElementState});
      element = transformed.element;
      error = transformed.error && <Message color="danger"><Message.Body>{`Couldn't render specimen: ${transformed.error}`}</Message.Body></Message>;
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
        <Button style={{width: '100%'}} color="primary" icon="code" outlined onClick={() => this.setState({showCode: !showCode})}>Show Example Code</Button>
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
    if(lang === 'props') {
      return <Props source={src}/>
    } else if(lang === 'hint') {
      return (
        <Message color={bonus.length > 1 ? bonus[1] : 'info'}>
          <Message.Body>
            <ReactMarkdown source={props.literal}/>
          </Message.Body>
        </Message>
      );
    } else if(lang === 'jsx') {
      return <Example source={props.literal}/>;
    } else if(lang === 'color-palette') {
      const {colors} = yaml.load(props.literal);
      return <ColorPallet colors={colors}/>;
    }
    return syntax(lang, props.literal);
  }
}

export class Page extends PureComponent {
  render() {
    const {page} = this.props;
    return (
      <Container>
        <ReactMarkdown source={page.component} renderers={{...renderers, CodeBlock: createCodeBlock(page.source)}} className="page"/>
      </Container>
    );
  }
}

@withRouter
export default class Layout extends PureComponent {
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
        <Footer style={{marginTop: '3rem'}}>
          <Columns>
            <Column>
              <Box>
                Blah Blah
              </Box>
            </Column>
            <Column className="has-text-centered">
              MIT License
            </Column>
          </Columns>
        </Footer>
      </div>
    );
  }
}
