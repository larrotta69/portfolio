var React = require('react');

var Projects = React.createClass({
	render: function(){
		
		return (
			<section className="row cust_project"> 
				{this.props.contents.map(function(content){

					return (
						<article className="medium-12 column" key={content.name}  data-sr='enter bottom and move 50px and scale up 50% over 1.33s'>

							<div className="medium-6 column text-center">
								<figure>
									<img className="cust_project_img" src={"app/img/projects/"+content.img}/>
								</figure>
							</div>
							
							<div className="medium-6 column">
								<h4>Client:</h4>
								<h2>{content.name}</h2>
								<h4>Project:</h4>
								<p>{content.info}</p>
							</div>

						</article>
					);
				})}
			</section>
		);
	}	
});

module.exports = Projects;



