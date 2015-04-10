var React = require('react');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Tiger = require('./tiger.jsx');
var Me = require('./me.jsx');
var Divider = require('./divider.jsx');
var Projects = require('./projects.jsx');
var ProjectsMini = require('./mini.jsx');
var Skills = require('./skills.jsx');
var Back = require('./back.jsx');

var App = React.createClass({
	render: function(){
		var objProjects = [
			{name: 'Project 1', info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.', img: 'apptiempo.jpg'},
			{name: 'Project 2', info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.', img: 'appchevrolet.jpg'}
		];
		var objMiniProjects = [
			{name: 'Project 1', info: 'Lorem ipsum dolor sit amet'},
			{name: 'Project 2', info: 'Lorem ipsum dolor sit amet'},
			{name: 'Project 3', info: 'Lorem ipsum dolor sit amet'},
			{name: 'Project 4', info: 'Lorem ipsum dolor sit amet'}
		];
		var objBackTechs = [
			{name: 'RoR', info: 'Lorem ipsum dolor sit amet'},
			{name: 'PHP', info: 'Lorem ipsum dolor sit amet'},
			{name: 'Python', info: 'Lorem ipsum dolor sit amet'},
			{name: '.NET', info: 'Lorem ipsum dolor sit amet'}
		];
		var objSkills = [
			{name: 'HTML5'},
			{name: 'JavaScript'},
			{name: 'CSS3'},
			{name: 'Animation (CSS, JS)'},
			{name: 'Browserify'},
			{name: 'PhoneGap'},
			{name: 'Gulp'},
			{name: 'SASS'},
			{name: 'React.js'}
		];
		return ( 
			<div className="wrapper">
				<Header />
				<div id="skrollr-body">
					<Tiger />

					<Divider text="Who I am"/>
					<Me/>

					<Divider text="Projects"/>
					<Projects contents={objProjects} />
					<ProjectsMini projects={objMiniProjects} />

					<Divider text="Skills"/>
					<Skills skills={objSkills}/>

					<Divider text="Back-end integration experience"/>
					<Back techs={objBackTechs}/>

					<Footer />
				</div>
			</div>

		);
	}	
});

module.exports = App;