/*
 * Forms settings
 * Library used: validate-us
 * @author Mikhail Vikrian
 *
 * Fields
 *
 * 01 Phone
 */

 var phone = {
	 value: '',
	 placeholder: '+7 (xxx) xxx-xx-xx',
	 validate: {
		 required: {
			 error: 'Укажите, пожалуйста, Ваш телефон',
		 },
		 pattern: {
			 reg: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/,
			 error: 'Укажите номер телефона в правильном формате',
		 }
	 }
 }
/*
 * 02 Warranty checkbox
 */

 var warranty = {
	 value: 'Да',
	 validate: {
		 callback: function( v ) {
			 //console.log(v)
			 if( v == 'Да' || v == '' ) {
				 return true
			 }
			 else {
				 return {error: 'Некорректный формат поля гарантии'}
			 }
		 }
	 }
 }

 /*
  * 03 Qty of TV
	*/

	var qty = {
		value: 1,
		validate: {
			pattern: {
 			 reg: /^\d*$/,
 			 error: 'Данное поле может содержать только цифры',
 		 }
		}
	}

	/*
	 * 04 models
	 */
	 var models = {
		 value: '',
		 validate: {
			 max: {
				 treshold: 60,
				 error: 'Максимальная длина поля 60 символов',
			 }
		 }
	 }

	 /*
	  * 05 photo
		*/
	var photo = {
		value: '',
		validate: {
			pattern: {
 			 reg: /\.(jp(e)?g|png)$/,
 			 error: 'Загрузите фото в формате jpg или png.',
 		 }
		}
	}

 /*
 	*
  * Forms Array
	*
	*/

	var forms = [
		{
			id: 's1-form',
			fields: {
				's1-form-phone': phone,
				's1-form-check': warranty,
			},
		},
		{
			id: 's1-form-mobile',
			fields: {
				's1-form-mobile-phone': phone,
				's1-form-mobile-check': warranty,
			},
		},
		{
			id: 's3-form',
			fields: {
				's3-form-phone': phone,
				's3-form-check': warranty,
			},
		},
		{
			id: 's5-form',
			fields: {
				's5-form-phone': phone,
				's5-form-check': warranty,
			},
		},
		{
			id: 's8-form',
			fields: {
				's8-form-phone': phone,
				's8-form-check': warranty,
			},
		},
		{
			id: 'modal-form',
			fields: {
				'modal-form-qty': 		qty,
				'modal-form-models':  models,
				'modal-form-photo':   photo,
				'modal-form-phone':   phone,
			},
			onFormSuccess: function( f )
			{
	
    			 startLoading( $(f) )
    			 send( $(f), 'detailed' )
		 
			},
		}
	]

	/*
	 *
	 * Error Handlers
	 * [f = field, r = result]
	 *
	 * 01 On field error
	 */

	 var onFieldError = function( f, r ) {
		 f.removeClass( 'has-success' )
		 f.addClass( 'has-error' )
	 }

	 /*
	  * 02 onSubmitError
		*/

		var onSubmitError = function( f, r ) {
			f.siblings('.form-error').text( r.error )
			f.removeClass( 'has-success' )
 		 	f.addClass( 'has-error' )
		}

	 /*
	  * 03 onSuccess
	  */

		var onSuccess = function( f ) {
			f.siblings('.form-error').text( '' )
			f.removeClass( 'has-error' )
			f.addClass( 'has-success' )
		}

		/*
		 * 04 onFormSuccess
		 */

		 var onFormSuccess = function( f ) {
			 startLoading( $(f) )
			 send( $(f) )
		 }

		 /*
		  * Helpers
			*
			* 01 startLoading
			*
			* Start loading the form. Adds specific classes
			*
			*/
		 function startLoading( $form )
		 {
			 $form.addClass('loading');
			 $form.find('button').prop( 'disabled', true )
		 }
		 /*
		  * 02 Prints mesaage to user on onSuccess
			*/
		 function printSuccess( $f, t )
		 {
			 $f.append( '<span class="message message-success">'+t+'</span><span class="m-modal-overlay"></span>' )
		 }
		 /*
		  * 03 Prints mesaage to user on onError
		  */
		 function printError( $f, t )
		 {
			 $f.append( '<span class="message message-error">'+t+'</span><span class="m-modal-overlay"></span>' )
		 }
		 /*
		  * 04 Clear form
			*/
		 function clearForm( $f )
		 {
			 $f.find('[disabled]').prop( 'disabled', false )
			 $f.removeClass('loading')
		 }
		 /*
		  * 05 Sends data
		  */
		 function send( $form, action='send' )
		 {
			 //var data = $form.serialize()
			 var data = new FormData( $form[0] )
			// data += '&form='+$form.attr('id')
			// data += '&url=' + window.location.search.replace( /&/g, '-_-' )
			 //console.log( data )
			 // IMPORTANT: Refactored code usind FormData model
			 data.append( 'form', $form.attr('id') )
			 data.append( 'url', window.location.search.replace( /&/g, '-_-' ) )
			 $.ajax({
					url: '/backend/'+action,
					type: 'POST',
					data: data,
					context: $form,
					processData: false,
  	                contentType: false,
					success: function( response ) {
						//printSuccess( $(this), response )
						setTimeout( printSuccess, 2000, $(this), response )
						setTimeout( clearForm, 2000, $(this) )
						// dataLayer.push({
			 			// 	'event' : 'formsend',
			 			// 	'eventCategory' : 'form',
			 			// 	'eventAction' : 'send-btn',
			 			// 	'eventLabel' : $(this).attr('id')
		 				// });
					},
					error: function( response ) {
						//console.log(response)
						setTimeout( printError, 2000, $(this), response.responseText )
						setTimeout( clearForm, 2000, $(this) )
					},
				})
		 }
		 //Let's rock
		 validateUs( forms )

		 //Kill tooltip with errors
		 $('.form-error').on( 'click', function(){
			 //console.log(1)
			 $(this).text('')
		 } )

		 //Remove messages
		 $('body').on( 'overlayremoved', function(){
			 $('.message').remove()
		 } )
