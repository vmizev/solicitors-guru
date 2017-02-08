// more options form
;(function($){
	var moreOptionBtn = $('.more-option-btn');
	var moreOptionForm = $('.more-options-form');

	moreOptionBtn.on('click', function () {
		moreOptionForm.slideToggle();
	})
})(jQuery);

//search form header
(function($) {
	var searchIco = $(".search-ico");
	var searchBlock = $(".search-block");
	
	searchIco.on("click", function() {
		searchBlock.toggle("slide");
		searchIco.toggleClass("close");
	});

}) (jQuery);

// init SlickNav
$('.header-nav').slicknav({
	label: '',
	prependTo:'.header .container',
});

// slick carousel init
$('.areas-list').slick({
	dots: false,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	centerPadding: '0px',
	centerMode: true,
	responsive: [
		{
			breakpoint: 959,
			settings: {
				slidesToShow: 3,
			}
			
		},
		{
			breakpoint: 479,
			settings: {
				slidesToShow: 1,
			}
			
		},		
	]
});

// init Formstyler
setTimeout(function() {
  $('select').styler();
}, 100);