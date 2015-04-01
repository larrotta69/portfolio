var React = require('react');

var Footer = React.createClass({
	render: function(){
		return ( 
			<footer className="cust_footer">

				<div className="column small-6 text-center">
					<ul className="social no-bullet">

						<li className="social_item link">	
							<a href="https://www.linkedin.com/in/larrotta69" target="_blank">
								<img src="app/img/linkedin.svg" />
							</a>
						</li>
						<li className="social_item behance">
							<a href="https://www.behance.net/larrotta" target="_blank">
								<img src="app/img/behance.svg" />
							</a>
						</li>
						<li className="social_item mail">
							<a href="https://github.com/larrotta69" target="_blank">
								<img src="app/img/github.svg" />
							</a>
						</li>

					</ul>
				</div>
				<div className="column small-6 text-right cust_pant_div">	
					<img src="app/img/pantera.png"  />	
				</div>

			</footer>
		);
	}	
});

module.exports = Footer;


