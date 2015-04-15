var React = require('react');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Tiger = require('./tiger.jsx');
var Me = require('./me.jsx');
var Divider = require('./divider.jsx');
var Projects = require('./projects.jsx');
var ProjectsMini = require('./mini.jsx');
var Skills = require('./skills.jsx');
var AnimatedSkills = require('./animatedskills.jsx');
var Back = require('./back.jsx');

var App = React.createClass({
	render: function(){
		var objProjects = [
			{name: 'Casa Editorial El Tiempo', info: 'I worked on the redesign of its desktop website and the creation of the WebApp for mobile and tablet devices.', infoDos: 'We invest a lot of effort in cross-browsing and cross-device because it is a high consumer product in my country.', img: 'apptiempo.jpg'},
			{name: 'Chevrolet', info: 'These were a set of web and mobile applications to improve the process of buying and selling cars at the Salón Internacional Del Automóvil 2014.', infoDos: ' I performed real-time applications for services as catalogs, interactive videos, customer communication with sellers, notifications for journalists, data reporting dashboard  and interaction with social networks. Technologies such as Node.js, Socket.io, Angular.js and PhoneGap were used.', img: 'appchevrolet.jpg'},
			{name: 'Odontocitas', info: 'Odontocitas.com is a responsive web application to schedule dental appointments for users. It also serves as a control tool and medical history, reminders for users, billing and customer management to the dentists.', infoDos: ' It use technologies such as Ruby on Rails, Backbone.js and SASS.', img: 'appodontocitas.jpg'}
		];
		var objMiniProjects = [
			{name: 'Educlic.com', img: 'educlic.jpg'},
			{name: 'Colmedia.com', img: 'cmc.jpg'},
			{name: 'Quientienemisdatos.com', img: 'misdatos.jpg'},
			{name: 'Garnier.com', img: 'garnier.jpg'}
		];
		var objBackTechs = [
			{name: 'Ruby', info: 'Rails Framework'},
			{name: 'PHP', info: 'Drupal CMS, Wordpress CMS'},
			{name: 'Python', info: 'Django Framework'},
			{name: '.NET', info: 'SiteCore CMS'}
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
		var objSkillsEnhanced = [
			{
				name: 'JS',
				list: [
					{value: 'JavaScript'},
					{value: 'JQuery'},
					{value: 'AJAX'},
					{value: 'JSON'},
					{value: 'Browserify'},
					{value: 'PhoneGap'},
					{value: 'ReactJS'},
					{value: 'NodeJS'},
					{value: 'AngularJS'},
					{value: 'Gulp'},
					{value: 'Grunt'}
				]
			},
			{
				name: 'HTML5',
				list: [
					{value: 'HTML5'},
					{value: 'Semantic'},
					{value: 'HAML'},
					{value: 'Jade'},
					{value: 'ZURB Foundation'},
					{value: 'Twitter Bootstrap'},
					{value: 'Local Storage'}
				]
			},
			{
				name: 'CSS3',
				list: [
					{value: 'CSS3'},
					{value: 'SASS'},
					{value: 'LESS'},
					{value: 'COMPASS'},
					{value: 'Animation'}
				]
			}
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
					{/*
					<Divider text="Skills"/>
					<Skills skills={objSkills}/>
					*/}

					<Divider text="Skills"/>
					<AnimatedSkills skills={objSkillsEnhanced}/>

					<Divider text="Back-end integration experience"/>
					<Back techs={objBackTechs}/>

					<Footer />
				</div>
			</div>

		);
	}	
});



module.exports = App;