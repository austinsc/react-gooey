import React, {Component, PureComponent, createElement} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import {withRouter} from "react-router-dom";
import {Hero, Title, Container, Content, Subtitle, Nav, Tabs, Tab, Notification, Table, Button} from "../src/index";
import * as Gooey from '../src/index';
import logo from '../react-gooey.svg';
import routes from './routes';
import transformJSX from './transformJSX';
import {renderers} from 'commonmark-react-renderer';
import ReactMarkdown from 'react-markdown';
import {parse} from 'react-docgen';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {monokaiSublime as monokai} from 'react-syntax-highlighter/dist/styles';

const forms = {
  todo: {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
      title: {type: "string", title: "Title", description: "This is a bit of help text just for you."},
      done: {type: "boolean", title: "Done?", default: false}
    }
  }
};

const formsui = {
  todo: {
    title: {
      'ui:placeholder': "A new task"
    }
  }
};

const documentationImports = {
  logo,
  forms,
  formsui,
  ReactDOM,
  ...Gooey
};

const main = routes.map(x => ({title: x.title, path: x.path || (x.pages && x.pages[0] && x.pages[0].path)}));

function syntax(lang, code) {
  return (
    <SyntaxHighlighter language={lang} style={monokai} showLineNumbers wrapLines>
      {code}
    </SyntaxHighlighter>
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
                  <Button color="primary" icon={!code ? 'code' : 'list'} onClick={() => this.setState({code: !code})}>{code ? 'View Properties' : 'View Code'}</Button>
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

class Examplar extends Component {
  state = {elementState:{}};

  setElementState(nextState) {
    if(typeof nextState === 'function') {
      this.setState(({elementState}) => ({elementState: {...elementState, ...nextState(elementState)}}));
    } else {
      this.setState({elementState: {...this.state.elementState, ...nextState}});
    }
  }

  render() {
    const {children, noSource, source} = this.props;
    const jsx = typeof source === 'string';
    let element = null;
    let error = null;
    let code = '';

    if(jsx) {
      const transformed = transformJSX(source, {
        ...Gooey,
        state: this.state.elementState,
        setState: this.setElementState
      });
      element = transformed.element;
      error = transformed.error
        ? <Notification color="warning">{`Couldn't render specimen: ${transformed.error}`}</Notification>
        : null;
      code = source;
    } else {
      element = children;
      code = source;
    }

    if(error) return error;

    return (
      <section>
        {error}
        {element}
        {!noSource && syntax('html', code)}
      </section>
    );
  }
}


class Example extends Component {
  static displayName = 'Example';

  state = {code: false};

  render() {
    const {code} = this.state;
    const {source} = this.props;
    if(!source) {
      return null;
    }
    const body = <pre>{source}</pre>;
    return (
      <div style={{width: '100%', margin: '24px 10px 0 0'}}>
        <div className="level">
          <div className="level-right">
            <div className="level-item">
              <h2 className="title is-4" id="properties">{code ? 'Component Source' : 'Example'}</h2>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <div className="field">
                <p className="control">
                  <Button color="primary" icon={!code ? 'code' : 'list'} onClick={() => this.setState({code: !code})}>{code ? 'View Properties' : 'View Code'}</Button>
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

function createCodeBlock(src) {
  return function CodeBlock(props) { // eslint-disable-line camelcase
    console.dir(props);
    const bonus = props.language.split('|');
    const lang = bonus[0];
    if(lang === 'props') {
      return <Props source={src}/>
    } else if(lang === 'hint') {
      return (
        <Notification color={bonus.length > 1 ? bonus[1] : 'info'}>
          {props.literal}
        </Notification>
      );
    } else if(lang === 'jsx') {
      return <Examplar source={props.literal}/>;
    }
    return syntax(lang, props.literal);
  }
}

export class Page extends Component {
  render() {
    const {page} = this.props;
    return (
      <Container>
        <Content>
          <ReactMarkdown source={page.component} renderers={{...renderers, CodeBlock: createCodeBlock(page.source)}}/>}/>
        </Content>
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
          <Hero.Head>
            <Container>
            </Container>
          </Hero.Head>
          <Hero.Body>
            <Container>
              <Title>
                Gooey
                <Subtitle>
                  A <strong>bulma</strong> CSS based UI framework
                </Subtitle>
              </Title>
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
      </div>
    );
  }
}
