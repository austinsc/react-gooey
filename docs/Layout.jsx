import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Hero, Title, Container, Subtitle, Nav, Tabs, Tab} from "../src/index";
import routes from './routes';

const main = routes.map(x => ({title: x.title, path: x.path || (x.pages && x.pages[0] && x.pages[0].path)}));

class Navigation extends Component {
  render() {
    return (
      <Hero.Head>
        <Container>
        </Container>
      </Hero.Head>
    );
  }
}


export default class Layout extends PureComponent {
  static displayName = 'Layout';
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <div>
        <Hero color="primary" size="small" bold>
          <Navigation />
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
                  <Tab key={x.title} href={`#${x.path}`} active={_.endsWith(window.location, x.path)}>
                    {x.title}
                  </Tab>
                ))}
              </Tabs>
            </Container>
          </Hero.Foot>
        </Hero>
        <Container>
          <Nav shadow>

          </Nav>
        </Container>
      </div>
    );
  }
}
