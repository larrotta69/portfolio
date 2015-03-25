var React = require('react');
var $ = require('jquery-browserify');
var foundation = require('./foundation.min.js');
var sr = require('./vendor/scrollReveal.min.js');

/*mine*/
var App = require('./app.jsx');



React.render(<App/>, document.getElementById('main'));
$(document).foundation();
window.sr = new scrollReveal();
//React.render(<Tiger/>, document.getElementById('main'));

