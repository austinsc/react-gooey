/* eslint-disable key-spacing */

const black = 'hsl(0, 0%, 4%)';
const blackbis = 'hsl(0, 0%, 7%)';
const blackter = 'hsl(0, 0%, 14%)';
const greydarker = 'hsl(0, 0%, 21%)';
const greydark = 'hsl(0, 0%, 29%)';
const grey = 'hsl(0, 0%, 48%)';
const greylight = 'hsl(0, 0%, 71%)';
const greylighter = 'hsl(0, 0%, 86%)';
const whiteter = 'hsl(0, 0%, 96%)';
const whitebis = 'hsl(0, 0%, 98%)';
const white = 'hsl(0, 0%, 100%)';
const orange = 'hsl(14,  100%, 53%)';
const yellow = 'hsl(48,  100%, 67%)';
const green = 'hsl(141, 71%,  48%)';
const turquoise = 'hsl(171, 100%, 41%)';
const blue = 'hsl(217, 71%,  53%)';
const purple = 'hsl(271, 100%, 71%)';
const red = 'hsl(348, 100%, 61%)';

export default {
  // Colors
  background: whiteter,
  textColor: greydark,
  codeColor: blue,
  linkColor: red,

  // NavigationBar background color, but also sometimes used as a foreground
  // or border color.
  lightColor: greylighter,

  // Used in PageHeader
  pageHeadingBackground: 'linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%)',
  pageHeadingTextColor:  white,

  // Used in Menu and PageHeader to make sure the top parts have
  // the same height.
  pageHeadingHeight: 200,

  // NavigationBar (links), ResponsiveTabs (tab text), Download specimen (title text).
  // Typography: headings.
  brandColor: turquoise,

  sidebarColor: white,
  sidebarColorActive: red,
  sidebarColorText: blackter,
  sidebarColorTextActive: turquoise,
  sidebarColorLine: greylighter,
  sidebarColorHeading: turquoise,

  // Used in the html, react, and image specimens.
  bgLight: '#F2F2F2',
  bgDark: '#333333',

  // Keys appear to be PrismJS token types.
  codeStyles: {
    tag: {color: '#FF5555'},
    punctuation: {color: '#535353'},
    script: {color: '#3F7397'},
    function: {color: '#FF5555'},
    keyword: {color: '#3F7397'},
    string: {color: '#00263E'}
  },

  // Patterns
  checkerboardPatternLight: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAF0lEQVQI12P4BAI/QICBFCaYBPNJYQIAkUZftTbC4sIAAAAASUVORK5CYII=',
  checkerboardPatternDark: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAFklEQVQI12NQBQF2EGAghQkmwXxSmADZJQiZ2ZZ46gAAAABJRU5ErkJggg==',

  // Fonts
  fontFamily: "'Roboto', sans-serif",
  fontHeading: "'Roboto', sans-serif",
  fontMono: "'Roboto Mono', monospace",

  // Base font size in pixels.
  baseFontSize: 16,

  // Modular scale ratio that is used to figure out all the different font sizes
  msRatio: 1.2
};
