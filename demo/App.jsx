import React, {Component} from 'react';
import NavBarPage from './NavBarPage.jsx';
import bulmaImage from './images/bulma-white.png';

export default class App extends Component {
  render() {
    return (
      <div>
        <section className="hero is-info is-left is-bold">
          <div className="hero-header">
            <header className="header">
              <div className="container">
                <div className="header-left">
                  <a className="header-item" href="{{ site.baseurl }}/">
                    <img src={bulmaImage} alt="{{ site.title }}"/>
                  </a>
                </div>
                <span className="header-toggle">
                  <span />
                  <span />
                  <span />
                </span>
                <div className="header-right header-menu">
                  <span className="header-item">
                    <a>Home</a>
                      </span>
                  <span className="header-item">
                    <a className="is-active">Documentation</a>
                    </span>
                  <span className="header-item">
                    <a>Blog</a>
                  </span>
                  <span className="header-item">
                    <a className="button is-info is-outlined is-inverted" href="{{ site.github }}">
                      <i className="fa fa-github"/>
                      GitHub
                    </a>
                    <a className="button is-info is-outlined is-inverted" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://bulma.io/" href="https://twitter.com/intent/tweet?text={{ 'Bulma: a modern CSS framework based on Flebox' | urlencode }}&url=http://bulma.io/&via=jgthms">
                      <span className="fa fa-twitter"/>
                      Tweet
                    </a>
                  </span>
                </div>
              </div>
            </header>
          </div>
          <div className="hero-content">
            <div className="container">
              <p className="title">
                Documentation
              </p>
              <p className="subtitle">
                Everything you need to <strong>create a website</strong> with Bulma
              </p>
            </div>
          </div>
          <div className="hero-footer">
            <nav className="tabs is-boxed">
              <div className="container">
                <ul>
                  <li>
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li className="is-active">
                    <a>Navbar</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <NavBarPage />
        <section className="hero is-primary is-bold">
          <div className="hero-content">
            <div className="container">
              {/* Begin MailChimp Signup Form */}
              <div className="columns is-vcentered">
                <div className="column is-third is-left">
                  <p className="title">Bulma <strong>Newsletter</strong></p>
                  <p className="subtitle">Get notified when v1 is ready!</p>
                </div>
                <div className="column">
                  <form>
                    <div>
                      <div className="control has-icon is-horizontal">
                        <input type="email" className="input is-flat required email" placeholder="Email Address" required/>
                        <i className="fa fa-envelope"/>
                        <button className="button is-primary is-outlined is-inverted">Subscribe</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/*End mc_embed_signup*/}
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="content is-text-centered">
              <p>
                <strong href="http://purl.org/dc/dcmitype/Text" property="dct:title">Bulma</strong> by
                <a>Jeremy Thomas</a>. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC
                BY-NC-SA 4.0</a>.
              </p>
              <div>
                <iframe className="github-btn" src="https://ghbtns.com/github-btn.html?user=jgthms&repo=bulma&type=star&count=true" allowTransparency="true" frameBorder={0} scrolling={0} width="105px" height="20px"></iframe>
                <a href="https://twitter.com/jgthms" className="twitter-follow-button" data-show-count="true" data-lang="en">@jgthms</a>
                <a href="https://twitter.com/share" className="twitter-share-button" data-text="{{ site.title }}" data-url="{{ site.url }}" data-count="horizontal" data-via="jgthms" data-related="jgthms:Creator of Bulma">Tweet</a>
              </div>
              <p>
                Want to learn how to <strong>create a website</strong>? Read <a href="http://marksheet.io">MarkSheet: a free HTML &amp; CSS tutorial</a>.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
