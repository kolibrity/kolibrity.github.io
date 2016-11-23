var buyButtons = document.querySelectorAll(".buy-btn"), i;
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var close2 = document.querySelector(".popup-close");



// buy.addEventListener("click", function(event) {
// 	event.preventDefault();
// 	popup.classList.add("modal-content-show");
// });

for (i = 0; i < buyButtons.length; ++i) {
	buyButtons[i].addEventListener("click", function (event) {
		event.preventDefault(event);
		popup.classList.add("modal-content-show");
	})
}


close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
});

close2.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
				} 
		}
});


