var React = require('react');
var skillClass = require('./skill.js');

var Skills = React.createClass({
	componentDidMount: function(){
		//console.log( 'skill module was mounted on DOM' );
		//var test = new skillClass();
		//test.init();
	},
	render: function(){
		return ( 
			<section className="row cust_skills" data-sr='enter bottom and move 50px and scale up 50% over 1.33s'>
				<div className="medium-6 column right">
					<div className="skills_grid">
						<span className="axis axis_0"></span>
						<span className="axis axis_1"></span>
						<span className="axis axis_2"></span>
						<span className="axis axis_3"></span>
						<span className="axis axis_4"></span>
					</div>
					{this.props.skills.map(function(skill, index){

						return (
							<div className={"cust_skill medium-12 column text-center cust_skill_" + index} key={skill.name}>
								<div className="animation_cust_skills"></div>
								<h4>{skill.name}</h4>
							</div>
						);
					})}
				</div>
			</section>
		);
	}	
});

module.exports = Skills;






