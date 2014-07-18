'use strict';

;(function($,undefined){
	$(document).ready(function(){
		var menus = $('.nav-bar-toggle'),
			intro = $('.intro'),
			menuStatus = false;
		$('.nav-bar-btn').off('click').on('click',function(e){
			e.preventDefault();
			if(menuStatus) {
				intro.delay(1600).removeClass('intro-expand');
				menus.hide(500);
				
			}else{
				intro.delay(1600).addClass('intro-expand');
				menus.show(500);			
			}
			menuStatus = !menuStatus;
		});
	});
})(window.jQuery);