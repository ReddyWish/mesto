let like = document.querySelectorAll('.card__like');
for (let i = 0; i < like.length; i++) {
   like[i].addEventListener('click', () => {
       like[i].classList.toggle('card__like_active')
   })
   }


let editButton = document.querySelector('.edit-button')
let popup = document.querySelector('.popup')

editButton.addEventListener('click', () => {
    popup.classList.add('popup_open')
})

let popupClose = document.querySelector('.popup__close')
popupClose.addEventListener('click', () => {
    popup.classList.remove('popup_open')
})

let form = document.querySelector('.popup__form');
let nameInput = document.querySelector('.name');
let jobInput = document.querySelector('.job');
// let Input = form.querySelector('.popup__input');
let title = document.querySelector('.profile__title')
let subtitle = document.querySelector('.profile__subtitle')
let nameValue = nameInput.value;
let jobValue = jobInput.value;



function formSubmitHandler (evt) {
    evt.preventDefault();
    document.querySelector('.profile__title').textContent = document.querySelector('.name').value
    document.querySelector('.profile__subtitle').textContent = document.querySelector('.job').value

}
form.addEventListener('submit', formSubmitHandler)


let button = form.querySelector('.popup__save-button')
button.addEventListener('click', () => {
    popup.classList.remove('popup_open')
})






