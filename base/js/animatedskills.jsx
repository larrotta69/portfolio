var React = require('react');
var skillClass = require('./skill.js');

var AnimatedSkills = React.createClass({
	componentDidMount: function(){
		console.log( 'skill module was mounted on DOM' );
		var test = new skillClass();
		test.init();
	},
	render: function(){
		return ( 
			<section className="row cust_animated_skills" data-sr='enter bottom and move 50px and scale up 50% over 1.33s'>

				{this.props.skills.map(function(skill, index){
					return(
						<div className="cd-section column medium-4">
							<div className="cd-modal-action">
								<a href="#0" className="btn" data-type="modal-trigger">{skill.name}</a>
								<span className="cd-modal-bg"></span>
								<div className="cd-modal">
									<div className="cd-modal-content text-center">
									{skill.list.map(function(value){
										return(
											<p>
												{value}
											</p>
										);
									})}
										
									</div>
								</div>
								<a href="#0" className="cd-modal-close">X</a>
							</div>
						</div>
					);
					})
				}
				

			</section>
		);
	}	
});

module.exports = AnimatedSkills;
