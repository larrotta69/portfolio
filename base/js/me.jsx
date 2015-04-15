var React = require('react');

var Me = React.createClass({
	render: function(){
		return ( 
			<section className="row cust_me" >
				<div className="column medium-6 text-left">
					<p>
						As a graduate of multimedia engineering and passionate guy about arts, science and technology I have been working as Front End developer (I think it combines the three disciplines).
						<br/><br/>I am a prominent person in interpersonal relationships and ability to
						leadership based on teamwork to achieve goals; loving for self-learning and commitment.
					</p>
				</div>
				<div className="column medium-6 text-left">
					<p>
						I am from Bogotá but I am working for international clients and companies on Mobile and Web applications.
						<br/><br/>
						I am able to provide solutions from engineering to solve problems that have great ideas using latest technologies like HTML5, CSS3 and the powerful JavaScript.
					</p>
				</div>
			</section>
		);
	}	
});

module.exports = Me;





