let popup = document.querySelector('.info__editButton')
let popupOpen = document.querySelector('.popup')

popup.addEventListener('click', () => {
    popupOpen.classList.toggle('popup_open')
})

let popupClose = document.querySelector('.popup__close')
popupClose.addEventListener('click', () => {
    popupOpen.classList.toggle('popup_open')
})




