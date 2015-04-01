var React = require('react');
var $ = require('jquery-browserify');

var foundation = require('./foundation.min.js');
var velocity = require('./vendor/velocity.min.js');
var sr = require('./vendor/scrollReveal.min.js');
var skrollr = require('./vendor/skrollr.min.js');



/*mine*/
var App = require('./app.jsx');



React.render(<App/>, document.getElementById('main'));
$(document).foundation();
window.sr = new scrollReveal({
    mobile: true
});
var s = skrollr.init();
//console.log(s);
//React.render(<Tiger/>, document.getElementById('main'));



