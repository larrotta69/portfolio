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

	var self = this;
	/*
	$(window).scroll(function () {
		if (self.isScrolledIntoView('.cust_skill_0')){
			$(".cust_skill_0 .animation_cust_skills").velocity({ left: '90%' }, 1000);
			$(".cust_skill_1 .animation_cust_skills").velocity({ left: '80%' }, 1000);
			$(".cust_skill_2 .animation_cust_skills").velocity({ left: '95%' }, 1000);
			$(".cust_skill_3 .animation_cust_skills").velocity({ left: '80%' }, 1000);
			$(".cust_skill_4 .animation_cust_skills").velocity({ left: '70%' }, 1000);
			$(".cust_skill_5 .animation_cust_skills").velocity({ left: '85%' }, 1000);
			$(".cust_skill_6 .animation_cust_skills").velocity({ left: '80%' }, 1000);
			$(".cust_skill_7 .animation_cust_skills").velocity({ left: '95%' }, 1000);
			$(".cust_skill_8 .animation_cust_skills").velocity({ left: '85%' }, 1000);
		}
	});
		$(window).scroll(function () {
		if (self.isScrolledIntoView('.cust_animated_skills')){
			$(".btn").addClass('animated');
			setTimeout(function(){	
				$(".btn").removeClass('animated');
			}, 10000);
		}
	});
	*/

	$('[data-type="modal-trigger"]').on('click', function() {
	    var actionBtn = $(this);
	    var modalbg = actionBtn.next('.cd-modal-bg');
	    var modal = actionBtn.siblings('.cd-modal');
	        
	    actionBtn.toggleClass('to-circle');

	    setTimeout(function(){
	    	modalbg.addClass('visible');
	    	modalbg.velocity({ scale: 18, backgroundColor: "#17B68E" }, 500, "easeInCubic" ,function() { 
	    		modal.addClass('visible');
	    		$('body').css('overflow','hidden');
	    	});
	    }, 300);

	    modal.siblings('.cd-modal-close').on('click', function(){
	    	modal.removeClass('visible');
	    	actionBtn.removeClass('to-circle');
	    	modalbg.velocity({ scale: 1, backgroundColor: "#457183" }, 1250, "easeOutExpo", function() { 
	    		modalbg.removeClass('visible');
	    		$('body').css('overflow','initial');
	    	});
	    });
	    
	    
	});	

};
module.exports = Skill;






