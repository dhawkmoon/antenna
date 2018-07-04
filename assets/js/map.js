/**
 *
 * Скрипт инициализации яндекс карты с точками, где установленны антенны/вышки.
 *
 * Используется API Yande Maps 2.1.
 *
 *
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
	 //
	 {
		 name: 'ул. Лобачевского 98',
		 text: 'Россия, Москва',
		 coords:[55.68332057, 37.48129800],
		 type: 'receiver',
	 },
	 {
		 name: 'Зеленоград',
		 text: 'Россия, Москва',
		 coords:[55.98459957, 37.19993250],
		 type: 'receiver',
	 },
	 {
		 name: 'Реутов',
		 text: 'Россия, Московская область',
		 coords:[55.76365021, 37.86672000],
		 type: 'receiver',
	 },
	 {
		 name: 'Котельники',
		 text: 'Россия, Московская область',
		 coords:[55.65690026, 37.86294300],
		 type: 'receiver',
	 },
	 {
		 name: '1-я Останкинская улица, 13/1',
		 text: 'Россия, Москва',
		 coords:[55.82487007, 37.61886600],
		 type: 'receiver',
	 },
	 {
		 name: 'Широкая улица, 23к1',
		 text: 'Россия, Москва',
		 coords:[55.88837657, 37.67276500],
		 type: 'receiver',
	 },
	 {name:"Чистопрудный бульвар, 21",text:"Россия, Москва",coords:[55.76066157, 37.64638150],type:"receiver"},
	 {name:"Люберцы",text:"Россия, Московская область",coords:[55.67848102, 37.91671600],type:"receiver"},
	 {name:"Осенняя улица, 14",text:"Россия, Москва",coords:[55.76430307, 37.40573150],type:"receiver"},
	 {name:"деревня Никольское",text:"Россия, Московская область, городской округ Истра",coords:[55.96675583, 36.90060900],type:"receiver"},
	 {name:"Загородное шоссе, вл7",text:"Россия, Москва",coords:[55.69343407, 37.61537150],type:"receiver"},
	 {name:"район Митино",text:"Россия, Москва, Северо-Западный административный округ",coords:[55.84485418, 37.36434200],type:"receiver"},
	 {name:"Липовый парк",text:"Россия, Москва, посёлок Коммунарка",coords:[55.56762601, 37.48447350],type:"receiver"},
	 {name:"улица Недорубова",text:"Россия, Москва",coords:[55.70396638, 37.92897350],type:"receiver"},
	 {name:"Каширское шоссе, 21",text:"Россия, Москва",coords:[55.66241007, 37.63529600],type:"receiver"},
	 {name:"Алтуфьевское шоссе, 47",text:"Россия, Москва",coords:[55.87071807, 37.58432550],type:"receiver"},
	 {name:"проезд Загорского, 5",text:"Россия, Москва",coords:[55.72000757, 37.44262550],type:"receiver"},
	 {name:"улица Бутлерова, 38А",text:"Россия, Москва",coords:[55.64167607, 37.54710850],type:"receiver"},
	 {name:"Поварская улица, 50/53с1",text:"Россия, Москва",coords:[55.75745007, 37.58734400],type:"receiver"},
	 {name:"село Вельяминово",text:"Россия, Московская область, городской округ Домодедово",coords:[55.19157977, 37.86843150],type:"receiver"},
	 {name:"коттеджный посёлок Новогорск-2",text:"Россия, Московская область, городской округ Химки",coords:[55.89901006, 37.36259900],type:"receiver"},
	 {name:"Ленинский проспект, 72/2",text:"Россия, Москва",coords:[55.68572607, 37.54056850],type:"receiver"},
	 {name:"поселок Шувое",text:"Россия, Московская область, городской округ Егорьевск",coords:[55.46980818, 39.08476400],type:"receiver"},
	 {name:"метро Бауманская",text:"Россия, Москва, Арбатско-Покровская линия",coords:[55.77240578, 37.67903550],type:"receiver"},
	 {name:"метро Алтуфьево",text:"Россия, Москва, Серпуховско-Тимирязевская линия",coords:[55.89819978, 37.58736200],type:"receiver"},
	 {name:"посёлок Мещерино",text:"Россия, Московская область, Ленинский район",coords:[55.50920462, 37.81029250],type:"receiver"},
	 {name:"Советская улица, 5",text:"Россия, Московская область, Долгопрудный",coords:[55.93358957, 37.51784150],type:"receiver"},
	 {name:"улица Марии Ульяновой, 16",text:"Россия, Москва",coords:[55.68311257, 37.52180300],type:"receiver"},
	 {name:"Амурская улица, 13",text:"Россия, Амурская область, Благовещенск",coords:[50.25948957, 127.57411950],type:"receiver"},
	 {name:"Бирюлёвская улица",text:"Россия, Москва",coords:[55.59143883, 37.66712350],type:"receiver"},
	 {name:"городское поселение Яхрома",text:"Россия, Московская область, Дмитровский городской округ",coords:[56.26939894, 37.33424350],type:"receiver"},
	 {name:"Ленинградское шоссе, 21",text:"Россия, Москва",coords:[55.82311507, 37.49373950],type:"receiver"},
	 {name:"Погонный проезд",text:"Россия, Москва",coords:[55.81849053, 37.71060200],type:"receiver"},
	 {name:"деревня Верхнее Велино",text:"Россия, Московская область, Раменский район",coords:[55.44315378, 38.21417950],type:"receiver"},
	 {name:"Краснопрудная улица, 30",text:"Россия, Свердловская область, Екатеринбург, Чкаловский район, микрорайон Нижнеисетский",coords:[56.75577807, 60.67591550],type:"receiver"},
	 {name:"проспект Маршала Жукова, 32",text:"Россия, Москва",coords:[55.77661357, 37.47402150],type:"receiver"},
	 {name:"деревня Ивачково",text:"Россия, Московская область, городской округ Чехов",coords:[55.22798964, 37.47642000],type:"receiver"},
	 {name:"Мичуринский проспект",text:"Россия, Москва",coords:[55.69229289, 37.49091000],type:"receiver"},
	 {name:"деревня Романово",text:"Россия, Московская область, Наро-Фоминский городской округ",coords:[55.23728381, 36.85354200],type:"receiver"},
	 {name:"Южнобутовская улица, 33",text:"Россия, Москва",coords:[55.53734207, 37.53773900],type:"receiver"},
	 {name:"улица Юных Ленинцев, 69",text:"Россия, Москва",coords:[55.70027857, 37.76683650],type:"receiver"},
	 {name:"улица Веры Волошиной, 46",text:"Россия, Московская область, Мытищи",coords:[55.89580757, 37.71307250],type:"receiver"},
	 {name:"микрорайон Барыбино",text:"Россия, Московская область, Домодедово",coords:[55.26588127, 37.90173200],type:"receiver"},
	 {name:"Шелепихинское шоссе, 19",text:"Россия, Москва",coords:[55.75960807, 37.52147950],type:"receiver"},
	 {name:"Нижегородская улица, 86кБ",text:"Россия, Москва",coords:[55.73071457, 37.71777950],type:"receiver"},
	 {name:"Старая Басманная улица",text:"Россия, Москва",coords:[55.76687060, 37.66304550],type:"receiver"},
	 {name:"Посланников переулок, 9с1",text:"Россия, Москва",coords:[55.77036007, 37.68325700],type:"receiver"},
	 {name:"Балабаново",text:"Россия, Калужская область, Боровский район",coords:[55.20355478, 36.63594300],type:"receiver"},
	 {name:"Рублёво-Успенское шоссе, 30-й километр",text:"Россия, Московская область, Рублёво-Успенское шоссе",coords:[55.71837751, 36.94681350],type:"receiver"},
	 {name:"деревня Вялки",text:"Россия, Московская область, Раменский район, сельское поселение Вялковское",coords:[55.65802487, 38.08200150],type:"receiver"},
	 {name:"деревня Сатино-Татарское",text:"Россия, Москва, поселение Щаповское",coords:[55.36283824, 37.38929700],type:"receiver"},
	 {name:"село Михайловское",text:"Россия, Московская область, городской округ Домодедово",coords:[55.14137418, 37.80007850],type:"receiver"},
	 {name:"Электросталь",text:"Россия, Московская область",coords:[55.78778349, 38.45190500],type:"receiver"},
	 {name:"Шарикоподшипниковская улица, 32",text:"Россия, Москва",coords:[55.71639207, 37.67621450],type:"receiver"},
	 {name:"Апрелевка",text:"Россия, Московская область, Наро-Фоминский городской округ",coords:[55.54883085, 37.05877550],type:"receiver"},
	 {name:"Варваринская улица, 33с1",text:"Россия, Москва",coords:[55.66967107, 37.42325750],type:"receiver"},
	 {name:"улица Хамовнический Вал, 4",text:"Россия, Москва",coords:[55.71675207, 37.57678000],type:"receiver"},
	 {name:"Кропоткинский переулок, 4с1",text:"Россия, Москва",coords:[55.73758307, 37.59442250],type:"receiver"},
	 {
	 	name: 'Останкинская телебашня',
	 	text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 540 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 10 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 30 (546 МГц)</p><p style="margin:0; text-align:left">Статус: Запущен</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 24 (498 МГц)</p><p style="margin:0; text-align:left">Статус: Запущен</p>',
	 	coords: [55.81961640, 37.61188539],
	 	type: 'emmiter',
	 },
	 {
	 	name: 'Москва, Бутово',
	 	text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 60 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 2 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 30 (546 МГц)</p><p style="margin:0; text-align:left">Статус: Работает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 24 (498 МГц)</p><p style="margin:0; text-align:left">Статус: Работает</p>',
	 	coords: [55.54326023, 37.55367356],
	 	type: 'emmiter',
	 },
	 {
	 	name: 'Московская область, Солнечногорск',
	 	text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 72 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 0,5 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 30 (546 МГц)</p><p style="margin:0; text-align:left">Статус: Работает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 24 (498 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	 	coords: [56.19773424, 36.98791650],
	 	type: 'emmiter',
	 },
	 {
	 	name: 'Московская область, Щелковский район, с. Петровское',
	 	text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 72 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 1 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 30 (546 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 24 (498 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	 	coords: [56.08759929, 38.22675100],
	 	type: 'emmiter',
	 },
	 {
	 	name: 'Московская область, Истринский район, д. Давыдовское',
	 	text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 72 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 0,5 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 30 (546 МГц)</p><p style="margin:0; text-align:left">Статус: Работает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 24 (498 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	 	coords: [55.86186801, 36.79794950],
	 	type: 'emmiter',
	 },
	 {
	 	name: 'Московская область, Наро-Фоминский район, д. Пожитково',
	 	text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 72 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 1 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 30 (546 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 24 (498 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	 	coords: [55.41894417, 36.81540850],
	 	type: 'emmiter',
	 },
	 {
	 	name: 'Московская область, Воскресенский район, д. Богатищево',
	 	text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 72 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 1 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 53 (730 МГц)</p><p style="margin:0; text-align:left">Статус: Работает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 56 (754 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	 	coords: [55.45655349, 38.74209700],
	 	type: 'emmiter',
	 },
	 {
	 	name: 'Москва, Троицкий административный округ, п. Рогово',
	 	text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 72 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 0,5 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 30 (546 МГц)</p><p style="margin:0; text-align:left">Статус: Работает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 24 (498 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	 	coords: [55.21425975, 37.08098600],
	 	type: 'emmiter',
	 },
	 {
	 	name: 'Московская область, Чехов',
	 	text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 72 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 0,5 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 59 (778 МГц)</p><p style="margin:0; text-align:left">Статус: Работает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 58 (770 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	 	coords: [55.15074341, 37.44598050],
	 	type: 'emmiter',
	 },
	 {
	  name: 'Московская область, Рузский район, д. Морево',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 84 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 1 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 59 (778 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 56 (754 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	  coords: [55.63508810, 36.42376950],
	  type: 'emmiter',
	 },
	 {
	  name: 'Калужская область, Обнинск',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> -</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> -</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 52 (722 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 43 (650 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p>',
	  coords: [55.09695810, 36.59782750],
	  type: 'emmiter',
	 },
	 //
	 {
	  name: 'Калужская область, Обнинск',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 119 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 1 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 59 (778 МГц)</p><p style="margin:0; text-align:left">Статус: Работает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 58 (770 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	  coords: [54.92418246, 37.41119800],
	  type: 'emmiter',
	 },
	 {
	  name: 'Тульская область, Ясногорский район, с. Башино',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> -</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> -</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 52 (722 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 43 (650 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p>',
	  coords: [54.70697131, 37.92524550],
	  type: 'emmiter',
	 },
	 {
	  name: 'Тульская область, Заокский',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> -</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> -</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 34 (578 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 60 (786 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	  coords: [54.66648879, 37.48450500],
	  type: 'emmiter',
	 },
	 {
	  name: 'Московская область, Ступино',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 84 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 1 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 59 (778 МГц)</p><p style="margin:0; text-align:left">Статус: Работает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 58 (770 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	  coords: [54.89220605, 38.10035850],
	  type: 'emmiter',
	 },
	 {
	  name: 'Московская область, Ступинский район, д. Алфимово',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 72 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 0,5 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 59 (778 МГц)</p><p style="margin:0; text-align:left">Статус: Работает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 58 (770 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	  coords: [55.11272596, 38.33174200],
	  type: 'emmiter',
	 },
	 {
	  name: 'Московская область, Озеры',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 55 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 1 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 59 (778 МГц)</p><p style="margin:0; text-align:left">Статус: Работает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 58 (770 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	  coords: [54.85922487, 38.53176550],
	  type: 'emmiter',
	 },
	 //
	 {
	  name: 'Московская область, Зарайск',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 199 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 5 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 59 (778 МГц)</p><p style="margin:0; text-align:left">Статус: Работает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 58 (770 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	  coords: [54.76204914, 38.88811400],
	  type: 'emmiter',
	 },
	 {
	  name: 'Московская область, Егорьевский район, д. Кузьминки',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 90 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 2 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 53 (730 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 56 (754 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	  coords: [55.22815857, 39.06289400],
	  type: 'emmiter',
	 },
	 {
	  name: 'Московская область, Шатура',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 245 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 5 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 53 (730 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 56 (754 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p>',
	  coords: [55.58637174, 39.54727050],
	  type: 'emmiter',
	 },
	 {
	  name: 'Московская область, Орехово-Зуевский район, гп Ликино-Дулево',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 84 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 1 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 53 (730 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 56 (754 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	  coords: [55.71661016, 38.94440650],
	  type: 'emmiter',
	 },
	 {
	  name: 'Владимирская область, Киржач',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> -</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> -</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 35 (586 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 22 (482 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	  coords: [56.14913053, 38.86770800],
	  type: 'emmiter',
	 },
	 {
	  name: 'Владимирская область, Александров',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> -</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> -</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 35 (586 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 22 (482 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p>',
	  coords: [56.39198419, 38.71826900],
	  type: 'emmiter',
	 },
	 {
	  name: 'Московская область, Сергиево-Посадский район, с. Мишутино',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 72 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 1 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 30 (546 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 56 (754 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	  coords: [56.38368744, 38.09980550],
	  type: 'emmiter',
	 },
	 {
	  name: 'Московская область, Дмитровский район, с. Подчерково',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 72 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 0,5 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 30 (546 МГц)</p><p style="margin:0; text-align:left">Статус: Работает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 24 (498 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	  coords: [56.37642559, 37.55096250],
	  type: 'emmiter',
	 },
	 {
	  name: 'Московская область, Дмитровский район, д. Новоселки',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 72 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 0,1 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 30 (546 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 56 (754 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	  coords: [56.37358909, 37.11388700],
	  type: 'emmiter',
	 },
	 {
	  name: 'Московская область, Солнечногорск',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 72 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 0,5 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 30 (546 МГц)</p><p style="margin:0; text-align:left">Статус: Работает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 24 (498 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	  coords: [56.19773424, 36.98791650],
	  type: 'emmiter',
	 },
	 {
	  name: 'Московская область, Клин',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 90 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 2 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 59 (778 МГц)</p><p style="margin:0; text-align:left">Статус: Работает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 56 (754 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	  coords: [56.34534932, 36.74075800],
	  type: 'emmiter',
	 },
	 {
	  name: 'Московская область, Талдомский район, пгт Северный',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 120 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 2 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 30 (546 МГц)</p><p style="margin:0; text-align:left">Статус: Работает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 24 (498 МГц)</p><p style="margin:0; text-align:left">Статус: Работает</p>',
	  coords: [56.72718052, 37.62232450],
	  type: 'emmiter',
	 },
	 {
	  name: 'Тверская область, Кимры',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> -</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> -</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 37 (602 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 58 (770 МГц)</p><p style="margin:0; text-align:left">Статус: Законсервирован</p>',
	  coords: [56.85729796, 37.32610050],
	  type: 'emmiter',
	 },
	 //
	 {
	  name: 'Тверская область, Конаковский район, пгт Новозавидовский',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> -</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> -</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 37 (602 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 58 (770 МГц)</p><p style="margin:0; text-align:left">Статус: Законсервирован</p>',
	  coords: [56.55286101, 36.43088900],
	  type: 'emmiter',
	 },
	 {
	  name: 'Московская область, Волоколамск',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 246 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 5 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 59 (778 МГц)</p><p style="margin:0; text-align:left">Статус: Запущен</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 56 (754 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	  coords: [56.03060013, 35.95319650],
	  type: 'emmiter',
	 },
	 {
	  name: 'Московская область, Шаховской район, д. Жилые горы',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 48 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 0,25 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 59 (778 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 56 (754 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	  coords: [56.02170109, 35.45277150],
	  type: 'emmiter',
	 },
	 {
	  name: 'Тверская область, Зубцовский район, с. Погорелое Городище',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> -</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> -</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 26 (514 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 46 (674 МГц)</p><p style="margin:0; text-align:left">Статус: Законсервирован</p>',
	  coords: [56.13626148, 34.93142550],
	  type: 'emmiter',
	 },
	 {
	  name: 'Смоленская область, Гагаринский район, с. Карманово',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> -</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> -</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 39 (618 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 44 (658 МГц)</p><p style="margin:0; text-align:left">Статус: Законсервирован</p>',
	  coords: [55.84228913, 34.85938950],
	  type: 'emmiter',
	 },
	 {
	  name: 'Смоленская область, Гагаринский район, д. Акатово',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> -</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> -</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 58 (770 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 31 (554 МГц)</p><p style="margin:0; text-align:left">Статус: Законсервирован</p>',
	  coords: [55.59363167, 35.19454200],
	  type: 'emmiter',
	 },
	 //
	 {
	  name: 'Московская область, Можайский район, д. Мокрое',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 72 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 1 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 59 (778 МГц)</p><p style="margin:0; text-align:left">Статус: Работает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 56 (754 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	  coords: [55.44793330, 35.51165650],
	  type: 'emmiter',
	 },
	 {
	  name: 'Московская область, Можайский район, д. Отяково',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> 150 м.</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> 2 кВт</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 59 (778 МГц)</p><p style="margin:0; text-align:left">Статус: Работает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 56 (754 МГц)</p><p style="margin:0; text-align:left">Статус: Строится</p>',
	  coords: [55.47872998, 36.07757700],
	  type: 'emmiter',
	 },
	 {
	  name: 'Смоленская область, Темкинский район, д. Рязаново',
	  text: '<p style="margin:0; text-align:left"><b>Высота вышки:</b> -</p><p style="margin:0; text-align:left"><b>Мощность передатчика:</b> -</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-1 (первый мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 58 (770 МГц)</p><p style="margin:0; text-align:left">Статус: Вещает</p><p style="margin:0; text-align:left; margin-top:7px;"><b>РТРС-2 (второй мультиплекс)</b></p><p style="margin:0; text-align:left">ТВК 31 (554 МГц)</p><p style="margin:0; text-align:left">Статус: Законсервирован</p>',
	  coords: [55.25191364, 35.14704400],
	  type: 'emmiter',
	 },
 ];
 /**
  *
  * 02 Get Pin Content
  *
  * @func
  *
  * СОбирает описание метки
  *
  */
	var getPinContent = function( pin )
	{
		return '<div style="padding:10px 0 10px 10px"><h3 style="margin:0; font-size:18px; text-align:left; margin-bottom:5px;">'+pin.name+'</h3>'+pin.text+'</div>'
	}

	/**
   *
   * 03 Add Pin
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
		 var size = [12, 18]
		 var offset = [-6,-18]
	 }
	 else {
		 var src = 'assets/img/emmiter.svg'
		 var size = [27, 50]
		 var offset = [-14,-50]
	 }
	 var placemark = new ymaps.Placemark( pin.coords, {
		 hintContent: pin.name,
		 balloonContent: getPinContent( pin ),
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

	var getZoom = function()
	{
		if( $(window).width() <= 768 ) {
	 		return 7
	 	}
	 	else {
	 		return 8
	 	}
	}

 /**
  *
  * Функции
  *
  * 04 Инициализация карты
  *
  */


 var MAP;

 var mapInit = function()
 {
	var zoom = getZoom();
 	MAP = new ymaps.Map( 'map', {
 		center: [55.75399400, 37.62209300],
 		zoom: zoom,
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
	if( typeof ymaps != 'undefined' )
		ymaps.ready( mapInit );
