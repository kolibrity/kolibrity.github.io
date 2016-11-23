var link = document.querySelector(".write");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]");


var buyButtons = document.querySelectorAll(".buy-btn"), i;
var popupBuy = document.querySelector(".modal-content-buy");
var closeBuy = document.querySelector(".buy-close");
var close2Buy = document.querySelector(".popup-close");


/*Объявление переменных для формы карты*/
var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = document.querySelector(".mapClose");

for (i = 0; i < buyButtons.length; ++i) {
	buyButtons[i].addEventListener("click", function (event) {
		event.preventDefault(event);
		popupBuy.classList.add("modal-content-show-buy");
	})
}

closeBuy.addEventListener("click", function(event) {
	event.preventDefault();
	popupBuy.classList.remove("modal-content-show-buy");
});

close2Buy.addEventListener("click", function(event) {
	event.preventDefault();
	popupBuy.classList.remove("modal-content-show-buy");
});

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	login.focus();
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
				} 
		}
});


mapOpen.addEventListener("click", function(event) {
	event.preventDefault(); 
	mapPopup.classList.add("modal-content-show-map");
});

mapClose.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.remove("modal-content-show-map");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (mapPopup.classList.contains("modal-content-show-map")) {
			mapPopup.classList.remove("modal-content-show-map");
		} 
	}
});
