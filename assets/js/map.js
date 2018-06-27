/**
 *
 * Скрипт инициализации яндекс карты с точками, где установленны антенны/вышки.
 *
 * Используется API Yande Maps 2.1.
 *
 */

 /**
  *
	* 01 Метки
	*
	* pin - object
	* pin.name - имя метки
	* pin.coords - координаты
	* pin.type - recevier | emmiter
	*
	*/

 var pins = [
	 {
		 name: 'Останкинская телебашня',
		 text: '<div style="padding:10px 0 10px 10px"><h3 style="margin:0; font-size:18px; text-align:left; margin-bottom:5px;">Москва, телебашня Останкино</h3><p style="margin:0; text-align:left"><b>Высота вышки:</b> 540 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 10 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 30 (546 МГц)</p><p style="margin:0; text-align:left">Статус: Запущен</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 24 (498 МГц)</p><p style="margin:0; text-align:left">Статус: Запущен</p></div>',
		 coords: [55.81961640, 37.61188539],
		 type: 'emmiter',
	 },
	 {
		 name: 'Москва, Бутово',
		 text: '<div style="padding:10px 0 10px 10px"><h3 style="margin:0; font-size:18px; text-align:left; margin-bottom:5px;">Москва, Бутово</h3><p style="margin:0; text-align:left"><b>Высота вышки:</b> 60 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 2 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 30 (546 МГц)</p><p style="margin:0; text-align:left">Статус: Работает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 24 (498 МГц)</p><p style="margin:0; text-align:left">Статус: Работает</p></div>',
		 coords: [55.54326023, 37.55367356],
		 type: 'emmiter',
	 },
	 {
		 name: 'Королев',
		 text: 'Россия, Московская область',
		 coords: [55.92548516, 37.85290088],
		 type: 'receiver',
	 },
	 {
		 name: 'село Алабушево',
		 text: 'Россия, Московская область, Солнечногорский район',
		 coords:[56.00838458, 37.10701050],
		 type: 'receiver',
	 },
	 {
		 name: 'село Михайловское',
		 text: 'Россия, Московская область, городской округ Домодедово',
		 coords:[51.81681549, 79.71099650],
		 type: 'receiver',
	 },
	 {
		 name: 'деревня Косякино',
		 text: 'Россия, Московская область, Раменский район, сельское поселение Никоновское',
		 coords:[55.34256246, 38.18629150],
		 type: 'receiver',
	 },
	 {
		 name: 'садовое некоммерческое товарищество Алёшинские Сады',
		 text: 'Россия, Московская область, Богородский городской округ',
		 coords:[55.69960114, 38.35826950],
		 type: 'receiver',
	 },
	 {
		 name: 'посёлок Рылеево',
		 text: 'Россия, Московская область, Раменский район, сельское поселение Ганусовское',
		 coords:[55.34089072, 38.10495350],
		 type: 'receiver',
	 },
	 {
		 name: 'деревня Полушкино',
		 text: 'Россия, Московская область, Одинцовский район',
		 coords:[55.58853180, 36.56202500],
		 type: 'receiver',
	 },
	 {
		 name: 'деревня Шевлягино',
		 text: 'Россия, Московская область, Раменский район, сельское поселение Новохаритоновское',
		 coords:[55.59150760, 38.58208450],
		 type: 'receiver',
	 },
	 {
		 name: 'посёлок городского типа Малаховка',
		 text: 'Россия, Московская область, городской округ Люберцы',
		 coords:[55.64324089, 38.01149700],
		 type: 'receiver',
	 },
	 {
		 name: 'ДНП Алёшинские Дали',
		 text: 'Россия, Московская область, Пушкинский район, деревня Алёшино',
		 coords:[56.13886212, 37.73892150],
		 type: 'receiver',
	 },
	 {
		 name: 'Подольск',
		 text: 'Россия, Московская область',
		 coords:[55.39187392, 37.53990850],
		 type: 'receiver',
	 },
	 {
		 name: 'Апрелевка',
		 text: 'Россия, Московская область, Наро-Фоминский городской округ',
		 coords:[55.54883085, 37.05877550],
		 type: 'receiver',
	 },
	 {
		 name: 'Химки',
		 text: 'Россия, Московская область',
		 coords:[55.92542484, 37.36802450],
		 type: 'receiver',
	 },
	 {
		 name: 'Дачный посёлок Кратово',
		 text: 'Россия, Московская область, Раменский район',
		 coords:[55.60561968, 38.16303850],
		 type: 'receiver',
	 },
	 {
		 name: 'Дачный посёлок Кратово',
		 text: 'Россия, Московская область, Раменский район',
		 coords:[55.60561968, 38.16303850],
		 type: 'receiver',
	 },
	 {
		 name: 'Сергиев Посад',
		 text: 'Россия, Московская область',
		 coords:[56.30692696, 38.11783100],
		 type: 'receiver',
	 },
	 {
		 name: 'посёлок Мещерский',
		 text: 'Россия, Москва, Западный административный округ, район Солнцево',
		 coords:[55.67314076, 37.41466100],
		 type: 'receiver',
	 },
	 {
		 name: 'Звенигород',
		 text: 'Россия, Московская область',
		 coords:[55.72388074, 36.84547950],
		 type: 'receiver',
	 },
	 {
		 name: 'Железнодорожный',
		 text: 'Россия, Московская область, Балашиха',
		 coords:[55.74140126, 38.02184550],
		 type: 'receiver',
	 },
	 {
		 name: 'деревня Шульгино',
		 text: 'Россия, Московская область, Одинцовский район, сельское поселение Барвихинское',
		 coords:[55.72517137, 37.29477200],
		 type: 'receiver',
	 },
	 {
		 name: 'Чехов',
		 text: 'Россия, Московская область',
		 coords:[55.15074341, 37.44598050],
		 type: 'receiver',
	 },
	 {
		 name: 'деревня Косяково',
		 text: 'Россия, Московская область, Воскресенский район',
		 coords:[55.35469639, 38.49613800],
		 type: 'receiver',
	 },
	 {
		 name: 'дачный посёлок Кокошкино',
		 text: 'Россия, Москва',
		 coords:[55.60074740, 37.17226850],
		 type: 'receiver',
	 },
	 {
		 name: 'Электросталь',
		 text: 'Россия, Московская область',
		 coords:[55.78778349, 38.45190500],
		 type: 'receiver',
	 },
	 {
		 name: 'Ивантеевка',
		 text: 'Россия, Московская область',
		 coords:[55.97417385, 37.92214150],
		 type: 'receiver',
	 },
	 {
		 name: 'деревня Мисайлово',
		 text: 'Россия, Московская область, Ленинский район',
		 coords:[55.55884978, 37.82180450],
		 type: 'receiver',
	 },
	 {
		 name: 'микрорайон Купавна',
		 text: 'Россия, Московская область, Балашиха',
		 coords:[55.74624072, 38.12173850],
		 type: 'receiver',
	 },
	 {
		 name: 'Старая Купавна',
		 text: 'Россия, Московская область, Богородский городской округ',
		 coords:[55.80313716, 38.17473450],
		 type: 'receiver',
	 },
	 {
		 name: 'СНТ Фоминское',
		 text: 'Россия, Московская область, городской округ Мытищи',
		 coords:[56.10027403, 37.58396200],
		 type: 'receiver',
	 },
	 {
		 name: 'микрорайон Кучино',
		 text: 'Россия, Московская область, Балашиха',
		 coords:[55.75234875, 37.96079150],
		 type: 'receiver',
	 },
	 {
		 name: 'деревня Путилково',
		 text: 'Россия, Московская область, городской округ Красногорск',
		 coords:[55.86568743, 37.39271050],
		 type: 'receiver',
	 },
 ];
 /**
  *
  * 02 Add Pin
  *
	* @func
  *
  * Добавляет метку на карту. Вызываю биндом на MAP
	*
  */
 var addPin = function( pin )
 {
	 if( pin.type == 'receiver' ) {
		 var src = 'assets/img/mapmarker.svg'
		 var size = [24, 36]
		 var offset = [-12,-36]
	 }
	 else {
		 var src = 'assets/img/emmiter-alt.svg'
		 var size = [18, 32]
		 var offset = [-9,-32]
	 }
	 var placemark = new ymaps.Placemark( pin.coords, {
		 hintContent: pin.name,
		 balloonContent: pin.text,
	 },
	 {
		 iconLayout: 'default#image',
     iconImageHref: src,
     iconImageSize: size,
     iconImageOffset: offset,
	 } )
	 this.geoObjects.add( placemark )
 }

	function addRegion()
	{
		var coords = [
			[
				[56.33727352, 38.27146303],
				[56.22727209, 38.48569643],
				[56.00939223, 38.77683412],
				[55.86447949, 38.89219057],
				[55.78717629, 38.98557436],
				[55.58857634, 38.91965639],
				[55.45457244, 38.87021791],
				[55.35041410, 38.70967422],
				[55.26604582, 38.45949586],
				[55.16240022, 38.32216676],
				[55.07739752, 37.93215211],
				[55.04271468, 37.70693238],
				[54.97325841, 37.41579469],
				[55.07109379, 36.94338258],
				[55.18440831, 36.67971070],
				[55.43506355, 36.35012086],
				[55.53488059, 36.33364136],
				[55.69964446, 36.21828492],
				[55.97476172, 36.43801148],
				[56.21733222, 36.64675172],
				[56.38016617, 36.85191680],
				[56.43194235, 37.12657500],
				[56.40454024, 37.51658965],
				[56.43194235, 37.90660430],
				[56.34052488, 38.24718047],
				[56.33727352, 38.27146303],
			],


		]

		var polygon = new ymaps.Polygon( coords, {
		    hintContent: "Область покрытия"
		}, {
		    fillColor: '#ff7d30',

				fillOpacity: .2,
				strokeColor: '#ff7d30',
		    // Делаем полигон прозрачным для событий карты.
		    interactivityModel: 'default#transparent',
		    strokeWidth: 4,
		    opacity: 1
		});

		this.geoObjects.add( polygon )
	}

 /**
  *
  * Функции
  *
  * 02 Инициализация карты
  *
  */


 var MAP;

 var mapInit = function()
 {
 	MAP = new ymaps.Map( 'map', {
 		center: [55.75399400, 37.62209300],
 		zoom: 8,
 	} )
	//Отключаем зум на скролле
	MAP.behaviors.disable("scrollZoom");

	for( var i=0; i<pins.length; i++ )
	{
		addPin.call( MAP, pins[i] )
	}
	addRegion.call( MAP )
 }
 /*
  *
  * Let's rock!
  *
	*/

	ymaps.ready( mapInit );
