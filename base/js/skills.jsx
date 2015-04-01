var React = require('react');
var skillClass = require('./skill.js');

var Skills = React.createClass({
	componentDidMount: function(){
		console.log( 'skill module was mounted on DOM' );
		var test = new skillClass();
		test.init();
	},
	render: function(){
		return ( 
			<section className="row cust_skills" data-sr='enter bottom and move 50px and scale up 50% over 1.33s'>
				{this.props.skills.map(function(skill){

					return (
						<div className={"cust_skill medium-4 column text-center " + skill.name} key={skill.name}>
							<h4>{skill.name}</h4>
						</div>
					);
				})}
			</section>
		);
	}	
});

module.exports = Skills;






