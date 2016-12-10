/*Объявляение переменных для формы z*/
var linkProject = document.querySelector(".create-project");
var linkTask = document.querySelector(".task-open");
var linkNewTask = document.querySelector(".new-task");

var popupProject = document.querySelector(".modal-content__new-project");
var popupTask = document.querySelector(".modal-content__open-task");
var popupNewTask = document.querySelector(".modal-content__create-task");
var overlay = document.querySelector(".modal-overlay");

var closeProject = document.querySelector(".modal-content-close__project");
var closeTask = document.querySelector(".modal-content-close__task-open");
var closeNewTask = document.querySelector(".modal-content-close__new-task");

var formProject = popupProject.querySelector(".project-form");
var formNewTask = popupNewTask.querySelector(".task-form");

var projectName = popupProject.querySelector("[name=project]");
var newTaskName = popupNewTask.querySelector("[name=task]");
var newTaskDescription = popupNewTask.querySelector("[name=description]");


linkProject.addEventListener("click", function(event) {
	event.preventDefault(); 
	popupProject.classList.add("modal-content-show");
	overlay.classList.add("modal-content-show");
	projectName.focus(); /* Поле в фокусе во время открытия формы*/});

linkTask.addEventListener("click", function(event) {
	event.preventDefault(); /* Отмена действий браузера по умолчанию*/
	popupTask.classList.add("modal-content-show");
	overlay.classList.add("modal-content-show");
});

linkNewTask.addEventListener("click", function(event) {
	event.preventDefault(); /* Отмена действий браузера по умолчанию*/
	popupNewTask.classList.add("modal-content-show");
	newTaskName.focus();
	overlay.classList.add("modal-content-show");
});

/* Закрыть форму при клике на крестик*/
closeProject.addEventListener("click", function(event) {
	event.preventDefault();
	popupProject.classList.remove("modal-content-show");
	popupProject.classList.remove("modal-error");
	overlay.classList.remove("modal-content-show");
});

closeTask.addEventListener("click", function(event) {
	event.preventDefault();
	popupTask.classList.remove("modal-content-show");
	popupTask.classList.remove("modal-error");
	overlay.classList.remove("modal-content-show");
});

closeNewTask.addEventListener("click", function(event) {
	event.preventDefault();
	popupNewTask.classList.remove("modal-content-show");
	popupNewTask.classList.remove("modal-error");
	overlay.classList.remove("modal-content-show");
});

/* Не отправлять данные если поля формы пустые */
formProject.addEventListener("submit"/* Отслеживает все события submit */, function(event) {
	if (!projectName.value) /*если значение отсутствует у поля project , то будет выполняться действие в фигурных скобках*/ {
	event.preventDefault();
	popupProject.classList.add("modal-error");/*Добавляем класс анимации в случае не заполенного поля*/
	}
});

formNewTask.addEventListener("submit"/* Отслеживает все события submit */, function(event) {
	if (!newTaskName.value || !newTaskDescription.value) /*если значение отсутствует у поля task или у поля description(или у обоих полей сразу), то будет выполняться действие в фигурных скобках*/ {
	event.preventDefault();
	popupNewTask.classList.add("modal-error");
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) /*keyCode - свойство, в котоом находится номер, идентификатор клавиши, которая была нажата в момент события*/ {
		if (popupProject.classList.contains("modal-content-show")) {
			popupProject.classList.remove("modal-content-show");
			overlay.classList.remove("modal-content-show");
		} /*Проверяется открт ли попап, и если открыт, то закрыть его*/
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popupTask.classList.contains("modal-content-show")) {
			popupTask.classList.remove("modal-content-show");
	overlay.classList.remove("modal-content-show");
		} 
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popupNewTask.classList.contains("modal-content-show")) {
			popupNewTask.classList.remove("modal-content-show");
	overlay.classList.remove("modal-content-show");
		} 
	}
});


/**/