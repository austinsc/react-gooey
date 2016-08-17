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

const dashboard = new Dashboard();

const common = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss', '.sass', '.png', '.jpg']
  },
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      loaders: ['eslint'],
      include: [
        config.paths.docs,
        config.paths.src
      ]
    }],
    loaders: [{
      test: /\.md$/,
      loaders: ['catalog/lib/loader', 'raw']
    }, {
      test: /\.png$/,
      loader: 'url?limit=100000&mimetype=image/png',
      include: config.paths.docs
    }, {
      test: /\.jpg$/,
      loader: 'file',
      include: config.paths.docs
    }, {
      test: /\.json$/,
      loader: 'json',
      include: path.join(ROOT_PATH, 'package.json')
    }, {
      test: /\.css$/,
      loaders: ['style', 'css']
    }, {
      test: /\.scss$/i,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url?name=[name].[hash:6].[ext]&limit=10000&minetype=application/font-woff'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file?name=[name].[hash:6].[ext]'
    }]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, 'node_modules')]
  },
  plugins: [
    new DashboardPlugin(dashboard.setData),
    new SystemBellPlugin()
  ]
};

const siteCommon = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(ROOT_PATH, 'docs/index_template.ejs'),
      // template: require('html-webpack-template'), // eslint-disable-line global-require
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
  module.exports = merge(common, siteCommon, {
    devtool: 'eval-source-map',
    entry: {
      docs: [config.paths.docs]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
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
      progress: true,
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
      path: './gh-pages',
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js'
    },
    plugins: [
      new CleanWebpackPlugin(['gh-pages'], {
        verbose: false
      }),
      new ExtractTextPlugin('[name].[chunkhash].css'),
      new webpack.DefinePlugin({
        // This affects the react lib size
        'process.env.NODE_ENV': '"production"'
      }),
      new NamedModulesPlugin(),
      new webpack.optimize.DedupePlugin(),
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
      loaders: [{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      }, {
        test: /\.jsx?$/,
        loaders: ['babel'],
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
      preLoaders: [{
        test: /\.jsx?$/,
        loaders: ['isparta', 'eslint'],
        include: [
          config.paths.tests
        ]
      }],
      loaders: [{
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
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
    extensions: ['', '.js', '.jsx', '.css', '.scss', '.sass', '.png', '.jpg']
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
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
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
