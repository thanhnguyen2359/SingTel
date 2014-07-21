'use strict';

;(function($,undefined){
	$.fn.carouselSlider = function(options){
		var defaults = {
			wrapperClass : 'carousel',
			itemsClass : 'carousel-item',
			nextItemClass : 'carousel-next',
			prevItemClass : 'carousel-prev'
		},
		opts = $.extend({},defaults,options);

		var getShowItems = function(numberItems, step , index , goNext){
			var hashPosition = [],
				i = 0;
			if(goNext){
				index = (index = index - step) >= 0 ? index : numberItems - step;
			}else{
				index = (index = index + step) < numberItems ? index : 0;
			}

			while (i < step){
				hashPosition.push(index);
				index++;
				i++;
			}
			return hashPosition;
		};

		return $(this).each(function(){
			var elem = this,
				items = $("." + opts.itemsClass ,elem),
				prevBtn = $("." + opts.prevItemClass,elem),
				nextBtn = $("." + opts.nextItemClass,elem),
				i = items.length,
				step = 2;

			while(--i >= step){
				$(items[i]).hide();
			}
			i = 0;

			prevBtn.off("click").on("click",function(){		
				$(items).hide();
				
				var showedItems = getShowItems(items.length,step,i,false);
					showedItems.forEach(function(index){
						$(items[index]).show();
					});
				i = (i = i - step) >= 0 ? i : items.length - step; 	
					
			});

			nextBtn.off("click").on("click",function(){
				$(items).hide();
				
				var showedItems = getShowItems(items.length,step,i,true);
					showedItems.forEach(function(index){
						$(items[index]).show();
					});
				i = (i = i + step) < items.length ? i : 0; 	
					
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