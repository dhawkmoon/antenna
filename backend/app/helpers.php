<?php

  function validateFormFields( array $fields ):array
  {
    $result = [];
    foreach ( $fields as $key => $field ) {
      if(  isset( $_POST[$key] ) && preg_match_all( $field['pattern'], $_POST[$key] )  ) {
        $result[ $field['name'] ] = $_POST[$key] ;
      }
    }
    return $result;
  }
  
  function validateFormFiles( array $files ):array
  {
    $result = [];
    foreach( $files as $key => $file ) {
        if( 
            isset( $_FILES[$key] ) &&
            $_FILES[$key]['size'] <= $file['max'] &&
            call_user_func( $file['type'], $_FILES[$key]['tmp_name'] )
        ) {
            $result[] = [
            'tmp_name' =>  $_FILES[$key]['tmp_name'],
            'name'     =>  $_FILES[$key]['name'],
            ];
        }
    }
    return $result;
  }
  function addAttachments( $mail, array $attachments )
  {
      foreach( $attachments as $attachment ) {
          $mail->addAttachment( $attachment['tmp_name'], $attachment['name'] );
      }
  }
  /*
   * Filters phone numbers, that are scum
   */
  function isBadPhone( string $field )
  {

    return ( array_search( $field, BAD_PHONES ) !== false || !preg_match( ALLOWED_CODES, $field ) );
  }
  /*
   * Validate if file path is real image
   */
  function is_image( string $path ):bool
  {
    $a = getimagesize($path);
    $image_type = $a[2];

    if( in_array( $image_type , array( IMAGETYPE_GIF , IMAGETYPE_JPEG ,IMAGETYPE_PNG , IMAGETYPE_BMP) ) )
    {
      return true;
    }
    return false;
  }

	/*
	 * Get order number
	 */

	 function getOrderNumber()
	 {
    	$current = (int)file_get_contents( dirname( __FILE__ ) . '/order.txt' );
			$current++;
			file_put_contents( dirname( __FILE__ ) . '/order.txt', $current );
			return $current;
	 }


    /*
     * Get subject for mail on the base of config
     */
     
    function getEmailSubject( $number )
    {
        if( CONCAT_NUMBER ) {
            return '#' . $number . ' ' . BASIC_SUBJECT;
        }
        else return BASIC_SUBJECT;
    }