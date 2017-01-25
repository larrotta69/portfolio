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
	render: function () {

		var objProjects = [
            {name: 'White House Heads Up',img: 'appheadsup.png'},
            {name: 'Dell Secure Works', img: 'appsecureworks.png'},
            {name: 'AMC Theatres', img: 'appamctheatres.png'},
            {name: 'Sprout', img: 'appsprout.png'},
            {name: 'Pulte Homes', img: 'apppultehomes.png'}
		];
		var objMiniProjects = [
            {name: 'Casa Editorial El Tiempo', img: 'eltiempo.png'},
            {name: 'Chevrolet', img: 'chevrolet.jpg'},
            {name: 'Garnier', img: 'garnier.jpg'},
            {name: 'Educlic', img: 'educlic.jpg'},
            {name: 'Odontocitas', img: 'odontocitas.png'},
			{name: 'Colmedia', img: 'cmc.jpg'},
			{name: 'Quientienemisdatos', img: 'misdatos.jpg'},
            {name: 'Summa', img: 'summa.png'}

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
                    {value: 'ECMA2015'},
                    {value: 'ReactJS - JSX'},
                    {value: 'Gulp'},
                    {value: 'WebPack'},
					{value: 'JQuery'},
					{value: 'AJAX'},
					{value: 'JSON'},
					{value: 'Browserify'},
					{value: 'PhoneGap'},
					{value: 'NodeJS'},
					{value: 'Grunt'}
				]
			},
			{
				name: 'HTML5',
				list: [
					{value: 'HTML5'},
					{value: 'Semantic'},
                    {value: 'HandlebarsJS'},
					{value: 'HAML'},
					{value: 'Jade'},
					{value: 'ZURB Foundation'},
					{value: 'Bootstrap'},
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
