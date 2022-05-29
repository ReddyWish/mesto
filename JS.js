let like = document.querySelectorAll('.bottom__like');
for (let i = 0; i < like.length; i++) {
   like[i].addEventListener('click', () => {
       like[i].classList.toggle('bottom__like_active')
   })
   }





