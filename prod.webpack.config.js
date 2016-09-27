/**
 * start the Build-process with
 * WEBPACK_CONFIG='build' webpack -p
 * Webpack.config for production Systems
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    resolve: {
        // Make sure, Webpack finds import'ed and require'd files specified without extension
        // so 'import Bla from './Bla' makes webpack to look for files 'Bla', 'Bla.js' and 'Bla.jsx'
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js', '.jsx']
    },
    entry:  [
        path.resolve(__dirname, 'src/main.js')
    ],
    output: {
        // output path
        path: path.resolve(__dirname, 'static/js'),
        //path: path.resolve(__dirname, 'dist'),
        publicPath: '/',

        // Name of the resulting bundle file that
        filename: 'main.js'
    },
    module: {
        loaders: [
            // JSX/ES6 handling with babel
            // * babel-loader: uses Babel to transform your JSX/ES6 JavaScript to ECMAScript 5
            // * react-hot: Reloads your React Component on code changes without loosing the application state
            {	test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel']},
            // CSS handling
            // * style-loader: Embeds referenced CSS code using a <style>-element in your index.html file
            // * css-loader: Parses the actual CSS files referenced from your code. Modifies url()-statements in your
            //   CSS files to match images handled by url loader (see below)
            { test: /\.css$/, loader: 'style!css' },

            // Image Handling
            // * url-loader: Returns all referenced png/jpg files up to the specified limit as inline Data Url
            //   or - if above that limit - copies the file to your output directory and returns the url to that copied file
            //   Both values can be used for example for the 'src' attribute on an <img> element
            {	test: /\.(png|jpg)$/,	loader: 'url?limit=25000'	},

            // JSon file handling
            // * Enables you to 'require'/'import' json files from your JS files
            {	test: /\.json$/, loader: 'json-loader' }
        ]
    },
    plugins: [
        new webpack.IgnorePlugin(/^(buffertools)$/),

        // Avoid publishing files when compilation failed
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    ],
    stats: {
        // Nice colored output
        colors: true
    }
};