let form = document.querySelector('.form');
let nameInput = form.querySelector('.form__NameInput');
let jobInput = form.querySelector('.form__JobInput');
let title = document.querySelector('.info__title')
let subtitle = document.querySelector('.info__subtitle')
let nameValue = nameInput.value;
let jobValue = jobInput.value;

function formSubmitHandler (evt) {
    evt.preventDefault();
    title = nameValue.textContent;
    subtitle = jobValue.textContent;
}
form.addEventListener('submit', formSubmitHandler)

console.log(nameValue);
console.log(jobValue);


let button = form.querySelector('.form__saveButton')
button.addEventListener('click', () => {
    popupOpen.classList.toggle('popup_open')
})