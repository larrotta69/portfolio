var React = require('react');

var Tiger = React.createClass({
	render: function(){
		var optionalElement;

	    if (window.innerWidth >= 600 ) {
	        optionalElement = (
	        	<figure className="img_container" data-anchor-target=".cust_tiger_div" data-start="top: 70px; left: 0%;" data-top-bottom="top: 10px; left: -88%;">
					<img src="app/img/tigre_50.png"  data-anchor-target=".cust_tiger_div" data-start="width: 35%" data-top-bottom="width: 10%"/>
				</figure>
			);
	        
	    }
	    else{
	        optionalElement = (
	        	<figure className="img_container">
					<img src="app/img/tigre_50.png"/>	
				</figure>
			);
	    }

		return ( 


			<div>
				<section className="row complete_width cust_tiger">
					<div className="cust_tiger_div">	
						{optionalElement}
					</div>
					
				</section>
				<div className="cust_tiger_text text-center">
					<h2 className="text_gray_dark"><strong>The painter has the Universe</strong></h2>
					<h2 className="text_gray_dark"><strong>in his mind and hands.</strong></h2>
				</div>
			</div>
		);
	}	
});

module.exports = Tiger;