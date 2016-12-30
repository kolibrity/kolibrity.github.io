var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
	if (navMain.classList.contains('main-nav--closed')) {
		navMain.classList.remove('main-nav--closed');
		navMain.classList.add('main-nav--opened');
	} else {
		navMain.classList.add('main-nav--closed');
		navMain.classList.remove('main-nav--opened');
	}
});


/*Добавление и стилизация карты*/
var map;
var marker;
var image;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 59.9387942, lng: 30.3225036},
		zoom: 13
	});

// Создаем маркер на карте
	marker = new google.maps.Marker({
// Определяем позицию маркера
		position: {lat: 59.9387942, lng: 30.3225036},
// Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
		map: map,
// Пишем название маркера - появится если навести на него курсор и немного подождать
		title: 'HTML Academy',
// Укажем свою иконку для маркера
    icon: "../img/map-marker.png"
	});
}
