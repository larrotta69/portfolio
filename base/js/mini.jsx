var React = require('react');

var MiniProjects = React.createClass({
	render: function(){
		
		return (
			<section className="row cust_miniproject" data-sr='enter bottom and move 50px and scale up 50% over 1.33s'> 
				{this.props.projects.map(function(project){

					return (
						<div className="small-6 medium-3 column text-center" key={project.name}>
							<div className="circle">
								<img src={"app/img/projects/"+project.img} alt={project.name}/>
							</div>
							<h4>{project.name}</h4>
						</div>
					);
				})}
			</section>
		);
	}	
});

module.exports = MiniProjects;



