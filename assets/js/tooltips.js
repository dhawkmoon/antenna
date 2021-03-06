jQuery(document).ready( function($){

	var format = function( s ){
		var r = s.replace( '[', '<b>' )
		return r.replace( ']', '</b>')

	}
	if( $( window ).width() >= 768 ) {
		$( '[data-toggle="tooltip"]' ).on( 'mouseenter', function(){

			var text = format( $(this).data('text') )
			var $tooltip = $('<span class="tooltip">'+text+'</span>')

			var width =  $(this).data('width')  || 'auto'

			$tooltip.width( width )

			$tooltip.css( {
				left: $(this).offset().left+'px',
				top: $(this).offset().top+'px',
			} )

			if( $(this).data('position') == 'bottom' )
				$tooltip.css({marginTop:$(this).height()+20})

			$tooltip.css({marginLeft:$(this).width()/2})

			$('body').append( $tooltip )
			$tooltip.animate( {opacity: 1}, 200 )

			$(this).on( 'mouseleave', {tooltip: $tooltip}, function(e){
				//
				e.data.tooltip.animate( {opacity: 0}, 200, function(){
					$(this).remove()
				} )
				//
			} )
			$(this).on( 'click', {tooltip: $tooltip}, function(e){
				//
				e.data.tooltip.animate( {opacity: 0}, 200, function(){
					$(this).remove()
				} )
				//
			} )
		} )
	} else {
	$( '[data-toggle="tooltip"]' ).on( 'click', function(){
		var text = format( $(this).data('text') )
		var $tooltip = $('<span class="tooltip">'+text+'</span>')

		var width =  270

		$tooltip.width( width )

		$tooltip.css( {
			transform: 'none',
		//	width: 270+'px !important',
		} )



		if( $(this).data('position') == 'bottom' )
			$tooltip.css({marginTop:$(this).height()})

	//	$tooltip.css({marginLeft:$(this).width()/2})

		$(this).append( $tooltip )
		$tooltip.animate( {opacity: 1}, 200, function(){
			$('body').on( 'click', {tooltip: $tooltip}, function(e){
				//
				e.data.tooltip.animate( {opacity: 0}, 200, function(){
					$(this).remove()
				} )
				//
			} )
		} )


		// $(this).on( 'click', {tooltip: $tooltip}, function(e){
		// 	//
		// 	e.data.tooltip.animate( {opacity: 0}, 200, function(){
		// 		$(this).remove()
		// 	} )
		// 	//
		// } )
	} )
}

} ) //end document ready
