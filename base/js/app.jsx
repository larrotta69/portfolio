var React = require('react');
var Header = require('./header.jsx');
var Tiger = require('./tiger.jsx');

var App = React.createClass({
	render: function(){
		return ( 
			<div className="wrapper">
				<Header/>
				<Tiger/>
			</div>

			
		);
	}	
});

module.exports = App;