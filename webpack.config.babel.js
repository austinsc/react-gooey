import * as path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import SystemBellPlugin from 'system-bell-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import Dashboard from 'webpack-dashboard';
import DashboardPlugin from 'webpack-dashboard/plugin';
import merge from 'webpack-merge';
const pkg = require('./package.json');

const TARGET = process.env.npm_lifecycle_event;
const ROOT_PATH = __dirname;
const config = {
  paths: {
    dist: path.join(ROOT_PATH, 'dist'),
    src: path.join(ROOT_PATH, 'src'),
    docs: path.join(ROOT_PATH, 'docs'),
    tests: path.join(ROOT_PATH, 'tests')
  },
  filename: 'react-gooey',
  library: 'Gooey'
};
process.env.BABEL_ENV = TARGET;

const extractCSS = new ExtractTextPlugin('styles-css.css');
const extractSCSS = new ExtractTextPlugin('styles-sass.css');

const common = {
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass', '.png', '.jpg']
  },
  module: {
    // preLoaders: [{
    //   test: /\.jsx?$/,
    //   loaders: ['eslint'],
    //   include: [
    //     config.paths.docs,
    //     config.paths.src
    //   ]
    // }],
    rules: [{
      test: /\.md$/,
      use: [/*{loader: 'text-loader'}, */{loader: path.join(config.paths.docs, 'loader')}, {loader: 'raw-loader'}]
    }, {
      test: /\.png$/,
      use: [{loader: 'url-loader?limit=100000&mimetype=image/png'}],
      include: config.paths.docs
    }, {
      test: /\.jpe?g$|\.gif$|\.png$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[hash:6].[ext]'
        }
      }]
    }, {
      test: /\.json$/,
      use: [{loader: 'json-loader'}],
      include: path.join(ROOT_PATH, 'package.json')
    }, {
      test: /\.css$/,
      use: extractCSS.extract({fallback: 'style-loader', use: ['css-loader']})
    }, {
      test: /\.scss$/i,
      use: extractSCSS.extract({
        fallback: 'style-loader',
        use: [
          {loader: 'css-loader'},
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(ROOT_PATH, 'node_modules')]
            }
          }
        ]
      })
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: [{
        loader: 'url-loader',
        options: {
          name: '[name].[hash:6].[ext]',
          limit: 10000,
          mimetype: 'application/font-woff'
        }
      }]
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[hash:6].[ext]'
        }
      }]
    }]
  },
  plugins: [
    new SystemBellPlugin(),
    extractCSS,
    extractSCSS
  ]
};

const siteCommon = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(ROOT_PATH, 'docs/index_template.ejs'),
      inject: false,
      title: pkg.name,
      appMountId: 'app'
    }),
    new webpack.DefinePlugin({
      NAME: JSON.stringify(pkg.name),
      USER: JSON.stringify(pkg.user),
      VERSION: JSON.stringify(pkg.version)
    })
  ]
};

if(TARGET === 'start' || TARGET === 'dev') {
  const dashboard = new Dashboard();

  module.exports = merge(common, siteCommon, {
    devtool: 'eval-source-map',
    entry: {
      docs: [config.paths.docs]
    },
    plugins: [
      new DashboardPlugin(dashboard.setData),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      rules: [{
        test: /\.jsx?$/,
        use: [{loader: 'babel-loader?cacheDirectory'}],
        include: [
          config.paths.docs,
          config.paths.src
        ]
      }]
    },
    devServer: {
      historyApiFallback: true,
      quiet: true,
      hot: true,
      inline: true,
      host: process.env.HOST,
      port: process.env.PORT,
      stats: {
        colors: true,
        hash: false,
        timings: false,
        assets: true,
        chunks: false,
        chunkModules: false,
        modules: false,
        children: true
      }
    }
  });
}

function NamedModulesPlugin(options) {
  this.options = options || {};
}
NamedModulesPlugin.prototype.apply = function(compiler) {
  compiler.plugin('compilation', function(compilation) {
    compilation.plugin('before-module-ids', function(modules) {
      modules.forEach(function(module) {
        let id;
        if(module.id === null && module.libIdent) {
          id = module.libIdent({
            context: this.options.context || compiler.options.context
          });

          // Skip CSS files since those go through ExtractTextPlugin
          if(!id.endsWith('.css')) {
            module.id = id; // eslint-disable-line no-param-reassign
          }
        }
      }, this);
    }.bind(this));
  }.bind(this));
};

if(TARGET === 'gh-pages' || TARGET === 'gh-pages:stats') {
  module.exports = merge(common, siteCommon, {
    entry: {
      app: config.paths.docs,
      vendors: [
        'react',
        'react-dom'
      ]
    },
    output: {
      path: path.resolve(ROOT_PATH, 'gh-pages'),
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js'
    },
    plugins: [
      new CleanWebpackPlugin(['gh-pages'], {
        verbose: false
      }),
      // new ExtractTextPlugin('[name].[chunkhash].css'),
      new webpack.DefinePlugin({
        // This affects the react lib size
        'process.env.NODE_ENV': '"production"'
      }),
      new NamedModulesPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendors', 'manifest']
      })
    ],
    module: {
      rules: [{
        test: /\.jsx?$/,
        use: [{loader: 'babel-loader'}],
        include: [
          config.paths.docs,
          config.paths.src
        ]
      }]
    }
  });
}

// !TARGET === prepush hook for test
if(TARGET === 'test' || TARGET === 'test:tdd' || !TARGET) {
  module.exports = merge(common, {
    module: {
      rules: [{
        test: /\.jsx?$/,
        use: [{loader: 'isparta-loader'}, {loader: 'eslint-loader'}],
        enforce: 'pre',
        include: [
          config.paths.tests
        ]
      }, {
        test: /\.jsx?$/,
        use: [{loader: 'babel-loader?cacheDirectory'}],
        include: [
          config.paths.src,
          config.paths.tests
        ]
      }]
    }
  });
}

const distCommon = {
  devtool: 'source-map',
  output: {
    path: config.paths.dist,
    libraryTarget: 'umd',
    library: config.library
  },
  entry: config.paths.src,
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass', '.png', '.jpg']
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    }
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [{loader: 'babel-loader'}],
      include: config.paths.src
    }]
  },
  plugins: [
    new SystemBellPlugin()
  ]
};

if(TARGET === 'dist') {
  module.exports = merge(common, distCommon, {
    output: {
      filename: `${config.filename}.js`
    }
  });
}

if(TARGET === 'dist:min') {
  module.exports = merge(common, distCommon, {
    output: {
      filename: `${config.filename}.min.js`
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
}
