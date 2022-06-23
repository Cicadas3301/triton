document.addEventListener("DOMContentLoaded", function () {
    
    $('.has-child .subscroll').click(function (e) {
        e.preventDefault();
        $(this).parent().find('.sub-menu').stop().slideToggle();
    })

    $('.menu__link--partner').click(function (e) {
        e.preventDefault();
        $(this).siblings('.menu__item-drop').slideToggle();
        $(this).toggleClass('active');
    })

    $('.input__drop').click(function (e) {
        e.preventDefault();
        $(this).parent().find('.input__list').stop().slideToggle();
        $(this).toggleClass('active');
    })

    $('.input__drop-wrap > span').on('click', function () {
        var inptText = $(this).html();
        $('.input__drop > input').attr('value', '');
        $('.input__drop > input').attr('value', inptText);
    })

    // var header = $('.header_top')

	// $(window).scroll(function () {
	// 	if ($(this).scrollTop() > 25) {
	// 		header.addClass("header-scroll");
	// 	} else {
	// 		header.removeClass("header-scroll");
	// 	}
    // });

    const $header = $(".header--inner")
	let prevScroll
	let lastShowPos

	$(window).on("scroll", function() {
		const scrolled = $(window).scrollTop()
		
		if (scrolled > 190 && scrolled > prevScroll) {
			$header.addClass("header-scroll")
			lastShowPos = scrolled
		} else if (scrolled <= Math.max(lastShowPos - 100, 0)) {
			$header.removeClass("header-scroll")
		}
		prevScroll = scrolled
	})
    
    jQuery('img.svg').each(function () {
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
	 
		jQuery.get(imgURL, function (data) {
		   // Get the SVG tag, ignore the rest
		   var $svg = jQuery(data).find('svg');
	 
		   // Add replaced image ID to the new SVG
		   if (typeof imgID !== 'undefined') {
			  $svg = $svg.attr('id', imgID);
		   }
		   // Add replaced image classes to the new SVG
		   if (typeof imgClass !== 'undefined') {
			  $svg = $svg.attr('class', imgClass + ' replaced-svg');
		   }
	 
		   // Remove any invalid XML tags as per http://validator.w3.org
		   $svg = $svg.removeAttr('xmlns:a');
	 
		   // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
		   if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
			  $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
		   }
	 
		   // Replace image with new SVG
		   $img.replaceWith($svg);
	 
		}, 'xml');
	 
    });
    
    var telInp = $('input[type="tel"]');

	telInp.each(function () {
		$(this).mask("+79999999999");
    });

});