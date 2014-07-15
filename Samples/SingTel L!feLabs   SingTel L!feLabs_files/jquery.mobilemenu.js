/**
 * jQuery Mobile Menu 
 * Turn unordered list menu into dropdown select menu
 * version 1.0(31-OCT-2011)
 * 
 * Built on top of the jQuery library
 *   http://jquery.com
 * 
 * Documentation
 * 	 http://github.com/mambows/mobilemenu
 */
(function($){
console.log('inside mobilemeny');
$.fn.mobileMenu = function(options) {
	console.log('mobile-menu');
	var defaults = {
			defaultText: 'Navigate to...',
			className: 'select-menu',
			subMenuClass: 'sub-menu',
			subMenuDash: '&ndash;'
		},
		settings = $.extend( defaults, options ),
		el = $(this);
	
	this.each(function(){
		// ad class to submenu list
		el.find('ul').addClass(settings.subMenuClass);

		// Create base menu
		$('<select  />',{
			'class' : settings.className,
			'onChange': 'scrollTo(this.value)',
			'name' : "dropdpown"
		}).insertAfter( el );
		$('<option />', {
				"value"	: $('#top_logo','.navigation-menu').attr('href'),
				"html"	: 'Home',
				"selected" : (this.href == window.location.href)
			}).appendTo( '.' + settings.className );
		// Create default option
	/*	$('<option />', {
			"value"		: '<?php get_site_url() ?>',
			"text"		: 'Home'
		}).appendTo( '.' + settings.className ); */

		// Create select option from menu
		el.find('a').each(function(){
			var $this 	= $(this),
					optText	= '&nbsp;' + $this.text(),
					optSub	= $this.parents( '.' + settings.subMenuClass ),
					len			= optSub.length,
					dash;
			
			// if menu has sub menu
			if( $this.parents('ul').hasClass( settings.subMenuClass ) ) {
				dash = Array( len+1 ).join( settings.subMenuDash );
				optText = dash + optText;
			}

			// Now build menu and append it
			$('<option />', {
				"value"	: this.href,
				"html"	: optText,
				"selected" : (this.href == window.location.href)
			}).appendTo( '.' + settings.className );
			console.log('adding items to mobile-menu');
			

		}); // End el.find('a').each
		
		var loc = window.location.href;
		$('.mobile-menu','.navigation-menu').val(loc.substring(0,loc.length-1));
		console.log(window.location.href);
		// Change event on select element
		$('.' + settings.className).change(function(){
			var locations = $(this).val();
			if( locations !== '#' ) {
				window.location.href = $(this).val();
				$('.mobile-menu').val($(this).val());
			};
		});

	}); // End this.each

	return this;

};
})(jQuery);