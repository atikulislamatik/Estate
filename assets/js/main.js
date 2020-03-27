(function($) {
	// preloader
	$(window).load(function() {
		$("#loading").fadeOut(1200);
	}
	) // 
	$(document).on("scroll", function() {
		if ($(document).scrollTop() > 100) {
			$("header").addClass("black");
		}
		else {
			$("header").removeClass("black");
		}
	}
	);
	// wow js
	new WOW( {
		offset: 100, mobile: true
	}
	).init();
	// video popup
	$('.video-pop').magnificPopup( {
		type: 'iframe'
	}
	);
	// scroll top
	$(window).scroll(function() {
		if ($(this).scrollTop() > 300) {
			$('.scroll-top').fadeIn();
		}
		else {
			$('.scroll-top').fadeOut();
		}
	}
	);
	$('.scroll-top').click(function() {
		$('html, body').animate( {
			scrollTop: 0
		}
		, 800);
		return false;
	}
	);
	// //slicknav js
	$(document).ready(function() {
		$('#slick_nav_menu').slicknav( {
			'label': '', brand: ' <a href="#"><img src="assets/images/logo.png" alt=""></a>'
		}
		);
	}
	);
	$('.slider-nav').slick( {
		slidesToShow: 1, slidesToScroll: 1, arrows: true, centerMode: false, fade: true, // nextArrow: '<i class="flaticon-right"></i>',
		// prevArrow: '<i class="flaticon-left"></i>',
		asNavFor: '.slider-for'
	}
	);
	$('.slider-for').slick( {
		slidesToShow: 1, slidesToScroll: 1, asNavFor: '.slider-nav', dots:false, centerMode: false, fade: true, arrows: false, cssEase:'linear', focusOnSelect: true, responsive: [ {
			breakpoint: 1024, settings: {
				slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true
			}
		}
		, {
			breakpoint: 600, settings: {
				slidesToShow: 1, slidesToScroll: 1
			}
		}
		, {
			breakpoint: 480, settings: {
				slidesToShow: 1, slidesToScroll: 1
			}
		}
		],
	}
	);
	//   
	$('#slider').boxSlider( {
		speed: 800, timeout: 3000, perspective: 1000, effect:'scrollHorz3d'
	}
	);
	$('#slider').boxSlider('showSlide', 1);
	$('#slider').boxSlider('playPause');
	// process slider
	$('#process-slider').boxSlider( {
		speed: 1000, timeout: 3000, perspective: 1000, effect:'tile3d', rowCount:10, rowOffset:80
	}
	);
	$('#process-slider').boxSlider('showSlide', 0);
	$('#process-slider').boxSlider('playPause');
}

(jQuery));