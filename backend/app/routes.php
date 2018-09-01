<?php

	$routes = [
		[
			'method' 		=> 'GET',
			'uri'		 		=> '/',
			'callback' 	=> function(){
				return ['code'=>200, 'body'=>'Hello, world!'];
			}
		],
		[
			'method'		=> 'POST',
			'uri'				=> '/send',
			'callback'	=> function() {
				$fields = validateFormFields( FORM_FIELDS );

				if( isBadPhone( $fields['phone'] ) ) { //filter BAD and SCUM phones
            return ['code'=> 403, 'body' => 'К сожалению, введенный Вами номер телефона содержит неправильный код* оператора.<span style="color:black !important;font-size: 13px; display: block !important; border-top: 1px dashed #3f7592; padding-top: 5px; margin-top: 5px;">* Если Ваш телефон содержит действующий код оператора, но Вы видите данное сообщение, свяжитесь с нами по телефону <br />' . BASIC_CONTACT_PHONE . '.</span>'];
        }

				if( count( $fields ) > 0 ) {
                    //let get current phone number
                    $orderNumber = getOrderNumber();

					$data = [
						'phone' 	 =>  $fields['phone'],
						'warranty' =>  ( isset( $fields['warranty'] ) ? $fields['warranty'] : 'Нет' ),
						'number' 	 => 	$orderNumber,
						'date'		 =>  date( 'd-m-Y' ),
						'time'		 =>  date( 'H:i:s' ),
						'form'		 =>  $_POST['form'],
						'url'			 =>  preg_replace( '/\-_\-/', '&', $_POST['url'] ),
					];

					$tmpl = TemplateService::load( 'mails/phone.tpl' );

					$tmpl = TemplateService::replace( $tmpl, $data );

                    $emailSubject = getEmailSubject( $orderNumber );

					$mail = MailService::createMail( BASIC_FROM, BASIC_TO, $emailSubject, $tmpl );
					//echo $m
					$mail->send();
					return ['code' => 200, 'body' => 'Спасибо, Ваше сообщение успешно отправлено.'];
				}
				else {
					return ['code'=> 200, 'body' => 'К сожалению, данные некорректны!'];
				}
				//
			}
		],
		[
			'method'		=> 'POST',
			'uri'				=> '/detailed',
			'callback'	=> function() {
			   
				$fields = validateFormFields( FORM_FIELDS );

				if( isBadPhone( $fields['phone'] ) ) { //filter BAD and SCUM phones
            return ['code'=> 403, 'body' => 'К сожалению, введенный Вами номер телефона содержит неправильный код* оператора.<span style="color:black !important;font-size: 13px; display: block !important; border-top: 1px dashed #3f7592; padding-top: 5px; margin-top: 5px;">* Если Ваш телефон содержит действующий код оператора, но Вы видите данное сообщение, свяжитесь с нами по телефону ' . BASIC_CONTACT_PHONE . '</span>.'];
                   }

				if( count( $fields ) > 0 ) {
                    //let get current phone number
                    $orderNumber = getOrderNumber();

					$data = [
						'phone' 	 =>  $fields['phone'],
						'warranty'   =>  ( isset( $fields['warranty'] ) ? $fields['warranty'] : 'Нет' ),
						'qty'        =>  $fields['qty'],
						'models'     =>  ( isset ( $fields['models'] ) ? $fields['models'] : 'Не указано' ),
						//Мета информация
						'number' 	 =>  $orderNumber,
						'date'		 =>  date( 'd-m-Y' ),
						'time'		 =>  date( 'H:i:s' ),
						'form'		 =>  $_POST['form'],
						'url'			 =>  preg_replace( '/\-_\-/', '&', $_POST['url'] ),
					];
					
					
					$tmpl = TemplateService::load( 'mails/detailed.tpl' );

					$tmpl = TemplateService::replace( $tmpl, $data );

                    $emailSubject = getEmailSubject( $orderNumber );

					$mail = MailService::createMail( BASIC_FROM, BASIC_TO, $emailSubject, $tmpl );
					
				//	print_r( $_FILES );
					
				//	if(
						//isset( $_FILES['modal-form-photo'] ) &&
					//	is_image( $_FILES['modal-form-photo']['tmp_name'] ) &&
						//$_FILES['modal-form-photo']['size'] <= BASIC_UPLOAD_SIZE
				//	) {
				//		$mail->addAttachment( $_FILES['modal-form-photo']['tmp_name'], $_FILES['modal-form-photo']['name'] );
				//	}
				    
				    $files = validateFormFiles( FORM_FILES );
				    
				    if( count( $files ) > 0 ) {
				        addAttachments( $mail, $files );
				    }
                    
					//echo $m
					$mail->send();
					return ['code' => 200, 'body' => 'Спасибо, Ваше сообщение успешно отправлено.'];
				}
				else {
					return ['code'=> 200, 'body' => 'К сожалению, данные некорректны!'];
				}
				//
			}
		],


	];
