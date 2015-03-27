var React = require('react');
var Header = require('./header.jsx');
var Tiger = require('./tiger.jsx');
var Me = require('./me.jsx');
var Divider = require('./divider.jsx');
var Projects = require('./projects.jsx');
var ProjectsMini = require('./mini.jsx');

var App = React.createClass({
	render: function(){
		var objProjects = [
			{name: 'Project 1', info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.'},
			{name: 'Project 2', info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.'}
		];
		return ( 
			<div className="wrapper">
				<Header/>
				<Tiger/>

				<Divider text="Who I am"/>
				<Me/>

				<Divider text="Projects"/>
				<Projects contents={objProjects} />
				<ProjectsMini />


			</div>

			
		);
	}	
});

module.exports = App;