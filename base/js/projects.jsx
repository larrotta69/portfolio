var React = require('react');

var Projects = React.createClass({
	render: function(){

		return (
			<section className="row cust_project">
				{this.props.contents.map(function(content){

					return (
						<article className={"medium-12 column "+content.name} key={content.name}  data-sr='enter bottom and move 50px and scale up 50% over 1.33s'>

							<div className="medium-6 column text-center">
								<figure>
									<img className="cust_project_img" src={"app/img/projects/"+content.img}/>
								</figure>
							</div>

							<div className="medium-4 column">
								<h2>{content.name}</h2>
							</div>

						</article>
					);
				})}
			</section>
		);
	}
});

module.exports = Projects;
