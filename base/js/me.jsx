var React = require('react');

var Me = React.createClass({
	render: function(){
		return ( 
			<section className="row cust_me">
				<div className="column medium-6 text-left" data-sr="enter top">
					<p>
						Lorem ipsum dolor sit amet, 
						consectetuer adipiscing elit. Donec odio. 
						Quisque volutpat mattis eros. 
						Nullam malesuada erat ut turpis. Suspendisse urna nibh, 
						viverra non, semper suscipit, posuere a, pede.
					</p>
				</div>
				<div className="column medium-6 text-left" data-sr="flip 45deg">
					<p>
						Lorem ipsum dolor sit amet, 
						consectetuer adipiscing elit. Donec odio. 
						Quisque volutpat mattis eros. 
						Nullam malesuada erat ut turpis. Suspendisse urna nibh, 
						viverra non, semper suscipit, posuere a, pede.
					</p>
				</div>
			</section>
		);
	}	
});

module.exports = Me;



