var React = require('react');
var $ = require('jquery-browserify');
var foundation = require('./foundation.min.js');

/*mine*/
var App = require('./app.jsx');


$(document).foundation();
React.render(<App/>, document.getElementById('main'));
//React.render(<Tiger/>, document.getElementById('main'));

