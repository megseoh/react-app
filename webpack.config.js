module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      ObservationList: 'app/components/ObservationList.jsx',
      AddObservation: 'app/components/AddObservation.jsx',
      ObservationDetails: 'app/components/ObservationDetails.jsx'
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
  }
};