'use strict';

;(function($,undefined){
	$.fn.parallaxScroll = function(){
		return $(this).each(function(){
			var elem = $(this);

			elem.off("parralaxScroll").on("parralaxScroll",function(){
				parallax(elem);
			});
		});
	};

	function parralax(jElem){
		var scrollPos = $(window).scrollTop(),
            speed = 0.42,
            prevPos = jElem.data("origin-y");
        jElem.css("background-position-y", (prevPos + (scrollPos * speed)) + 'px');
	}
})(window.jQuery);