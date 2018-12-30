const path = require('path');

module.exports = {
	mode: 'development',
  	entry: path.resolve(__dirname, './app/assets/scriptss/App.js'),

	output: {
	   path: path.resolve(__dirname, './app/temp/scripts'),
	   filename: "App.js"
	}

}