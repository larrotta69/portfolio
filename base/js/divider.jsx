var React = require('react');

var Divider = React.createClass({
	render: function(){
		return ( 
			<div className="divider small-12 column text-center">
				<h2>{this.props.text}</h2>
			</div>
		);
	}	
});

module.exports = Divider;



