import React, {Component} from 'react';
//import {Section} from '../src';

export default class NavBarPage extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <h1 className="title">Navbar</h1>
          <h2 className="subtitle">A multi-purpose <strong>horizontal navbar</strong>, which can contain almost any other element</h2>
          <hr />
          <div className="content">
            <p>The <strong>structure</strong> of a navbar is the following:</p>
            <ul>
              <li>
                <code>navbar</code>: main container
                <ul>
                  <li><code>navbar-left</code> for the left side</li>
                  <li>
                    <code>navbar-right</code> for the right side
                    <ul>
                      <li><code>navbar-item</code> for each individual element</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <p>In a <code>navbar-item</code>, you can then insert almost <em>anything</em> you want: a title, a button, a text input, or just simple text. No matter what elements you put inside a Bulma <code>navbar</code>, they will always be <strong>vertically aligned</strong>.</p>
          </div>
          <div className="structure">
            <nav className="navbar structure-item is-structure-container" title="navbar">
              <div className="navbar-left structure-item" title="navbar-left">
                <div className="navbar-item">
                  <p className="subtitle is-5">
                    <strong>123</strong> posts
                  </p>
                </div>
                <div className="navbar-item">
                  <p className="control is-grouped">
                    <input className="input" type="text" placeholder="Find a post" />
                    <button className="button">
                      Search
                    </button>
                  </p>
                </div>
              </div>
              <div className="navbar-right structure-item" title="navbar-right">
                <p className="navbar-item">
                  <strong>All</strong>
                </p>
                <p className="navbar-item">
                  <a href="#">Published</a>
                </p>
                <p className="navbar-item">
                  <a href="#">Drafts</a>
                </p>
                <p className="navbar-item">
                  <a href="#">Deleted</a>
                </p>
                <p className="navbar-item">
                  <a className="button is-success">
                    New
                  </a>
                </p>
              </div>
            </nav>
          </div>
          <div className="example">
            <nav className="navbar">
              <div className="navbar-left">
                <div className="navbar-item">
                  <p className="subtitle is-5">
                    <strong>123</strong> posts
                  </p>
                </div>
                <div className="navbar-item">
                  <p className="control is-grouped">
                    <input className="input" type="text" placeholder="Find a post" />
                    <button className="button">
                      Search
                    </button>
                  </p>
                </div>
              </div>
              <div className="navbar-right">
                <p className="navbar-item">
                  <strong>All</strong>
                </p>
                <p className="navbar-item">
                  <a href="#">Published</a>
                </p>
                <p className="navbar-item">
                  <a href="#">Drafts</a>
                </p>
                <p className="navbar-item">
                  <a href="#">Deleted</a>
                </p>
                <p className="navbar-item">
                  <a className="button is-success">
                    New
                  </a>
                </p>
              </div>
            </nav>
          </div>
          {/* Main container */}
          <nav className="navbar">
            {/* Left side */}
            <div className="navbar-left">
              <div className="navbar-item">
                <p className="subtitle is-5">
                  <strong>123</strong> posts
                </p>
              </div>
              <div className="navbar-item">
                <p className="control is-grouped">
                  <input className="input" type="text" placeholder="Find a post" />
                  <button className="button">
                    Search
                  </button>
                </p>
              </div>
            </div>
            {/* Right side */}
            <div className="navbar-right">
              <p className="navbar-item"><strong>All</strong></p>
              <p className="navbar-item"><a href="#">Published</a></p>
              <p className="navbar-item"><a href="#">Drafts</a></p>
              <p className="navbar-item"><a href="#">Deleted</a></p>
              <p className="navbar-item"><a className="button is-success">New</a></p>
            </div>
          </nav>
          <hr />
          <h3 className="title">Centered navbar</h3>
          <div className="content">
            If you want a <strong>centered navbar</strong>, you can use as many <code>navbar-item</code> as you want, as long as they are <strong>direct</strong> children of the <code>navbar</code> container.
          </div>
          <div className="example">
            <nav className="navbar">
              <div className="navbar-item is-text-centered">
                <p className="heading">Tweets</p>
                <p className="title">3,456</p>
              </div>
              <div className="navbar-item is-text-centered">
                <p className="heading">Following</p>
                <p className="title">123</p>
              </div>
              <div className="navbar-item is-text-centered">
                <p className="heading">Followers</p>
                <p className="title">456K</p>
              </div>
              <div className="navbar-item is-text-centered">
                <p className="heading">Likes</p>
                <p className="title">789</p>
              </div>
            </nav>
          </div>
          <nav className="navbar">
            <div className="navbar-item is-text-centered">
              <p className="heading">Tweets</p>
              <p className="title">3,456</p>
            </div>
            <div className="navbar-item is-text-centered">
              <p className="heading">Following</p>
              <p className="title">123</p>
            </div>
            <div className="navbar-item is-text-centered">
              <p className="heading">Followers</p>
              <p className="title">456K</p>
            </div>
            <div className="navbar-item is-text-centered">
              <p className="heading">Likes</p>
              <p className="title">789</p>
            </div>
          </nav>
          <div className="example">
            <nav className="navbar">
              <p className="navbar-item is-text-centered">
                <a className="link is-info" href="#">Home</a>
              </p>
              <p className="navbar-item is-text-centered">
                <a className="link is-info" href="#">Menu</a>
              </p>
              <p className="navbar-item is-text-centered">
                <img src="{{ site.baseurl }}/images/bulma.png" alt style={{height: 33}} />
              </p>
              <p className="navbar-item is-text-centered">
                <a className="link is-info" href="#">Reservations</a>
              </p>
              <p className="navbar-item is-text-centered">
                <a className="link is-info" href="#">Contact</a>
              </p>
            </nav>
          </div>
          <nav className="navbar">
            <p className="navbar-item is-text-centered">
              <a className="link is-info" href="#">Home</a>
            </p>
            <p className="navbar-item is-text-centered">
              <a className="link is-info" href="#">Menu</a>
            </p>
            <p className="navbar-item is-text-centered">
              <img src="{{ site.baseurl }}/images/bulma.png" alt style={{height: 33}} />
            </p>
            <p className="navbar-item is-text-centered">
              <a className="link is-info" href="#">Reservations</a>
            </p>
            <p className="navbar-item is-text-centered">
              <a className="link is-info" href="#">Contact</a>
            </p>
          </nav>
        </div>
      </section>
    );
  }
}
