var React = require('react');

var Divider = React.createClass({
	render: function(){
		return ( 
			<div className="divider small-12 column text-center" data-sr='enter bottom and move 50px and scale up 50% over 1.33s'>
				<h2 className="text_dark_green">{this.props.text}</h2>
			</div>
		);
	}	
});

module.exports = Divider;





