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

    // const $header = $(".header--inner")
	// let prevScroll
	// let lastShowPos

	// $(window).on("scroll", function() {
	// 	const scrolled = $(window).scrollTop()
		
	// 	if (scrolled > 190 && scrolled > prevScroll) {
	// 		$header.addClass("header-scroll")
	// 		lastShowPos = scrolled
	// 	} else if (scrolled <= Math.max(lastShowPos - 100, 0)) {
	// 		$header.removeClass("header-scroll")
	// 	}
	// 	prevScroll = scrolled
	// })

	$('.dircarousel').owlCarousel({
		nav: true,
		items: 3,
		dots: false,
		navText: ['<svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.7769 8.55504C24.7602 8.36593 24.6811 8.11327 24.5547 7.97158L17.888 0.416108C17.5972 0.0214494 16.9976 0.0226951 16.6287 0.345424C16.2598 0.668463 16.2316 1.24201 16.5549 1.58272L21.9301 7.6659H1.66658C1.17582 7.6659 0.777771 8.06396 0.777771 8.55471C0.777771 9.04578 1.17583 9.44352 1.66658 9.44352H21.9301L16.5549 15.5267C16.2021 15.8674 16.3013 16.4515 16.6705 16.7745C17.0395 17.0976 17.5975 17.0743 17.8883 16.6936L24.555 9.13816C24.7333 8.94502 24.767 8.73576 24.7773 8.5547L24.7769 8.55504Z" fill="#0973BA"/></svg>', 'Вперёд'],
		responsive: {
            0: {
                items: 1,
            },
            577: {
                items: 2,
            },
            768: {
                items: 3
            }
        },
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
	
	if (window.matchMedia("(max-width: 1199.90px)").matches) {
		$('.header__menu, .header__link').appendTo('.header_mob');
		$('.header_toggle').on('click', function () {
			$('.header_mob').toggleClass('active');
			$('.header').toggleClass('active');
		})
	}

	var o = $('.count');
    var cc = 1;

    if (o.length > 0) {
        include('../libs/countto/jquery.countTo.js');

        $(window).scroll(function(){
            var targetPos = o.offset().top;
            var winHeight = $(window).height();
            var scrollToElem = targetPos - winHeight;
            var winScrollTop = $(this).scrollTop();

            if (winScrollTop > scrollToElem) {
                if (cc < 2){

                    cc = cc + 2;
                    $(document).ready(function () {
                        $(o).countTo();
                    });
                }
            }
        });
	}
	// data-from="0" data-to="100" data-speed="1700"

    function include(url) {
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }

	$('.js-count').countTo();

	wow = new WOW(
      {
        animateClass: 'animated',
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
	wow.init();

});

$(document).ready(function() {
	animation1();
}, 1000);


$(".word").lettering();

function animation1() {
	var title1 = new TimelineMax();
	title1.staggerFromTo(".word span", 0.5, 
		{ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
		{ ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0 }, 0.05)
	;
}

$(".anim").lettering();

var block_show = false;
 
function scrollTracking(){
	if (block_show) {
		return false;
	}
 
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.anim').offset().top;
	var eh = $('.anim').outerHeight();
	var dh = $(document).height();   
 
	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
		block_show = true;
		
		function animation() {
			var title1 = new TimelineMax();
			title1.staggerFromTo(".anim span", 0.5, 
				{ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
				{ ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0 }, 0.05)
			;
		}
		animation();
	}
}
$(window).scroll(function(){
	scrollTracking();
});
	
$(document).ready(function(){ 
	scrollTracking();
});

$(".anim1").lettering();

var block_show1 = false;
 
function scrollTracking1(){
	if (block_show1) {
		return false;
	}

	var cls = '.anim1'
	var clsspn = '.anim1 span'
 
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $(cls).offset().top;
	var eh = $(cls).outerHeight();
	var dh = $(document).height();   
 
	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
		block_show1 = true;
		
		function animation2() {
			var title1 = new TimelineMax();
			title1.staggerFromTo(clsspn, 0.5, 
				{ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
				{ ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0 }, 0.05)
			;
		}
		animation2();
	}
}
$(window).scroll(function(){
	scrollTracking1();
});
	
$(document).ready(function(){ 
	scrollTracking1();
});

// var header = $('.header_top')

// $(window).scroll(function () {
// 	if ($(this).scrollTop() > 25) {
// 		header.addClass("header-scroll");
// 	} else {
// 		header.removeClass("header-scroll");
// 	}
// });