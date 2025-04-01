const btnOpen = document.querySelector('.btn-open');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.close-btn');

// Открытие модального окна
btnOpen.addEventListener('click', () => {
  modal.classList.add('modal-open')
})
// Закрытие модального окна на крестик
btnClose.addEventListener('click', () => { 
    modal.classList.remove('modal-open') 
})
// Закрытие модального окна на затемненную область
modal.addEventListener('click', (event) => {
  if(event.target === modal) {
    modal.classList.remove('modal-open')
  }
})
// Закрытие модального окна на клавишу Escape
document.addEventListener('keydown', (event) => {
  if(event.key === 'Escape') {
    modal.classList.remove('modal-open')
  }
})









































