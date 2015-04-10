var React = require('react');

var Back = React.createClass({
	render: function(){
		return ( 
			<section className="row cust_back" data-sr='enter bottom and move 50px and scale up 50% over 1.33s'>
				{this.props.techs.map(function(tech){

					return (
						<div className="small-6 medium-3 column text-center" key={tech.name}>
							<h4>{tech.name}</h4>
							<p>{tech.info}</p>
						</div>
					);
				})}
			</section>
		);
	}	
});

module.exports = Back;



