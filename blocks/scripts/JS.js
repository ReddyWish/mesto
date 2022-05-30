let like = document.querySelectorAll('.bottom__like');
for (let i = 0; i < like.length; i++) {
   like[i].addEventListener('click', () => {
       like[i].classList.toggle('bottom__like_active')
   })
   }


let editButton = document.querySelector('.info__edit-button')
let popup = document.querySelector('.popup')

editButton.addEventListener('click', () => {
    popup.classList.add('popup_open')
})

let popupClose = document.querySelector('.popup__close')
popupClose.addEventListener('click', () => {
    popup.classList.remove('popup_open')
})

let form = document.querySelector('.form');
// let nameInput = form.querySelector('.form__name-input');
// let jobInput = form.querySelector('.form__job-input');
let Input = form.querySelector('.form__input');
let title = document.querySelector('.info__title')
let subtitle = document.querySelector('.info__subtitle')
let nameValue = Input.value;
// let jobValue = jobInput.value;

function formSubmitHandler (evt) {
    evt.preventDefault();
    title = nameValue.textContent;
    subtitle = jobValue.textContent;
}
form.addEventListener('submit', formSubmitHandler)


let button = form.querySelector('.form__save-button')
button.addEventListener('click', () => {
    popup.classList.toggle('popup_open')
})





