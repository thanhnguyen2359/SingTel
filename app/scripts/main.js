'use strict';

;(function($,undefined){
	$.fn.carouselSlider = function(options){
		var defaults = {
			wrapperClass : 'carousel-inner',
			itemsClass : 'carousel-item',
			nextItemClass : 'carousel-next',
			prevItemClass : 'carousel-prev'
		},
		opts = $.extend({},defaults,options);

		var calculateTotalWidth = function(items){
			var totalWidth =0,i = items.length;
			while(--i >= 0){
				totalWidth += $(items[i]).outerWidth();
			}
			return totalWidth;
		}

		$(window).off('resize').on('resize',function(){
			$('.carousel').trigger("carousel-resize");
		});

		return $(this).each(function(){
			var elem = $(this),
				nextBtn = $("." + opts.nextItemClass,elem),
				prevBtn = $("." + opts.prevItemClass,elem),
				wrap = $("." + opts.wrapperClass,elem),
				items = $('.' + opts.itemsClass,elem),
				totalWidth = 0,
				unitWidth = $(items[0]).width(),
				index = 0;

			
			// Calculate total width of wrapper
			totalWidth = calculateTotalWidth(items);
			wrap.width(totalWidth);

			elem.off('carousel-resize').on('carousel-resize',function(){
				console.log('carousel-resize...');
				//Recalculate total width of wrapper
				unitWidth = $(items[0]).width();
				totalWidth = calculateTotalWidth(items);
				wrap.width(totalWidth);
			});
			nextBtn.off('click').on('click',function(){
				index = (++index < items.length) ? index : 0;
				wrap.animate({
					left: -1* unitWidth * index
				},800);

			});

			prevBtn.off('click').on('click',function(){
				index = (--index >= 0) ? index : items.length - 1; 
				wrap.animate({
					left: -1* unitWidth * index
				},800);
			});

		});
	}
})(window.jQuery);

(function($,undefined){
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

		$(window).off('scroll').on('scroll',function(){
			parralax($('.welcome-face'));
			parralax($('.face21'));
			parralax($('.face31'));
			parralax($('.face41'));

		});

		$(".carousel").carouselSlider();
	});


	function parralax(jElem){
		var scrollPos = $(window).scrollTop(),
            speed = 0.42,
            prevPos = jElem.data("origin-y");
        jElem.css("background-position-y", (prevPos + (scrollPos * speed)) + 'px');
	}

})(window.jQuery);