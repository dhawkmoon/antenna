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
