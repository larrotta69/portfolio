var React = require('react');

var Skills = React.createClass({
	render: function(){
		return ( 
			<section className="row cust_skills" data-sr='enter bottom and move 50px and scale up 50% over 1.33s'>
				{this.props.skills.map(function(skill){

					return (
						<div className="medium-4 column text-center" key={skill.name}>
							<h4>{skill.name}</h4>
						</div>
					);
				})}
			</section>
		);
	}	
});

module.exports = Skills;



