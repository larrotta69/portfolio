var React = require('react');

var Projects = React.createClass({
	render: function(){
		
		return (
			<section className="row cust_project"> 
				{this.props.contents.map(function(content){

					return (
						<article className="medium-12 column">

							<figure className="medium-8 column">
								<img className="cust_project_img" src=""/>
							</figure>
							<div className="medium-4 column">
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



