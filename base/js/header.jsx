var React = require('react');

var Header = React.createClass({
	render: function(){
		return ( 
			<header className="contain-to-grid sticky cust_header">
				<nav className="top-bar" data-topbar>
					<ul className="left">
						<li>
							{/*
							<figure>	
								 <img src="" alt="logo front end tiger" />
							</figure>
							*/}
						</li>
					</ul>
					<ul className="title-area right">
						<li className="name">
							<hgroup >
								<h1 className="site-title">
									<a href="#"><strong>Daniel Larrotta</strong> Front End developer</a>
								</h1>
							</hgroup>
							{/*
							<div class="row collapse">
								<hgroup className="large-8 small-9 columns">
									<h1 className="site-title">
										<a href="#">Daniel Larrotta - Front End developer</a>
									</h1>
								</hgroup>
							</div>
							
							<div className="large-4 small-3 columns">
								<div className="switch">
									<input id="availableCheckboxSwitch" type="checkbox" disabled value="1" />
									<label for="availableCheckboxSwitch"></label>
								</div> 
							</div> 
							*/}
						</li>
						
					</ul>
				</nav>

			</header>

			
		);
	}	
});

module.exports = Header;