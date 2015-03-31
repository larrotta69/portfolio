var React = require('react');

var MiniProjects = React.createClass({
	render: function(){
		
		return (
			<section className="row cust_miniproject" data-sr='enter bottom and move 50px and scale up 50% over 1.33s'> 
				{this.props.projects.map(function(project){

					return (
						<div className="medium-3 column text-center" key={project.name}>
							<div className="circle">
								<div className="circle_mini">
									<h4>Text</h4>
								</div>
							</div>
						</div>
					);
				})}
			</section>
		);
	}	
});

module.exports = MiniProjects;



