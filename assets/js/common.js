$(document).ready( function(){
	/**
	 *
	 * Sliders
	 *
	 *
	 * 01 Testimonials Slider
	 *
	 */

	 var TestimonialsSwiper = new Swiper( '#testimonials', {
		 slidesPerView: 2,
		 spaceBetween: 30,
		 navigation: {
			 nextEl: '#testimonials-button-next',
			 prevEl: '#testimonials-button-prev',
		 },
	 })
} );

/*
 * FAQ toggler
 */

 $( '.question-item__header' ).on( 'click', function(){
	 $('.question-item').removeClass('question-item--active');
	 $(this).parent().addClass('question-item--active');
 } )
