import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Hero, Title, Container, Menu, MenuLabel, MenuList, Columns, Column} from "../src/index";
import Subtitle from "../src/elements/Subtitle";

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
        </Hero>
      </div>
    );
  }
}
