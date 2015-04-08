var React = require('react');

var Tiger = React.createClass({
	render: function(){

		return ( 
			<div>
				<section className="row complete_width cust_tiger">
					<div className="cust_tiger_div">	
						<figure className="img_container" >
							<img src="app/img/tigre_web.png"/>	
						</figure>
					</div>
					
				</section>
				<div className="cust_tiger_text text-center">
					<h2 className="text_gray_dark"><strong>Lorem Ipsum</strong></h2>
					<h2 className="text_gray_dark"><strong>Lorem Ipsum Lorem Ipsum</strong></h2>
				</div>
			</div>
		);
	}	
});

module.exports = Tiger;