(function ($) {

    'use strict';

	/*------------------------------------
		Mobile Menu
	--------------------------------------*/


	/*-------------------------------------------
	    Sticky Header
	--------------------------------------------- */

	let win = $(window);
	let sticky_id = $(".header-area");
	win.on('scroll', function () {
		let scroll = win.scrollTop();
		if (scroll < 245) {
			sticky_id.removeClass("sticky-header");
		} else {
			sticky_id.addClass("sticky-header");
		}
	});


	/*------------------------------------
        scrollUp
	--------------------------------------*/
	$(window).scroll(function () {
		if ($(this).scrollTop() !== 0) {
			$('#scrollUp').fadeIn();
		} else {
			$('#scrollUp').fadeOut();
		}
    });
    
	$('#scrollUp').on('click', function () {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});



	function jetix_svg() {
		jQuery('img').each(function() {
			var jQueryimg = jQuery(this);
			var imgClass = jQueryimg.attr('class');
			var imgURL = jQueryimg.attr('src');
			jQuery.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var jQuerysvg = jQuery(data).find('svg');

				// Add replaced image's classes to the new SVG
				if (typeof imgClass !== 'undefined') {
					jQuerysvg = jQuerysvg.attr('class', imgClass + ' replaced-svg');
				}
				jQuerysvg = jQuerysvg.removeAttr('xmlns:a');
				// Replace image with new SVG
				jQueryimg.replaceWith(jQuerysvg);

			}, 'xml');

		});
	}
	$(document).each(function() {
		jetix_svg();
	})



})(jQuery);
