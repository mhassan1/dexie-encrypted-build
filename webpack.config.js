module.exports = (_, argv) => ({
  devtool: false,
  entry: {
    'dexie-encrypted': 'dexie-encrypted'
  },
  target: ['web', 'es5'],
  output: {
    filename: argv.mode === 'production' ? '[name].min.js' : '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  externals: ['dexie']
})
