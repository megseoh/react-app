var express = require('express');

//Create our app
var app = express();

var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');

var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/notes');
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/notes");

var Promise = require("bluebird");

var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Serve bundle.js
app.use(webpackMiddleware(webpack(require('./webpack.config.js'))));

// Serve your API assets here. You'll need to include the note route file.
app.use(express.static('public'));

// Serve your static assets here. You'll need to use express.static middleware.
app.use('/app/api/notes', require('./app/api/notes'));
require('./app/api/users/model');

// If none of the above matches, serve public/index.html.
app.get('*', (req, res) => {
	console.log("serving index.html");
	res.sendFile(__dirname + '/public/index.html');
	}
);

// app.listen(8081, function() {
// 	console.log("Express server is running on port 8081");
// });
app.listen(process.env.PORT || 8081);