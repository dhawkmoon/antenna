<?php

	define( 'BASE_PATH', '/backend' );

    //Контактный телефон
	define( 'BASIC_CONTACT_PHONE', '+7 (495) 142-17-34' );

    //Адрес отправителя (отправитель должен быть в домене @job.line4life.ru)
	define( 'BASIC_FROM', 'info@antenna.ru' );

    //Список получателей - ассоциативный массив, где ключ - адрес почты, значение - имя получателя
	define( 'BASIC_TO',
		[
		   'dhawkmoon@mail.ru' => 'Михаил',
		]
	);

    //Тема письма
	define( 'BASIC_SUBJECT', 'Заказ обратного звонка' );

	//Добавлять номер обращение к теме письма или нет
	define( 'CONCAT_NUMBER', true );

  //Максимальный объем загружаемого файла, в данном проекте пока н используется
	define( 'BASIC_UPLOAD_SIZE', 1024*1024*3 );

	//Поле телефона
	define( 'FIELD_PHONE',  [
		'name'    => 'phone',
		'pattern' => '/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/',
	]	);

	//Поле гарантии
	define( 'FIELD_WARRANTY',  [
		'name'    => 'warranty',
		'pattern' => '/^(Да)?$/',
	]	);

	//Поле кол-ва телевизоров
	define( 'FIELD_QTY',  [
		'name'    => 'qty',
		'pattern' => '/^\d*$/',
	]	);

	//Поле моделей
	define( 'FIELD_MODELS',  [
		'name'    => 'models',
		'pattern' => '/^(.){0,60}$/s',
	]	);

	//Поле моделей
	define( 'FIELD_PHOTO',  [
		'name'    => 'photo',
		'pattern' => '/^(.)*$/',
	]	);

  //Единственные валидные поля, которые могут приходить с сайта + шаблон проверки их значения
	define( 'FORM_FIELDS',
		[
			's1-form-phone'  =>  FIELD_PHONE,
			's1-form-mobile-phone'  =>  FIELD_PHONE,
			's3-form-phone'  =>  FIELD_PHONE,
			's5-form-phone'  =>  FIELD_PHONE,
			's8-form-phone'  =>  FIELD_PHONE,
			's1-form-check'  =>  FIELD_WARRANTY,
			's1-form-mobile-check'  =>  FIELD_WARRANTY,
			's3-form-check'  =>  FIELD_WARRANTY,
			's5-form-check'  =>  FIELD_WARRANTY,
			's8-form-check'  =>  FIELD_WARRANTY,
			'modal-form-phone'  =>  FIELD_PHONE,
			'modal-form-qty'	=> FIELD_QTY,
			'modal-form-models' => FIELD_MODELS,
			'modal-form-photo'  =>  FIELD_PHOTO,
		]
	);
    //Определяем правило для фото
    define( 'FILE_PHOTO',
    [
        'type' => 'is_image', //function to check type
        'max'  => BASIC_UPLOAD_SIZE,
    ] );
    //Все файлы
    define( 'FORM_FILES', [
        'modal-form-photo' => FILE_PHOTO,
    ] );

    //Черный список телефонных номеров
	  define( 'BAD_PHONES', [
	    '+7 (000) 000-00-00',
	    '+7 (111) 111-11-11',
	    '+7 (222) 222-22-22',
	    '+7 (333) 333-33-33',
	    '+7 (444) 444-44-44',
	    '+7 (555) 555-55-55',
	    '+7 (666) 666-66-66',
	    '+7 (777) 777-77-77',
	    '+7 (888) 888-88-88',
	    '+7 (999) 999-99-99',
	    ] );

    //Список разрешенных кодов оператора. Отделяются символом pipe ( | ). Если нужно добаить код, ставим в любое месте через pipe
		define( 'ALLOWED_CODES', '/^\+7 \((495|499|900|901|902|903|904|905|906|908|909|910|911|912|913|914|915|916|917|918|919|920|921|922|923|924|925|926|927|928|929|930|931|932|933|934|935|936|937|938|939|950|951|952|953|958|960|961|962|963|964|965|966|967|968|969|977|978|980|981|982|985|986|996|999)\)/' );
