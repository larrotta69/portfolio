var React = require('react');
var Header = require('./header.jsx');
var Tiger = require('./tiger.jsx');
var Me = require('./me.jsx');

var App = React.createClass({
	render: function(){
		return ( 
			<div className="wrapper">
				<Header/>
				<Tiger/>
				<Me/>
			</div>

			
		);
	}	
});

module.exports = App;