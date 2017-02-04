// more options form
;(function($){
	var moreOptionBtn = $('.more-option-btn');
	var moreOptionForm = $('.more-options-form');

	moreOptionBtn.on('click', function () {
		moreOptionForm.slideToggle();
	})
})(jQuery);

// slick carousel init
$('.areas-list').slick({
	dots: false,
	slidesToShow: 7,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
});

// init Formstyler
setTimeout(function() {
  $('select').styler();
}, 100);