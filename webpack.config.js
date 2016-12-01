module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Login: 'app/components/Login.js',
      Main: 'app/components/Main.js',
      Nav: 'app/components/Nav.js',
      ObservationList: 'app/components/ObservationList.js',
      AddObservation: 'app/components/AddObservation.js',
      ObservationDetails: 'app/components/ObservationDetails.js',
      ObservationFields: 'app/components/ObservationFields.js'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'stage-0', 'es2015']
        }
      },
      {
        test: /.scss$/,
        loaders: ["style", "css", "sass"],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
      historyApiFallback: true
  }
};