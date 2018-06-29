$(document).ready( function(){
	/**
	 *
	 * Sliders
	 *
	 *
	 * 01 Testimonials Slider
	 *
	 */
	 if( $(window).width() > 470 ) {
		 var TestimonialsSwiper = new Swiper( '#testimonials', {
			 slidesPerView: 2,
			 spaceBetween: 30,
			 navigation: {
				 nextEl: '#testimonials-button-next',
				 prevEl: '#testimonials-button-prev',
			 }
		 })
	 }
	 else {
		 var TestimonialsSwiper = new Swiper( '#testimonials', {
			 slidesPerView: 1,
			 spaceBetween: 0,
			 navigation: {
				 nextEl: '#testimonials-button-next',
				 prevEl: '#testimonials-button-prev',
			 }
		 })
	 }
	 /*
	 *
	 * 01.2 Team Slider on Mobile
	 *
	 */
	 if( $(window).width() < 768 ) {
		// console.log(1)
		 var TeamSwiper = new Swiper( '#team', {
			 slidesPerView: 1,
			 navigation: {
				 nextEl: '#team-button-next',
				 prevEl: '#team-button-prev',
			 },
			 wrapperClass: 'team-wrapper',
			 slideClass: 'team-slide',
		 })
	 }


	/*
	 * 02 FAQ toggler
	 */

	 $( '.question-item__header' ).on( 'click', function(){
		 $('.question-item').removeClass('question-item--active');
		 $(this).parent().addClass('question-item--active');
	 } )

	 /*
	  * 03 Parallax
		*/
		var rellax = new Rellax( '.rellax' )

		/*
		 * 04 Qty field
		 */

		 $( '.qty-plus' ).on( 'click', function(e){
			 //console.log('ok')
			 var $t = $( '#'+$(this).data('target') )
			 var cv = $t.val()
			 var min = $t.attr('min')
			 var max = $t.attr('max')

			 if( cv >= min && cv < max ) {
				 cv++
				 $t.val( cv )
			 }
		 } )

		 $( '.qty-minus' ).on( 'click', function(e){
			 var $t = $( '#'+$(this).data('target') )
			 var cv = $t.val()
			 var min = $t.attr('min')
			 var max = $t.attr('max')

			 if( cv > min && cv <= max ) {
				 cv--
				 $t.val( cv )
			 }
		 } )

		 /*
		  * 05 Files Upload
			*/
			$('.form-group--file .file-trigger').on('click', function(e){
				e.preventDefault()
				$(this).next().trigger('click')
			})

			$('.form-group--file input').on('change', function(e){
				var name = getFileName( $(this).val() )
				$(this).next().text( name )
				$(this).next().addClass('not-empty')
			})
			//get file name from field attr
			function getFileName( path ) {
				return path.split(/(\\|\/)/g).pop()
			}

			/*
			 * Scrolls
			 *
			 * 06 Anchor Scrolls
			 *
			 */
					$( '[data-toggle="scroll"]' ).on( 'click', function(e){
						e.preventDefault();
						$('.mobile-menu').removeClass('active')
						var target = $(this).attr('href')
						var to = $( target ).offset().top

						$('html,body').animate({scrollTop: to}, 400)

						//$('.mobile-menu').removeClass('mobile-menu--active')
						//$('.mobile-menu').trigger('mutation')
						return false

					} )

			/*
			 * Masks
			 *
			 * 07 Phone Masks
			 *
			 */
			 $("[data-mask=phone]").mask("+7 (999) 999-99-99");

			 //Prevent dummies from 8 in phone number error
			 $('[data-mask=phone]').on( 'keypress', function(e){
    $(this).val( $(this).val().replace( /^\+7 \(8/, '+7 (' ) )
} )


} );
