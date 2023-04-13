(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function() {
		$('.featured-carousel').owlCarousel({
	    loop: true,
	    autoplay: false,
	    margin:50,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav: true,
	    dots: false,
	    autoplayHoverPause: false,
	    items: 4.5,
	    navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
	    responsive:{
	      screen:{
	        items:4.5
	      },
	    }
		});

	};
	carousel();

})(jQuery);