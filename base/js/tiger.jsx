var React = require('react');

var Tiger = React.createClass({
	render: function(){
		return ( 
			<section className="row complete_width cust_tiger">
				<figure className="img_container" data-sr="spin 180deg">
					<img src="app/img/tigre.png"/>	
				</figure>
				<h2>Lorem Ipsum</h2>
				<h2>Lorem Ipsum Lorem Ipsum</h2>
			</section>
		);
	}	
});

module.exports = Tiger;