module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
    // path: '/',
    // filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      App: 'app/components/App.js',
      AddNote: 'app/components/AddNote.js',
      CommentList: 'app/components/CommentList.js',
      EditNote: 'app/components/EditNote.js',
      Field: 'app/components/Field.js',
      Login: 'app/components/Login.js',
      Nav: 'app/components/Nav.js',
      NoteDetails: 'app/components/NoteDetails.js',
      NoteField: 'app/components/NoteField.js',
      NoteList: 'app/components/NoteList.js'
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