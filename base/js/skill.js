function Skill(){

}
Skill.prototype.init = function(){

};
Skill.prototype.isScrolledIntoView = function(elem){
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};


Skill.prototype.init = function(){
	console.log ( $('body') );
	var self = this;

	$(window).scroll(function () {
		if (self.isScrolledIntoView('.HTML5'))
			$(".cust_skill").velocity({ backgroundColor: '#50e3c2', color: '#fff' }, 1000);	

	});
	
};
module.exports = Skill;



