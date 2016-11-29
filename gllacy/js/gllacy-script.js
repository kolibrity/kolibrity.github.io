var map;
var marker;
var image;
var link = document.querySelector(".feedback");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]");
var overlay = document.querySelector(".modal-overlay");


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
    icon: 'img/marker-map.png'
	});
}

link.addEventListener("click", function(event) {
	event.preventDefault(); /* Отмена действий браузера по умолчанию*/
	popup.classList.add("modal-content-show");
	overlay.classList.add("modal-overlay-show");
		login.focus();
});

/* Закрыть форму при клике на крестик*/
close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	overlay.classList.remove("modal-overlay-show");
	popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) /*keyCode - свойство, в котоом находится номер, идентификатор клавиши, которая была нажата в момент события*/ {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
		} /*Проверяется открт ли попап, и если открыт, то закрыть его*/
		if (overlay.classList.contains("modal-overlay-show")) {
			overlay.classList.remove("modal-overlay-show");
		}
	}
});



